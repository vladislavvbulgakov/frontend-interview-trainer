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
  $$Как писать хороший unit-тест?$$,
  NULL,
  $answer$
Хороший unit-тест должен быть:

- **Понятным** — имя описывает сценарий  
  (`should return error when email is invalid`);
- **Изолированным** — не зависит от других тестов;
- **Быстрым** — без сетевых запросов и таймеров;
- **Повторяемым** — одинаковый результат при каждом запуске;
- **Фокусированным** — одна причина для падения.

Рекомендуемый подход — **AAA**:
- **Arrange** — подготовка данных,
- **Act** — выполнение действия,
- **Assert** — проверка результата.
$answer$,
  (SELECT id FROM topics WHERE name = 'Testing')
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
  $$В чём разница между unit, integration и e2e тестами?$$,
  NULL,
  $answer$
Основные типы тестов:

- **Unit-тесты**  
  Тестируют одну функцию или компонент
  в полной изоляции  
  (например, Jest).

- **Integration-тесты**  
  Проверяют взаимодействие
  нескольких модулей или компонентов  
  (React Testing Library).

- **E2E-тесты**  
  Имитируют действия пользователя
  в реальном браузере  
  (Cypress, Playwright).

Используется **пирамида тестирования**:
- много unit-тестов,
- меньше integration,
- минимальное количество e2e.
$answer$,
  (SELECT id FROM topics WHERE name = 'Testing')
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
  $$Что такое mocking? Как мокать модули в Jest?$$,
  NULL,
  $answer$
**Mocking** — это замена реальных зависимостей
на контролируемые заглушки,
чтобы изолировать тестируемый код.

Примеры в Jest:

```js
// Мок всей библиотеки
jest.mock('axios');

// Мок функции
const mockFn = jest.fn();
mockFn.mockReturnValue('test');

// Мок конкретного модуля
jest.mock('./utils', () => ({
  formatDate: () => 'mocked date'
}));
```
Mocking позволяет:

управлять поведением зависимостей,

тестировать edge cases,

делать тесты быстрыми и надёжными.
$answer$,
(SELECT id FROM topics WHERE name = 'Testing')
);