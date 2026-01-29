INSERT INTO questions (
  type,
  grade,
  difficulty,
  content,
  hr_hint,
  reference_answer,
  topic_id
) VALUES (
  'TECHNICAL',
  'JUNIOR',
  1,
  $$Что такое npm и yarn? В чём разница?$$,
  NULL,
  $answer$
**npm** и **yarn** — менеджеры пакетов
для установки и управления зависимостями
в JavaScript-проектах.

Основные различия:
- **Yarn** (изначально):
  - более быстрые установки,
  - детерминированный `yarn.lock`,
  - offline mode;
- **npm** (начиная с версии 5+):
  - значительно улучшил скорость,
  - использует `package-lock.json`,
  - функционально почти не уступает Yarn.

На практике разница сейчас минимальна,
и выбор чаще зависит
от команды или legacy-проекта.
$answer$,
  (SELECT id FROM topics WHERE name = 'Tooling & Ecosystem')
);
INSERT INTO questions (
  type,
  grade,
  difficulty,
  content,
  hr_hint,
  reference_answer,
  topic_id
) VALUES (
  'TECHNICAL',
  'JUNIOR',
  2,
  $$Что такое .env файл и как его использовать в React-приложении?$$,
  NULL,
  $answer$
`.env` — это файл для хранения
переменных окружения.

В **Create React App**:
- имена переменных должны начинаться с `REACT_APP_`,
- пример:
```js
REACT_APP_API_URL=https://api.example.com
```
Доступ в коде:

```js
process.env.REACT_APP_API_URL
```
Важно:
    - переменные окружения
    - встраиваются в бандл на этапе сборки,
    - поэтому нельзя хранить в них секреты.
$answer$,
(SELECT id FROM topics WHERE name = 'Tooling & Ecosystem')
);

INSERT INTO questions (
  type,
  grade,
  difficulty,
  content,
  hr_hint,
  reference_answer,
  topic_id
) VALUES (
  'TECHNICAL',
  'SENIOR',
  4,
  $$Как настроить alias в TypeScript/Webpack для упрощения импортов?$$,
  NULL,
  $answer$
Настройка alias состоит из двух частей.

### TypeScript (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"]
    }
  }
}
```

Webpack (webpack.config.js)

```js
resolve: {
  alias: {
    "@components": path.resolve(__dirname, "src/components")
  }
}
```

После настройки можно писать:

```ts
import Button from "@components/Button";
```
Alias упрощают навигацию,
рефакторинг
и уменьшают количество относительных импортов.
$answer$,
(SELECT id FROM topics WHERE name = 'Tooling & Ecosystem')
);