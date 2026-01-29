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
  $$Как добавить поддержку TypeScript в Webpack?$$,
  NULL,
  $answer$
Для подключения TypeScript к Webpack нужно:

1. Установить загрузчик:
   - `ts-loader`
   - или `awesome-typescript-loader` (устаревший, используется реже)

2. Добавить правило в `webpack.config.js`:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
```
3. Настроить tsconfig.json.

Альтернатива:

использовать Babel с @babel/preset-typescript
(без type-checking во время сборки).
$answer$,
(SELECT id FROM topics WHERE name = 'Build Tools')
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
  4,
  $$Что такое sourcemap и зачем он нужен?$$,
  NULL,
  $answer$
**Sourcemap** — это файл, который связывает
минифицированный (или транспилированный) код
с исходным кодом разработчика.

Зачем он нужен:
- возможность дебажить в DevTools,
  как будто код не был минифицирован;
- отображение корректных имён переменных
  и номеров строк;
- удобный анализ ошибок в production.

Включается:
- в **Webpack** через опцию `devtool`,
- в **Vite** — через настройку `build.sourcemap`.

В production sourcemaps часто:
- отключают,
- либо отдают только для внутреннего использования.
$answer$,
  (SELECT id FROM topics WHERE name = 'Build Tools')
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
  'MIDDLE',
  3,
  $$Как настроить HtmlWebpackPlugin?$$,
  NULL,
  $answer$
**HtmlWebpackPlugin** автоматически создаёт
или обрабатывает `index.html`
и подключает в него бандлы сборки.

Пример настройки:

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: true
    })
  ]
};
```
Что он делает:

генерирует HTML-файл,

автоматически добавляет <script> с бандлом,

поддерживает минификацию и шаблоны.

Избавляет от ручного управления подключением скриптов.
$answer$,
(SELECT id FROM topics WHERE name = 'Build Tools')
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
  'MIDDLE',
  3,
  $$Как оптимизировать production-сборку в Webpack?$$,
  NULL,
  $answer$
Основные техники оптимизации production-сборки:

- **Минификация кода**  
  Использование `TerserPlugin` для JavaScript.

- **Code splitting**  
  Настройка `SplitChunks` для выноса vendor-кода
  и повторно используемых модулей.

- **Tree-shaking**  
  Удаление неиспользуемого кода
  (ES-модули + `sideEffects`).

- **Сжатие ассетов**  
  Gzip или Brotli на стороне сервера.

- **Inline critical CSS**  
  Ускоряет первый рендер страницы.

- **Lazy loading чанков**  
  Загрузка кода только при необходимости.

- **Анализ бандла**  
  Использование `webpack-bundle-analyzer`.

Цель оптимизации —
уменьшить размер бандла
и сократить количество сетевых запросов.
$answer$,
  (SELECT id FROM topics WHERE name = 'Build Tools')
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
  $$Как работает tree-shaking в Webpack?$$,
  NULL,
  $answer$
**Tree-shaking** — это процесс удаления
неиспользуемого кода из итогового бандла.

Основные требования:
- использование **ES-модулей**
  (`import` / `export`, не CommonJS);
- сборка в **production mode**;
- корректная настройка побочных эффектов
  в `package.json`:

```json
{
  "sideEffects": false
}
```
Webpack строит dependency graph
и исключает «мёртвый» код,
который не используется в приложении.

Tree-shaking работает особенно эффективно
с библиотеками, написанными на ES-модулях.
$answer$,
(SELECT id FROM topics WHERE name = 'Build Tools')
);