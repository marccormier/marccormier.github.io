@Echo off
::bash comment
set $title=mirc Reset trial
set $uninstall="C:\Program files\mirc\uninstall.exe"
title %$title%
pause
%$uninstall%
pause
::DEL /P /F /S %appdata%\Roaming\mirc
echo %appdata%\mirc
::
ECHO DELETE
RD /S %appdata%\mirc
pause
:: DEL /Q %userprofile%\%appdata%\Roaming\mirc