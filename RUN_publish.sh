#!/usr/bin/env bash

set -e

export https_proxy=http://127.0.0.1:7897 http_proxy=http://127.0.0.1:7897 all_proxy=socks5://127.0.0.1:7897


VERSION="0.0.1"
PATH="./package.json"

# 获取文件内容并更新 version
new_version="${VERSION}+$(/bin/date +%Y%m%d%H%M%S)"
file_content=$(<"$PATH")

# 使用纯 Bash 解析并更新 JSON 字段（注意：这是一个简单示例，仅支持部分格式）
updated_content=$(echo "$file_content" | /usr/bin/sed "s/\"version\": \".*\"/\"version\": \"$new_version\"/")

# 写回文件
echo "$updated_content" > "$PATH"

# 提交 git 变更，使用内置 git 命令
/usr/bin/git add . && /usr/bin/git commit -m "$new_version" && /usr/bin/git push
