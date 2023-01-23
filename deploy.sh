#!/bin/bash

# abort on errors
set -e
# build
npm run build

# navigate into the build output directory
cd dist

echo 'vasak.net.ar' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Vasak-Group/website.git main:gh-pages
cd -
