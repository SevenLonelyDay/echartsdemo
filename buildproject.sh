. /usr/local/opt/nvm/nvm.sh
#! /bin/bash
nvm use --delete-prefix v8.11.3

npm run build

git subtree push --prefix dist/echartsdemo origin gh-pages
