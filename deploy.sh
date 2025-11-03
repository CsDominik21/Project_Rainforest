#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git checkout -b main
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:CsDominik21/Project_Rainforest.git main:gh-pages

cd -