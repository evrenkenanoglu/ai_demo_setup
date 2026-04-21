#!/bin/bash
set -e

PROJECT_NAME="ai_demo_platform"
VENV_DIR="venv"

cd ${PROJECT_NAME}

echo "Creating directory structure..."
mkdir -p backend frontend data

echo "Initializing Python virtual environment..."
python3 -m venv ${VENV_DIR}
source ${VENV_DIR}/bin/activate

echo "Installing required Python dependencies..."
pip install --upgrade pip
pip install streamlit fastapi uvicorn langchain langchain-aws boto3 pinecone-client pypdf2 python-dotenv python-multipart

echo "Freezing dependencies..."
pip freeze > requirements.txt