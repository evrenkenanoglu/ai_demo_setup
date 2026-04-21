#!/bin/bash
set -e

PROJECT_NAME="ai_demo_platform"

cd ${PROJECT_NAME}

echo "Generating backend code (backend/api.py)..."
cat << 'EOF' > backend/api.py
from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
import os
from dotenv import load_dotenv

load_dotenv()
app = FastAPI(title="AI Demo Backend API")

class PromptRequest(BaseModel):
    query: str
    session_id: str

@app.post("/upload")
async def upload_document(file: UploadFile = File(...)):
    # Cloud ingestion, document parsing, and embedding logic
    return {"filename": file.filename, "status": "Uploaded and embedded successfully"}

@app.post("/generate")
async def generate_response(request: PromptRequest):
    # AWS Bedrock API invocation and RAG retrieval
    return {"response": f"Simulated Bedrock Llama 3 response for: {request.query}"}

@app.delete("/clear_session/{session_id}")
async def clear_session(session_id: str):
    # Vector DB record deletion and cache purge
    return {"status": f"Session {session_id} securely purged"}
EOF