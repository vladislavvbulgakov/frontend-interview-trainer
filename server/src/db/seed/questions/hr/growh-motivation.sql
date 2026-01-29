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
  1,
  $$Что вы узнали на предыдущем месте работы, чего не знали до этого?$$,
  $$
HR не хочет услышать абстрактное «научился работать в команде».

Ожидается структурированный ответ:
- **Конкретный навык**  
  Например: освоил Webpack Module Federation.
- **Контекст**  
  Для реализации micro-frontends.
- **Применение**  
  Разделил монолит на 3 независимых приложения.
$$,
  NULL,
  (SELECT id FROM topics WHERE name = 'Growth & Motivation')
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
  'JUNIOR',
  3,
  $$Расскажите о самом сложном техническом вызове на предыдущем месте работы. Что вы сделали и каков был результат?$$,
  $$
HR хочет услышать не просто «рефакторинг» или «оптимизацию», а:

- **Конкретную проблему**  
  Например: время загрузки страницы — 8 секунд.
- **Ваши действия**  
  Внедрил lazy loading, разбил бандл, оптимизировал критический путь.
- **Измеримый результат**  
  Снизил время загрузки до 1.2 секунды,
  конверсия выросла на 15%.
$$,
  NULL,
  (SELECT id FROM topics WHERE name = 'Growth & Motivation')
);
