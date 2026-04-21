# Use a lightweight official Python image
FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Set environment variables for better performance
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Install system dependencies (required for some AI libraries)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install Python requirements
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copy the application source code
COPY app/ .

# Run the API with a production-grade worker (uvicorn)
# We bind to 0.0.0.0 for Docker network communication
CMD ["uvicorn", "api:app", "--host", "0.0.0.0", "--port", "8000"]