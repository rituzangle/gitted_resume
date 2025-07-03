#!/bin/bash
echo "🔍 Checking for outdated packages..."
npm outdated || echo "✅ All dependencies are up to date!"
