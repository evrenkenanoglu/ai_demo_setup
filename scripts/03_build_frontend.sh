#!/bin/bash
set -e

PROJECT_NAME="ai_demo_platform"

cd ${PROJECT_NAME}

echo "Generating frontend code (frontend/app.py)..."
cat << 'EOF' > frontend/app.py
import streamlit as st
import requests
import uuid
import os
from dotenv import load_dotenv

load_dotenv()
BACKEND_PORT = os.getenv("BACKEND_PORT", "8000")
API_URL = f"http://localhost:{BACKEND_PORT}"

st.set_page_config(page_title="AI Inference Demo", layout="wide")

if "session_id" not in st.session_state:
    st.session_state.session_id = str(uuid.uuid4())

st.title("Secure Professional AI Interface")

uploaded_file = st.file_uploader("Upload Document (PDF)", type="pdf")
if uploaded_file is not None:
    if st.button("Process Document"):
        files = {"file": (uploaded_file.name, uploaded_file.getvalue(), "application/pdf")}
        response = requests.post(f"{API_URL}/upload", files=files)
        if response.status_code == 200:
            st.success("Document embedded into secure cloud vector store")

query = st.text_input("Enter prompt:")
if st.button("Submit Query"):
    if query:
        payload = {"query": query, "session_id": st.session_state.session_id}
        response = requests.post(f"{API_URL}/generate", json=payload)
        if response.status_code == 200:
            st.write("### Inference Output")
            st.write(response.json().get("response"))

if st.button("Terminate Session & Purge"):
    response = requests.delete(f"{API_URL}/clear_session/{st.session_state.session_id}")
    if response.status_code == 200:
        st.session_state.session_id = str(uuid.uuid4())
        st.success("Session data wiped from all cloud stores")
EOF