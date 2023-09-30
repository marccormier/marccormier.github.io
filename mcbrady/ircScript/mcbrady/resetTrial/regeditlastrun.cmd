::title mirc reset trial (28 days remains)
::RUN C:\Program Files\mIRC\uninstall.exe
::pause
::DEL /P /F /S %userprofile%\%appdata%\\Roaming\mirc
::pause
:: delete mirc folder quietly (don't ask yes no prompt)
:: DEL /Q %userprofile%\%appdata%\\Roaming\mirc
::pause
REG DELETE HKEY_CURRENT_USER\SOFTWARE\mIRC\LastRun
:: COPY "%userprofile%\desktop\irc\mirc.ini" "%userprofile%\%appdata%\mirc\mirc.ini"
:: Shutdown /f /r /c "Redémarrage! mIRC RegEdit LastRun Item Value and irc.ini Reset. Computer Restarting!"
:: SchTasks /Create /SC MONTHLY /MO 28 /TN "RegEdit mIRC.lastRun.value Reset" /TR "‪%userprofile%\desktop\irc\RegEditLastRun.bat" /ST 12:21
:: TYPE irc.ini >> mirc.ini