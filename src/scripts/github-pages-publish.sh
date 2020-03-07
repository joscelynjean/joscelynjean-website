#!/bin/sh

git clone https://github.com/joscelynjean/joscelynjean.github.io.git .temp
cd .temp
git rm -rf *
cp -a ../dist/joscelynjean-website/* .
git add *
git commit -m 'publishing'
git push
cd ..
rm -rf .temp
