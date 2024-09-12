Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "cmd.exe /c start /B node-red --port 2000 --userDir /node-red-data > node-red.log 2>&1", 0, False
WshShell.Run "cmd.exe /c npm start", 0, False