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
  $$Что такое CI/CD и зачем он нужен?$$,
  NULL,
  $answer$
- **CI (Continuous Integration)** —
  автоматическая сборка и тестирование
  при каждом коммите или пуше.

- **CD (Continuous Delivery / Deployment)** —
  автоматическая доставка или деплой приложения.

Зачем CI/CD нужен:
- раннее выявление багов,
- ускорение релизов,
- снижение рисков человеческих ошибок,
- стандартизация процессов разработки.

Популярные инструменты:
GitHub Actions, GitLab CI, Jenkins, CircleCI.
$answer$,
  (SELECT id FROM topics WHERE name = 'CI/CD')
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
  1,
  $$Что такое артефакт в CI/CD?$$,
  NULL,
  $answer$
**Артефакт** — это файлы,
созданные в ходе CI/CD pipeline.

Примеры артефактов:
- папка `dist/` после сборки,
- отчёт о покрытии тестами,
- Docker image.

Артефакты можно:
- передавать между этапами pipeline,
- хранить для последующего использования,
- скачивать вручную при необходимости.
$answer$,
  (SELECT id FROM topics WHERE name = 'CI/CD')
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
  $$Как запускать деплой только из определённой ветки (например, main)?$$,
  NULL,
  $answer$
Ограничение деплоя по ветке
позволяет отделить тестирование от релизов.

### GitHub Actions
```yaml
on:
  push:
    branches: [main]
``` 
### GitLab CI
```yaml
only:
  - main
```
Такой подход позволяет:

запускать тесты для всех веток,

выполнять деплой только из main,

снизить риск случайного выката.
$answer$,
(SELECT id FROM topics WHERE name = 'CI/CD')
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
  $$Что такое pipeline в CI/CD?$$,
  NULL,
  $answer$
**Pipeline** — это последовательность этапов (stages),
через которые проходит код от коммита до продакшена.

Типичные этапы pipeline:
- **Checkout** — получение исходного кода;
- **Install** — установка зависимостей;
- **Lint / Test** — проверка качества и тестирование;
- **Build** — сборка бандла или приложения;
- **Deploy** — доставка на сервер.

Каждый этап может завершиться:
- успехом → переход к следующему шагу,
- ошибкой → остановка pipeline.

Цель pipeline —
полная автоматизация пути от коммита
до production-окружения.
$answer$,
  (SELECT id FROM topics WHERE name = 'CI/CD')
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
  $$Как настроить GitHub Actions для запуска тестов при пуше в PR?$$,
  NULL,
  $answer$
Для этого используется workflow-файл
`.github/workflows/test.yml`.

Пример конфигурации:

```yaml
name: Tests

on:
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm test
```
Тесты будут запускаться
при каждом пуше в Pull Request,
что позволяет обнаруживать ошибки
до мерджа в основную ветку.
$answer$,
(SELECT id FROM topics WHERE name = 'CI/CD')
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
  $$Как запускать разные задачи параллельно в pipeline?$$,
  NULL,
  $answer$
Параллельное выполнение задач
ускоряет работу CI/CD pipeline.

### GitHub Actions

В GitHub Actions достаточно объявить
несколько `jobs`:

```yaml
jobs:
  test:
    # steps...
  build:
    # steps...
```
По умолчанию все jobs
запускаются параллельно.

GitLab CI

использовать несколько jobs без needs,

либо опцию parallel.

Параллелизм позволяет
значительно сократить время выполнения pipeline.
$answer$,
(SELECT id FROM topics WHERE name = 'CI/CD')
);