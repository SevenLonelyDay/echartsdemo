. /usr/local/opt/nvm/nvm.sh
#! /bin/bash
nvm use --delete-prefix v8.11.3

npm run build

ngh  --dir dist/echartsdemo -no-silent
