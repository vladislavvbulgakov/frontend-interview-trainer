INSERT INTO questions (
  type,
  grade,
  difficulty,
  content,
  hr_hint,
  reference_answer,
  topic_id
) VALUES (
  'HR',
  'JUNIOR',
  2,
  $$Расскажите о проекте, в котором вы участвовали. Какова была ваша личная роль и вклад?$$,
  $answer$
HR не хочет слышать общее «делал фичи по тикетам».

Ожидается конкретика:
- **Тип или название проекта**  
  Например: B2B-платформа для логистики.
- **Ваша задача**  
  Реализовал форму импорта Excel с валидацией.
- **Технологии**  
  React Hook Form + Yup.
- **Результат и метрики**  
  Сократил время импорта с 10 до 2 минут.
$answer$,
  NULL,
  (SELECT id FROM topics WHERE name = 'Teamwork')
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
  'HR',
  'SENIOR',
  4,
  $$Как вы участвовали в онбординге новых разработчиков? Что конкретно делали?$$,
  $answer$
HR ищет конкретные действия и результат:

- **Действия**  
  Создал чек-лист, провёл 3 парные сессии.
- **Материалы**  
  Записал видео по архитектуре проекта,
  подготовил README и примеры.
- **Результат**  
  Новый разработчик начал делать осмысленные коммиты
  уже через 2 дня.
 $answer$,
  NULL,
  (SELECT id FROM topics WHERE name = 'Teamwork')
);
