# Portfolio

Artist portfolio — light, minimal single-page site.

## Deploy to GitHub (получить ссылку на портфолио)

1. **Создай новый репозиторий на GitHub**
   - Зайди на [github.com](https://github.com) → New repository
   - Имя, например: `gilya-portfolio` или `portfolio`
   - Public, без README (репозиторий пустой)

2. **В терминале в папке проекта выполни:**

```bash
cd "/Users/sergejgilazev/Pictures/стартапы/Gilya"

git init
git add .
git commit -m "Portfolio"

git branch -M main
git remote add origin https://github.com/ТВОЙ_ЛОГИН/gilya-portfolio.git
git push -u origin main
```

(Замени `ТВОЙ_ЛОГИН` и `gilya-portfolio` на свой логин и имя репозитория.)

3. **Включи GitHub Pages**
   - В репозитории: **Settings** → **Pages**
   - **Source**: Deploy from a branch
   - **Branch**: `main`, папка `/ (root)` → Save

Через 1–2 минуты сайт будет по адресу:
**https://ТВОЙ_ЛОГИН.github.io/gilya-portfolio/**

Эту ссылку можно отправлять как портфолио.
