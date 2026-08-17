@echo off
setlocal
cd /d "%~dp0"

echo ============================================
echo   Beyond Trainer - Fresh Git Push
echo ============================================
echo.
echo Current folder:
echo %CD%
echo.
echo WARNING:
echo - Existing .git history will be deleted
echo - GitHub main branch will be FORCE PUSHED
echo.
pause

echo.
echo [1/7] Removing old .git...
if exist ".git" (
    rmdir /s /q ".git"
) else (
    echo No existing .git folder found.
)

echo.
echo [2/7] Initializing Git...
git init
if errorlevel 1 goto :error

echo.
echo [3/7] Adding files...
git add .
if errorlevel 1 goto :error

echo.
echo [4/7] Creating fresh commit...
git commit -m "Initial commit (Fresh start)"
if errorlevel 1 goto :error

echo.
echo [5/7] Setting branch to main...
git branch -M main
if errorlevel 1 goto :error

echo.
echo [6/7] Adding GitHub remote...
git remote add origin https://github.com/nutyfreshz/beyond_trainer.git
if errorlevel 1 goto :error

echo.
echo [7/7] Force pushing to GitHub...
git push -u origin main --force
if errorlevel 1 goto :error

echo.
echo ============================================
echo   SUCCESS - Fresh Git push completed!
echo ============================================
echo.
pause
exit /b 0

:error
echo.
echo ============================================
echo   ERROR - Process stopped.
echo   Check the error message above.
echo ============================================
echo.
pause
exit /b 1