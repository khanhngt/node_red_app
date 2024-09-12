@echo off
echo Đang chạy lệnh...
start /B node-red --port 2000 --userDir /node-red-data > node-red.log 2>&1
npm start