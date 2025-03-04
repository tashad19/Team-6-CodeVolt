# ENHANCING MAPS: USER DRIVEN EXPLORATION AND UPDATES

A user-driven mapping solution leveraging GPS, IMU, and AI to detect, classify, and update locations in Raptee maps efficiently.

## Directory Structure

```bash
/
|-- frontend/   # React frontend
|-- backend/    # FastAPI backend
```

## Features

Frontend: Built with React, offering a responsive UI.

Backend: FastAPI for handling API requests efficiently.

## Setup Instructions

### Prerequisites

- Node.js & npm installed

- Python 3.x installed

- FastAPI dependencies installed

### Backend Setup (FastAPI)

Navigate to the backend folder:

```bash
cd backend
```

Create and activate a virtual environment (optional but recommended):

```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the FastAPI server:

```bash
uvicorn main:app --reload
```

API will be available at <a href="http://127.0.0.1:8000" target="_blank"> http://127.0.0.1:8000 </a>

### Frontend Setup (React)

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React development server:

```bash
npm run dev
```

The application will be available at http://localhost:3000
