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
  'MIDDLE',
  2,
  $$Как вы участвовали в тестировании на прошлых проектах? Что именно писали и проверяли?$$,
  $answer$
HR-специалист ожидает конкретику, а не общий ответ.

Стоит раскрыть:
- **Уровни тестирования**  
  unit, integration, e2e.
- **Инструменты**  
  Jest, React Testing Library, Cypress.
- **Покрытие**  
  Например: увеличил coverage с 40% до 75%.
- **Влияние на продукт**  
  Снизил количество регрессий в production на 30%.
$answer$,
  NULL,
  (SELECT id FROM topics WHERE name = 'Problem Solving')
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
  'MIDDLE',
  4,
  $$Был ли у вас опыт перехода с одного стека или архитектуры на другой? Как вы это организовали?$$,
  $answer$
HR ищет структурированный ответ:

- **Конкретный кейс**  
  Например: миграция с классовых компонентов
  на хуки + TypeScript.
- **План действий**  
  Поэтапный рефакторинг,
  типизация модуля за модулем,
  feature flags.
- **Метрики результата**  
  Покрытие типами — 95%,
  количество runtime-ошибок снизилось на 60%.
$answer$,
  NULL,
  (SELECT id FROM topics WHERE name = 'Problem Solving')
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
  $$Опишите случай, когда вы заметили системную проблему в архитектуре проекта. Как вы её диагностировали и решили?$$,
  $answer$
HR ожидает не абстракции, а конкретный пример:

- **Проблема**  
  Например: 70% API-запросов дублировались
  из-за отсутствия кэширования.
- **Ваша роль**  
  Инициатор, исполнитель, координатор.
- **Решение**  
  Внедрил React Query с TTL = 5 секунд.
- **Результат**  
  Снизил нагрузку на backend на 40%.
$answer$,
  NULL,
  (SELECT id FROM topics WHERE name = 'Problem Solving')
);
