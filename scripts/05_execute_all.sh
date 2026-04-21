#!/bin/bash
set -e

# Sequentially executes setup scripts
bash 00_config.sh
bash 01_setup_env.sh
bash 02_build_backend.sh
bash 03_build_frontend.sh
bash 04_create_launcher.sh

echo "Build complete. Navigate to ai_demo_platform and execute ./start.sh"


