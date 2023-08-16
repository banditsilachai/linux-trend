#!/bin/bash

# Get the current date (date time)
current_datetime=$(date +'%d-%m-%Y %H:%M:%S')

# Navigate to your project directory
cd /Users/bandit/Development/React/linux-trend/

# Run your Node.js script
/Users/bandit/Library/Caches/fnm_multishells/95502_1692154086212/bin/node fetch.js

# Check if there are changes to commit
if [ -n "$(git status --porcelain)" ]; then
  # Add and commit changes to Git
  git add .
  git commit -m "📚 update from script: $current_datetime"

  # Push to GitHub (replace <branch> with your desired branch name)
  git push origin main
else
  echo "No changes to commit."
fi
