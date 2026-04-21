#!/bin/bash
set -e

PROJECT_NAME="ai_demo_platform"

cd ${PROJECT_NAME}

echo "Generating service launcher (start.sh)..."
cat << 'EOF' > start.sh
#!/bin/bash
source venv/bin/activate
source .env

echo "Initializing backend server..."
uvicorn backend.api:app --reload --port ${BACKEND_PORT:-8000} &
BACKEND_PID=$!

echo "Initializing frontend interface..."
streamlit run frontend/app.py --server.port ${FRONTEND_PORT:-8501} &
FRONTEND_PID=$!

# Terminate both processes on script exit
trap "kill $BACKEND_PID $FRONTEND_PID" EXIT
wait
EOF

chmod +x start.sh