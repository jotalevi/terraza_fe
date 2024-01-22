#!/bin/sh

git pull
npm i
npm run build

pm2 delete terraza_fe
pm2 save
pm2 serve build/ 3001 --name terraza_fe --spa
pm2 save