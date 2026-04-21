#!/bin/bash
set -e

PROJECT_NAME="ai_demo_platform"
VENV_DIR="venv"
BACKEND_PORT=8000
FRONTEND_PORT=8501

echo "Creating project root: ${PROJECT_NAME}"
mkdir -p ${PROJECT_NAME}
cd ${PROJECT_NAME}

echo "Generating configuration file (.env)..."
cat << 'EOF' > .env
# AWS Configuration
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_DEFAULT_REGION=eu-central-1

# Vector DB Configuration
PINECONE_API_KEY=your_pinecone_api_key

# Application Ports
BACKEND_PORT=8000
FRONTEND_PORT=8501
EOF