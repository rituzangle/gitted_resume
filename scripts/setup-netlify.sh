#!/bin/bash
echo "🛠️ Setting up Netlify deployment...☁️"

npm install -D netlify-cli
npx netlify init

echo "🎉 Netlify setup complete! You can now deploy with 'npx netlify deploy'"
