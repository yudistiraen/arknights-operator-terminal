#!/usr/bin/env bash
# Sync heavy static assets from public/ to the Cloudflare R2 bucket.
# Plan and cache policy: knowledge/cloudflare_r2.md
#
# Usage (from repo root, Git Bash):
#   scripts/assets/sync-r2.sh              # sync voice assets
#   scripts/assets/sync-r2.sh --dry-run    # show what would change, upload nothing
#
# Needs rclone on PATH and R2_* vars in .env (see .env.example).
# rclone is configured through env vars below, so no rclone.conf is needed.

set -euo pipefail

repo_root="$(cd "$(dirname "$0")/../.." && pwd)"

if [[ -f "$repo_root/.env" ]]; then
  set -a
  # shellcheck disable=SC1091
  source "$repo_root/.env"
  set +a
fi

for required_var in R2_ACCOUNT_ID R2_ACCESS_KEY_ID R2_SECRET_ACCESS_KEY R2_BUCKET; do
  if [[ -z "${!required_var:-}" ]]; then
    echo "Missing $required_var (set it in .env)" >&2
    exit 1
  fi
done

if ! command -v rclone >/dev/null 2>&1; then
  echo "rclone not found. Install it: winget install Rclone.Rclone" >&2
  exit 1
fi

export RCLONE_CONFIG_R2_TYPE=s3
export RCLONE_CONFIG_R2_PROVIDER=Cloudflare
export RCLONE_CONFIG_R2_ACCESS_KEY_ID="$R2_ACCESS_KEY_ID"
export RCLONE_CONFIG_R2_SECRET_ACCESS_KEY="$R2_SECRET_ACCESS_KEY"
export RCLONE_CONFIG_R2_ENDPOINT="https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com"
export RCLONE_CONFIG_R2_NO_CHECK_BUCKET=true

# Stage A policy (unversioned URLs). Switch to "public, max-age=31536000, immutable"
# only after assetUrl() versioning is live (Stage B).
cache_control="public, max-age=3600, stale-while-revalidate=86400"

# Voice only for now. sync deletes remote files only within these include patterns.
rclone sync "$repo_root/public" "r2:$R2_BUCKET" \
  --include "operators/*/voice/**" \
  --include "audio/title-voices/**" \
  --header-upload "Cache-Control: $cache_control" \
  --transfers 16 \
  --checkers 32 \
  --progress \
  "$@"
