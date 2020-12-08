#!/bin/bash
set -e

[ -x "$(command -v go-bindata)" ] && go generate ./simconnect
[ -x "$(command -v go-bindata)" ] && go generate ./vfrmap
[ -x "$(command -v go-bindata)" ] && go generate ./vfrmap/html/leafletjs

build_time=$(date -u +'%Y-%m-%d_%T')
set +e
build_version=$(git describe --tags)
set -e

CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -ldflags "-s -w -X main.buildVersion=$build_version -X main.buildTime=$build_time" -v ./vfrmap
