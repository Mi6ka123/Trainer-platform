#!/bin/bash

# Railway Deployment Script
# This script deploys the trainer-platform to Railway

set -e

PROJECT_ID="cef6e37d-cbb9-403a-9320-5ea6c668fbb2"
SERVICE_NAME="trainer-platform"

echo "🚀 Starting Railway Deployment..."
echo "Project ID: $PROJECT_ID"

# Check if railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Install: https://docs.railway.app/develop/cli"
    exit 1
fi

# Verify token
if [ -z "$RAILWAY_TOKEN" ]; then
    echo "❌ RAILWAY_TOKEN not set"
    echo "Set it with: export RAILWAY_TOKEN=your_token_here"
    exit 1
fi

echo "✅ Railway CLI found"
echo "✅ RAILWAY_TOKEN set"

# Build locally first to test
echo ""
echo "📦 Building Docker image locally..."
docker build -t trainer-platform:latest .

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

# Instructions for pushing to Railway
echo ""
echo "🎯 Next steps:"
echo "1. Go to: https://railway.app/project/$PROJECT_ID"
echo "2. Click '+ New' → 'GitHub Repo' or 'Dockerfile'"
echo "3. If using Dockerfile:"
echo "   - Select 'Deploy from Dockerfile'"
echo "   - Upload this directory or push to GitHub"
echo ""
echo "4. Add environment variables in Railway dashboard:"
echo "   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url"
echo "   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key"
echo ""
echo "5. Click 'Deploy'"
echo ""
echo "✅ Your app will be live at: https://trainer-platform-production.railway.app"
