from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn
from pydantic import BaseModel
import requests
import os
from io import BytesIO
from PIL import Image
import numpy as np
import torch
import torchvision.transforms as transforms
import segmentation_models_pytorch as smp

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create directories for templates and static files
os.makedirs("templates", exist_ok=True)
os.makedirs("static", exist_ok=True)

# Mount static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Set up templates
templates = Jinja2Templates(directory="templates")

# Simulated GPS data stream (replace with real GPS data in production)
gps_data = [
    {"latitude": 22.846275, "longitude": 86.189584},
    {"latitude": 22.846339, "longitude": 86.189522},
    {"latitude": 22.846458, "longitude": 86.189429},
    {"latitude": 22.846537, "longitude": 86.189286},
    {"latitude": 22.846619, "longitude": 86.189268},
    {"latitude": 22.846747, "longitude": 86.189260},
    {"latitude": 22.846784, "longitude": 86.189321},
]

# Store the path and surface data for the HTML rendering
all_coordinates = []
unknown_surface_coordinates = []


class Coordinate(BaseModel):
    latitude: float
    longitude: float


def get_road_surface(lat, lon):
    overpass_url = "http://overpass-api.de/api/interpreter"
    overpass_query = f"""
    [out:json];
    way["highway"](around:50,{lat},{lon});
    out body;
    >;
    out skel qt;
    """

    response = requests.get(overpass_url, params={'data': overpass_query})
    data = response.json()

    for element in data['elements']:
        if 'tags' in element:
            return element['tags'].get('surface', 'unknown')

    return 'unknown'


@app.get("/get_coordinates")
async def get_coordinates():
    if gps_data:
        coord = gps_data.pop(0)
        surface = get_road_surface(coord['latitude'], coord['longitude'])

        # Store all coordinates
        all_coordinates.append({**coord, "surface": surface})

        # Store unknown surface coordinates separately
        if surface == 'unknown':
            unknown_surface_coordinates.append({**coord, "surface": surface})

        return JSONResponse(content={**coord, "surface": surface})
    else:
        return JSONResponse(content={"status": "end"})


@app.get("/", response_class=HTMLResponse)
async def get_map():
    # Generate HTML with the path and MapTiler satellite imagery
    html_content = generate_map_html()

    # Save the HTML to the templates directory
    with open("templates/rider_path.html", "w") as f:
        f.write(html_content)

    return HTMLResponse(content=html_content)

# Add segmentation model
MODEL_PATH = r"C:\Users\shadi\Desktop\road_segmentation_model1.pth"

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")


def get_model():
    model = smp.Unet(
        encoder_name="mobilenet_v2",    # Lightweight encoder
        encoder_weights="imagenet",     # Pre-trained on ImageNet
        in_channels=1,                  # Input channels (3 for RGB images)
        # Output channels (1 for binary segmentation)
        classes=1,
    )
    return model


model = get_model().to(device)
model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
model.eval()


def preprocess_image(image):
    transform = transforms.Compose([
        transforms.Resize((256, 256)),
        transforms.Grayscale(num_output_channels=1),  # Converting to grayscale
        transforms.ToTensor(),
        # Normalization for grayscale
        transforms.Normalize(mean=[0.5], std=[0.5])
    ])
    return transform(image).unsqueeze(0).to(device)


def run_inference(model, image):
    with torch.no_grad():
        output = model(image).squeeze(1)
        predicted_mask = torch.sigmoid(output).cpu().numpy()
    return (predicted_mask > 0.5).astype(np.uint8)  # Threshold at 0.25


@app.post("/process_image/")
async def process_image(image_data: str = Form(...)):
    try:
        # Decode base64 image data
        image = Image.open(BytesIO(requests.get(image_data).content)).convert("RGB")

        # Preprocess the image
        image_tensor = preprocess_image(image)

        # Run inference
        mask = run_inference(model, image_tensor)

        # Convert mask to list for JSON response. Also, let's return the coordinates where road is predicted
        road_coordinates = np.argwhere(mask[0] == 1)
        road_coordinates_list = road_coordinates.tolist()

        # Here return the coordinates of the detected road, or return the mask
        return JSONResponse(content={"road_coordinates": road_coordinates_list})
    except Exception as e:
        return JSONResponse(content={"error": str(e)})


