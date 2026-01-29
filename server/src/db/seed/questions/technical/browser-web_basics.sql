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
  $$Что такое Web Storage (localStorage / sessionStorage)?$$,
  NULL,
  $answer$
Web Storage — API для хранения данных в браузере.

Виды хранилищ:
- **localStorage** — данные хранятся бессрочно (до очистки пользователем).
- **sessionStorage** — данные живут до закрытия вкладки.

Общие свойства:
- хранят **только строки**,
- работают **синхронно**,
- ограничены примерно **5–10 МБ**,
- доступны только в пределах одного **origin**.

Пример использования:

```js
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');
```
$answer$,
(SELECT id FROM topics WHERE name = 'Browser & Web Basics')
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
  $$Что такое DOM? Как он связан с HTML?$$,
  NULL,
  $answer$
DOM (Document Object Model) — это древовидное представление
HTML-документа в памяти браузера.

Каждый HTML-элемент превращается в объект (node) в DOM.
JavaScript может читать и изменять DOM, тем самым обновляя страницу.

Важно:
- **DOM ≠ HTML**
- HTML — это исходный текст документа
- DOM — «живое» дерево, которое может изменяться
  (например, после JavaScript-манипуляций)
$answer$,
  (SELECT id FROM topics WHERE name = 'Browser & Web Basics')
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
  3,
  $$Что происходит, когда вы вводите URL в адресную строку и нажимаете Enter?$$,
  NULL,
  $answer$
Упрощённый процесс загрузки страницы:

1. Выполняется **DNS-запрос** для получения IP-адреса сервера.
2. Устанавливается **TCP-соединение**
   (и **TLS**, если используется HTTPS).
3. Браузер отправляет **HTTP-запрос** (обычно `GET /`).
4. Сервер возвращает **HTML-документ**.
5. Браузер парсит HTML и строит **DOM**.
6. Загружается CSS и строится **CSSOM**.
7. DOM и CSSOM объединяются в **Render Tree**.
8. Выполняются **layout** (позиционирование) и **paint** (отрисовка).
9. Выполняется JavaScript, который может:
   - изменять DOM и CSSOM,
   - вызывать повторные layout и paint.
$answer$,
  (SELECT id FROM topics WHERE name = 'Browser & Web Basics')
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
  $$Как браузер обрабатывает асинхронные операции (setTimeout, fetch, Promise)?$$,
  NULL,
  $answer$
Браузер использует **Event Loop**, который координирует:

- **Call Stack** — выполнение синхронного кода
- **Web APIs** — таймеры, сетевые запросы, DOM-события
- **Callback Queue** — очередь макрозадач
- **Microtask Queue** — очередь микрозадач (Promise, `queueMicrotask`)

Порядок выполнения:
1. Выполняется весь синхронный код.
2. Выполняются **все микрозадачи** (Promise.then).
3. Происходит отрисовка (если требуется).
4. Выполняется **одна макрозадача**
   (`setTimeout`, `setInterval`, события).

Именно поэтому `Promise.resolve().then(...)`
выполняется **раньше**, чем `setTimeout(..., 0)`.
$answer$,
  (SELECT id FROM topics WHERE name = 'Browser & Web Basics')
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
  $$Что такое Critical Rendering Path? Как его оптимизировать?$$,
  NULL,
  $answer$
**Critical Rendering Path (CRP)** —
это последовательность шагов от получения HTML
до отрисовки пикселей на экране.

Ключевые этапы:
HTML → DOM → CSSOM → Render Tree → Layout → Paint

Основные способы оптимизации:
- минимизировать количество **критических ресурсов**
  (CSS и JS в `<head>`),
- уменьшать размер **critical CSS**,
- откладывать некритичный JavaScript
  (`async`, `defer`),
- использовать `preload` и `prefetch`.

Цель оптимизации —
ускорить **First Contentful Paint (FCP)**.
$answer$,
  (SELECT id FROM topics WHERE name = 'Browser & Web Basics')
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
  $$Что такое CORS? Почему он нужен?$$,
  NULL,
  $answer$
**CORS (Cross-Origin Resource Sharing)** —
механизм безопасности браузера,
который ограничивает запросы между разными origin
(протокол + домен + порт).

Без CORS сайт `evil.com` мог бы отправлять запросы
к `bank.com` от имени авторизованного пользователя.

Как это работает:
- браузер отправляет **preflight-запрос** (`OPTIONS`)
  для «небезопасных» запросов;
- сервер должен явно разрешить доступ с помощью заголовков,
  например:
  `Access-Control-Allow-Origin: https://my-site.com`.

Важно:
- CORS проверяется **браузером**, а не сервером;
- обойти CORS с фронтенда невозможно;
- решения: backend-proxy или корректная настройка сервера.
$answer$,
  (SELECT id FROM topics WHERE name = 'Browser & Web Basics')
);

