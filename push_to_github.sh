#!/bin/bash
# Script pour faire le push avec le token GitHub
cd /Users/macbook/qwen-code/mon-projet/ntfy-md-notif

# Force HTTPS with credentials
git remote set-url origin "https://tlerue:${GITHUB_TOKEN_QWENCODE}@github.com/tlerue/ntfy-md-notif.git"

# Push
git push origin main