# backend.py
def generate_map_html():
    # Replace with your MapTiler API key
    maptiler_api_key = "uArsHJuTKubTu0k8Gj7O"

    # Start HTML with satellite map from MapTiler
    html = """
        <!DOCTYPE html>
        <html>
        <head>
            <title>Rider Path on Unmapped Roads</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>

            <!-- Leaflet Image Plugin -->
            <script src="https://unpkg.com/leaflet-image@0.4.0/leaflet-image.js"></script>

            <style>
                body { margin: 0; padding: 0; }
                #map { width: 100%; height: 100vh; }
                .info {
                    padding: 6px 8px;
                    font: 14px/16px Arial, Helvetica, sans-serif;
                    background: white;
                    background: rgba(255,255,255,0.8);
                    box-shadow: 0 0 15px rgba(0,0,0,0.2);
                    border-radius: 5px;
                }
                .legend {
                    line-height: 18px;
                    color: #555;
                }
                .legend i {
                    width: 18px;
                    height: 18px;
                    float: left;
                    margin-right: 8px;
                    opacity: 0.7;
                }
                #downloadButton {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    z-index: 1000;
                    background-color: white;
                    padding: 5px 10px;
                    border: 1px solid #ccc;
                    cursor: pointer;
                }
                 #analyzeButton {
                    position: absolute;
                    top: 60px;
                    right: 10px;
                    z-index: 1000;
                    background-color: white;
                    padding: 5px 10px;
                    border: 1px solid #ccc;
                    cursor: pointer;
                }
            </style>
        </head>
        <body>
            <div id="map"></div>
            <button id="downloadButton">Download Map Image</button>
            <button id="analyzeButton">Analyze Current View</button>

            <script>
    """

    # Add JavaScript dynamically inside an f-string
    html += f"""
            var map = L.map('map');

            // Add MapTiler satellite layer
            L.tileLayer('https://api.maptiler.com/maps/satellite/{{z}}/{{x}}/{{y}}.jpg?key={maptiler_api_key}', {{
                tileSize: 512,
                zoomOffset: -1,
                minZoom: 1,
                attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
                crossOrigin: true
            }}).addTo(map);

            // Define path points
            var allCoordinates = {all_coordinates};
            var unknownSurfaceCoordinates = {unknown_surface_coordinates};

            // Plot the full path
            var pathPoints = [];
            var unknownPathPoints = [];

            allCoordinates.forEach(function(point) {{
                pathPoints.push([point.latitude, point.longitude]);
                if (point.surface === 'unknown') {{
                    unknownPathPoints.push([point.latitude, point.longitude]);
                }}
            }});

            // Add the full path with different colors based on surface type
            for (var i = 0; i < pathPoints.length - 1; i++) {{
                var color = allCoordinates[i].surface === 'unknown' ? 'red' : 'blue';
                var weight = allCoordinates[i].surface === 'unknown' ? 6 : 3;
                L.polyline([pathPoints[i], pathPoints[i+1]], {{color: color, weight: weight}}).addTo(map);
            }}

            // Add markers for unknown surface points
            unknownSurfaceCoordinates.forEach(function(point) {{
                L.circleMarker([point.latitude, point.longitude], {{
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 8
                }}).bindPopup('Unknown Surface').addTo(map);
            }});

            // Add legend
            var legend = L.control({{ position: 'bottomright' }});

            legend.onAdd = function(map) {{
                var div = L.DomUtil.create('div', 'info legend');
                div.innerHTML =
                    '<i style="background:#0000ff"></i> Known Surface<br>' +
                    '<i style="background:#ff0000"></i> Unknown Surface<br>';
                return div;
            }};

            legend.addTo(map);

            // Set map view to unknown surface points or default
            if (unknownSurfaceCoordinates.length > 0) {{
                var bounds = L.latLngBounds(unknownSurfaceCoordinates.map(function(coord) {{
                    return [coord.latitude, coord.longitude];
                }}));
                map.fitBounds(bounds);
            }} else if (pathPoints.length > 0) {{
                map.fitBounds(L.latLngBounds(pathPoints));
            }}
            else {{
                map.setView([22.846275, 86.189584], 15);
            }}

            // Add download button functionality
            document.getElementById('downloadButton').addEventListener('click', function() {{
                leafletImage(map, function(err, canvas) {{
                    var img = document.createElement('img');
                    var dimensions = map.getSize();
                    img.width = dimensions.x;
                    img.height = dimensions.y;
                    img.src = canvas.toDataURL();

                    // Create a download link
                    var link = document.createElement('a');
                    link.href = img.src;
                    link.download = 'map_snapshot.png';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }});
            }});

             // Add analyze button functionality
            document.getElementById('analyzeButton').addEventListener('click', function() {{
                leafletImage(map, function(err, canvas) {{
                    var img = document.createElement('img');
                    var dimensions = map.getSize();
                    img.width = dimensions.x;
                    img.height = dimensions.y;
                    img.src = canvas.toDataURL();
                    var imageData = img.src

                    // Send the image data to the server for processing
                    fetch('/process_image/', {{
                        method: 'POST',
                        headers: {{
                            'Content-Type': 'application/x-www-form-urlencoded'  // Important!
                        }},
                        body: 'image_data=' + encodeURIComponent(imageData)  // Send as a form-encoded string
                    }})
                    .then(response => response.json())
                    .then(data => {{
                        if (data.error) {{
                            console.error('Error processing image:', data.error);
                            alert('Error processing image: ' + data.error);
                        }} else {{
                            console.log('Segmentation result:', data.road_coordinates);
                            alert('Road coordinates: ' + JSON.stringify(data.road_coordinates));  // Display the result
                            // TODO: Display the result on the map (e.g., overlay the mask)
                        }}
                    }})
                    .catch(error => {{
                        console.error('Error sending image:', error);
                        alert('Error sending image: ' + error);
                    }});
                }});
            }});
        </script>
        </body>
        </html>
    """

    return html


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)