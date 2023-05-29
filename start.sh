#!/usr/bin/env bash

# use path of this example as working directory; enables starting this script from anywhere
cd "$(dirname "$0")"

if [ "$1" = "prod" ]; then
    echo "Starting Uvicorn server in production mode..."
    # we also use a single worker in production mode so socket.io connections are always handled by the same worker
    uvicorn app:app --workers 1 --log-level info --port 80 --app-dir backend  
elif [ "$1" = "dev" ]; then
    echo "Starting Uvicorn server in development mode..."
    # reload implies workers = 1
    uvicorn app:app --reload --log-level debug --port 8001 --app-dir backend  
else
    echo "Invalid parameter. Use 'prod' or 'dev'."
    exit 1
fi