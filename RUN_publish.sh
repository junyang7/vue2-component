#!/usr/bin/env bash

set -e

export https_proxy=http://127.0.0.1:7897 http_proxy=http://127.0.0.1:7897 all_proxy=socks5://127.0.0.1:7897

VERSION="0.0.1"
FILE="./package.json"

new_version="${VERSION}+$(date +%Y%m%d%H%M%S)"
file_content=$(<"$FILE")
updated_content=$(echo "$file_content" | sed "s/\"version\": \".*\"/\"version\": \"$new_version\"/")
echo "$updated_content" > "$FILE"
git add . && git commit -m "$new_version" && git push
