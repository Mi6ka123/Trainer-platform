#!/bin/bash
set -e

echo "📦 Building Next.js application..."
npm ci
npm run build

echo "✅ Build complete!"
echo "📤 Ready for Railway deployment"
echo "Run: railway up"
