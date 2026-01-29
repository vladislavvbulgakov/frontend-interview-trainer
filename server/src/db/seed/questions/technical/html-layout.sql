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
  $$Что такое семантическая вёрстка? Приведите примеры семантических тегов.$$, 
  NULL,
  $answer$
**Семантическая вёрстка** —
использование HTML-тегов,
которые отражают **смысл** содержимого,
а не только его визуальное представление.

Примеры семантических тегов:
- `<header>`, `<nav>`, `<main>`,
  `<article>`, `<section>`,
  `<aside>`, `<footer>`
- `<button>` вместо `<div onclick="...">`
- `<label for="...">` для элементов форм

Преимущества семантической вёрстки:
- улучшенная доступность (screen readers),
- более качественное SEO,
- лучшая поддерживаемость кода.
$answer$,
  (SELECT id FROM topics WHERE name = 'HTML & Layout')
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
  $$Что делает тег meta viewport? Зачем он нужен?$$,
  NULL,
  $answer$
Тег `meta viewport` сообщает браузеру,
как масштабировать страницу
на мобильных устройствах.

Пример:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Зачем он нужен:

предотвращает эмуляцию «широкого» экрана на мобильных;

позволяет корректно применять responsive-стили;

обеспечивает правильный масштаб страницы.

Без meta viewport
страница на мобильных выглядит уменьшенной.

Обязателен для responsive-дизайна.
$answer$,
(SELECT id FROM topics WHERE name = 'HTML & Layout')
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
  $$Зачем нужен alt у тега img?$$,
  NULL,
  $answer$
Атрибут `alt` выполняет несколько важных функций:

- предоставляет **альтернативный текст**,
  если изображение не загрузилось;
- используется **screen readers**
  для озвучивания содержимого;
- положительно влияет на **SEO**.

Если изображение декоративное,
следует использовать пустой атрибут:
`alt=""` — тогда скринридеры его игнорируют.

Пример:

❌ Плохо:
```html
<img src="logo.png">
```
✅ Хорошо:
```html
<img src="logo.png" alt="Логотип компании">
```
$answer$,
(SELECT id FROM topics WHERE name = 'HTML & Layout')
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
  $$Что такое DOCTYPE и зачем он нужен?$$,
  NULL,
  $answer$
`<!DOCTYPE html>` — объявление типа документа,
которое сообщает браузеру,
что страница использует стандарт HTML5.

Зачем нужен DOCTYPE:
- предотвращает включение **quirks mode**
  (режим совместимости со старыми браузерными багами);
- обеспечивает корректный layout и поведение CSS;
- гарантирует предсказуемую работу браузера.

DOCTYPE всегда должен быть
**первой строкой HTML-документа**.
$answer$,
  (SELECT id FROM topics WHERE name = 'HTML & Layout')
);
