ECHO OFF
set $programfiles="Program Files"
set $system=%systemDrive%
set $userProfile=%userprofile%
set $appdata=%appdata%
Start C:\%programfiles%\mIRC\uninstall.exe
pause
DEL /P /F /S %userprofile%\%appdata%\Roaming\mirc
pause
echo delete mirc folder quietly (don't ask yes no prompt)
DEL /Q %userprofile%\%appdata%\Roaming\mirc
pause
echo root\HKEY_Current_User\Software\mIRC\lastRun data.
REG DELETE [ROOT\]HKCU\Software\mIRC\lastRun /V [/F]
pause
cd "C:\Users\Marc\AppData\Roaming\mIRCreset\exe"
exit /b 1 