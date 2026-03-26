#!/bin/bash
MSG=${1:-"update site"}
echo "🚀 Deploying..."
git add -A
git commit -m "$MSG"
git push
echo "✅ Done! Live in ~30s — https://perseus-fitness.vercel.app"
