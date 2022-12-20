#!/bin/bash          

sudo -u ec2-user  -i <<'EOF'

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 16

aws s3 sync "s3://renan-frontend-app" ./app
cd app
npm i 
node src/index.js
