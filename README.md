echo "# marccormier.github.io" >> README.md
git init
git add README.md
git commit -m "commit .."
git branch -M main
git remote add origin https://github.com/marccormier/marccormier.github.io.git
git push -u origin main
