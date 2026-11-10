ECHO OFF
:: bash comment
set $alpha=mirc Reset trial
set $programfiles="Program Files"
TITLE %aplha%
pause
::start
:: if  %ERRRORLEVEL%
:: goto 
::SET %
set $system=%systemDrive%
set $userProfile=%userprofile%
set $appdata=%appdata%
Start C:\%programfiles%\mIRC\uninstall.exe
pause
DEL /P /F /S %userprofile%\%appdata%\Roaming\mirc
pause
delete mirc folder quietly (don't ask yes no prompt)
DEL /Q %userprofile%\%appdata%\Roaming\mirc
pause
:: REG DELETE HKEY_CURRENT_USER\SOFTWARE\mIRC\LastRun
:: COPY "%userprofile%\desktop\irc\mirc.ini" "%userprofile%\%appdata%\mirc\mirc.ini"
:: Shutdown /f /r /c "Redémarrage! mIRC RegEdit LastRun Item Value and irc.ini Reset. Computer Restarting!"
:: SchTasks /Create /SC MONTHLY /MO 28 /TN "RegEdit mIRC.lastRun.value Reset" /TR "‪%userprofile%\desktop\irc\RegEditLastRun.bat" /ST 12:21
:: TYPE irc.ini >> mirc.ini
::
::
:: delete 
:: PATH %SYSTEMFILE%\%USERPROFILE%\AppData\Roaming\mIRC
::
:: uninstall mirc
:: del last run item in regEdit.exe
:: restart cpu
:: reinstall irc
:: load ini scripts
:: start and login
:: ...