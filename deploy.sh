#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git checkout -b main
git add -A
git commit -m "deploy"


#git push -f github@github.com:Jere96/jn-portafolio.git main:gh-pages
