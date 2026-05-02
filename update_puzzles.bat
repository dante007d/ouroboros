@echo off
echo Copying your new puzzles...
copy "client\src\parsed_puzzles copy.json" "client\src\parsed_puzzles.json" /Y

echo.
echo Patching the game data...
node patch_data.js

echo.
echo Uploading the new puzzles to GitHub...
git add .
git commit -m "Updated game puzzles"
git push -u origin main

echo.
echo Done! Netlify will now rebuild with your new puzzles.
pause
