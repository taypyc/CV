# Project structure

📦 ROOT  
┣ 📁`.storybook`       Storybook configuration folder  
┣ 📁`documentation`    Project-related documentation storage  
┣ 📁`src`              App source code  
┃ ┣ 📁`components`     Components folder  
┃ ┣ 📁`constants`      Application constants  
┃ ┣ 📁`controllers`    API controllers  
┃ ┣ 📁`mocks`          Data mocks  
┃ ┣ 📁`pages`          NextJS routing folder  
┃ ┣ 📁`stories`        Global stories folder. Here we store stories without direct  
┃ ┣ 📁`styles`         Global styles folder
┃ ┃ ┗ 📁`pages`          Application pages styles 
┃ ┣ 📁`types`          Global types folder   
┃ ┗ 📁`utils`          Utils folder  
┣ 📜 .gitignore  
┣ 📜 next.config.js  
┣ 📜 README  
┗ 📜 .tsconfig.json

> Be advised: `stories` folder should contain stories without direct relation to any particular component (like theme demonstration), or those, which for some reason cannot be stored near its component (like page stories, singe `pages` is `NextJS` system folder). 
