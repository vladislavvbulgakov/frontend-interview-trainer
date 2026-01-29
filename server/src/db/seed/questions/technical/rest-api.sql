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
  $$Какие основные HTTP-методы используются в REST API?$$,
  NULL,
  $answer$
Основные HTTP-методы в REST API:

- **GET** — получение ресурса,
- **POST** — создание ресурса,
- **PUT** — полная замена ресурса,
- **PATCH** — частичное обновление,
- **DELETE** — удаление ресурса.

Пример работы с ресурсом `users`:

- `GET /users` — получить список,
- `POST /users` — создать,
- `GET /users/1` — получить пользователя,
- `PATCH /users/1` — обновить,
- `DELETE /users/1` — удалить.
$answer$,
  (SELECT id FROM topics WHERE name = 'HTTP & REST')
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
  1,
  $$Что такое endpoint в REST API?$$,
  NULL,
  $answer$
**Endpoint** — это URL,
по которому доступен конкретный ресурс
или действие API.

Примеры endpoint’ов:
- `GET /api/users` — получить список пользователей,
- `POST /api/users` — создать пользователя,
- `GET /api/users/123` — получить пользователя с ID = 123.

Endpoint определяет,
**что именно делает API**.
$answer$,
  (SELECT id FROM topics WHERE name = 'HTTP & REST')
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
  $$Что такое rate limiting и как frontend должен на него реагировать?$$,
  NULL,
  $answer$
**Rate limiting** — это ограничение
количества запросов от клиента
за определённый период времени.

Типичное поведение сервера:
- HTTP-статус **429 Too Many Requests**,
- заголовок `Retry-After` (в секундах).

Как должен реагировать frontend:
- показать пользователю сообщение об ошибке,
- временно заблокировать повторные запросы,
- использовать **debounce / throttle**
  для предотвращения лишних запросов.

Пример:
поиск с задержкой после ввода текста.
$answer$,
  (SELECT id FROM topics WHERE name = 'HTTP & REST')
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
  $$Какие статусы HTTP вы знаете и что они означают?$$,
  NULL,
  $answer$
HTTP-статусы делятся на группы:

- **1xx** — informational (редко используются),
- **2xx** — успешные ответы:
  `200 OK`, `201 Created`, `204 No Content`,
- **3xx** — перенаправления:
  `301 Moved Permanently`, `304 Not Modified`,
- **4xx** — ошибки клиента:
  `400 Bad Request`, `401 Unauthorized`,
  `403 Forbidden`, `404 Not Found`,
- **5xx** — ошибки сервера:
  `500 Internal Server Error`,
  `502 Bad Gateway`,
  `503 Service Unavailable`.
$answer$,
  (SELECT id FROM topics WHERE name = 'HTTP & REST')
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
  $$Как передавать аутентификацию в REST API?$$,
  NULL,
  $answer$
Основные способы передачи аутентификации:

1. **Bearer Token** (самый распространённый):
```http
Authorization: Bearer <token>
```
2. Basic Auth
(редко используется и только с HTTPS):
```http
Authorization: Basic base64(username:password)
```

3. API Key
(в заголовке или query-параметре):
```http
X-API-Key: abc123
```

На практике JWT чаще всего
передаётся именно как Bearer Token.
$answer$,
(SELECT id FROM topics WHERE name = 'HTTP & REST')
);
