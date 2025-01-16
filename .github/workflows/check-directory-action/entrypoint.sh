#!/bin/sh

DIR="$1"

if [ -d "$DIR" ]; then
  echo "✅ The directory '$DIR' exists."
else
  echo "❌ The directory '$DIR' does not exist."
  exit 1
fi
