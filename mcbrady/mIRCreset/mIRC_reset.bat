:: 1- uninstall irc
:: 2- del irc roaming dir
:: 3- del irc regEdit lastRun data
:: 4- reinstall irc (reset)
::
@ECHO OFF
Title mIRC monthly reset
echo mIRC monthly reset
cd "C:\Program Files\mIRC\"
pause
echo FERMETURE
echo de mIRC de Force.
TASKKILL /IM mirc.exe /T /F
pause
echo Reseting mIRC 30 day's trial (Uninstalling)
uninstall.exe
pause
echo Deleting
echo mIRC directory and backup files
RD /S /Q "C:\Program Files\mIRC\"
RD /S /Q "C:\Users\Marc\AppData\Roaming\mIRC"
pause
echo Deleting
echo root\HKEY_Current_User\Software\mIRC\lastRun data.
REG DELETE [ROOT\]HKCU\Software\mIRC\lastRun /V [/F]
pause
cd "C:\Users\Marc\AppData\Roaming\mIRCreset\exe"
dir
echo Reinstalling mIRC
C:\Users\Marc\AppData\Roaming\mIRCreset\exe\mirc778.exe
:: load -r loadSrc.ini, mIRCsrc.ini, autojoin.ini, perform etc.
pause
echo reseting backup-files
cd C:\Users\Marc\AppData\Roaming\mIRCreset\
::type perform.ini > C:\Users\Marc\AppData\Roaming\mIRC\perform.ini
::type channels.ini > C:\Users\Marc\AppData\Roaming\mIRC\channels.ini
::type mirc.ini > C:\Users\Marc\AppData\Roaming\mIRC\mirc.ini
EXIT /b 1
goto :eof