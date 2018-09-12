. /usr/local/opt/nvm/nvm.sh
#! /bin/bash
nvm use --delete-prefix v8.11.3

npm run build

cp ./404.html ./dist/echartsdemo/404.html

git subtree push --prefix dist/echartsdemo origin gh-pages
