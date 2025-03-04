import cv2
import numpy as np
import torch
import torchvision.transforms as transforms
from PIL import Image
import segmentation_models_pytorch as smp
import matplotlib.pyplot as plt


# Define paths
MODEL_PATH = r"C:\Users\shadi\Desktop\road_segmentation_model1.pth"
IMAGE_PATH = r"C:\Users\shadi\Desktop\map_snapshot.png"
OUTPUT_PATH = "./output_mask.png"


# Set device
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Load model


def get_model():
    model = smp.Unet(
        encoder_name="mobilenet_v2",    # Lightweight encoder
        encoder_weights="imagenet",     # Pre-trained on ImageNet
        in_channels=1,                  # Input channels (3 for RGB images)
        # Output channels (1 for binary segmentation)
        classes=1,
    )
    return model


def load_model(model_path):
    try:
        model = get_model().to(device)
        model.load_state_dict(torch.load(model_path, map_location=device))
        model.eval()
        print("Model loaded successfully.")
        return model
    except Exception as e:
        print(f"Error loading model: {e}")
        return None

# Preprocess input image


def preprocess_image(image_path):
    image = Image.open(image_path).convert("RGB")
    transform = transforms.Compose([
        transforms.Resize((256, 256)),
        transforms.Grayscale(num_output_channels=1),  # Converting to grayscale
        transforms.ToTensor(),
        # Normalization for grayscale
        transforms.Normalize(mean=[0.5], std=[0.5])
    ])
    return transform(image).unsqueeze(0).to(device), image


def displayprocessimage(image):
    displayTransform = transforms.Compose([
        transforms.Resize((256, 256)),
    ])
    return displayTransform(image)

# Run inference


def run_inference(model, image):
    with torch.no_grad():
        output = model(image).squeeze(1)
        predicted_mask = torch.sigmoid(output).cpu().numpy()
    return (predicted_mask > 0.2).astype(np.uint8)  # Threshold at 0.25

# Save and display result


def save_and_show_result(image, mask, output_path):
    plt.figure(figsize=(10, 5))
    plt.subplot(1, 2, 1)
    plt.imshow(displayprocessimage(image))
    plt.title("Test Image")
    plt.axis("off")

    plt.subplot(1, 2, 2)
    plt.imshow(mask[0], cmap="gray")
    plt.title("Predicted Segmentation")
    plt.axis("off")

    plt.savefig(output_path)
    plt.show()
    print(f"Output saved to {output_path}")


if __name__ == "__main__":
    model = load_model(MODEL_PATH)
    if model:
        image_tensor, original_image = preprocess_image(IMAGE_PATH)
        mask = run_inference(model, image_tensor)
        save_and_show_result(original_image, mask, OUTPUT_PATH)
