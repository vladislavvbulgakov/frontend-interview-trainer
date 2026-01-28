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
  $$Что такое компонентный подход в вёрстке?$$,
  NULL,
$answer$
Разбиение UI на **независимые, переиспользуемые компоненты**
(кнопки, карточки, модалки).

Преимущества:
- Переиспользование
- Изоляция стилей и логики
- Упрощённое тестирование
- Параллельная разработка

Основа современных фреймворков (React, Vue, Angular).
$answer$,
  (SELECT id FROM topics WHERE name = 'Architecture & Patterns')
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
  $$Что такое DRY и KISS в разработке?$$,
  NULL,
$answer$
- **DRY** (Don’t Repeat Yourself) — избегайте дублирования кода.
  Выносите общую логику в функции и модули.

- **KISS** (Keep It Simple, Stupid) — проектируйте просто.
  Избегайте преждевременной оптимизации и сложных абстракций.

Баланс между ними:
не усложняйте ради DRY, если логика действительно разная.
$answer$,
  (SELECT id FROM topics WHERE name = 'Architecture & Patterns')
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
  $$В чём разница между MVC, MVVM и Flux?$$,
  NULL,
$answer$
- **MVC** (Model–View–Controller)  
  Controller обрабатывает ввод, обновляет Model,  
  View читает данные из Model.

- **MVVM** (Model–View–ViewModel)  
  ViewModel предоставляет данные для View через data binding  
  (Angular, Vue).

- **Flux** (однонаправленный поток данных)  
  View → Action → Dispatcher → Store → View  
  (React + Redux).

Flux лучше масштабируется и отлаживается
благодаря предсказуемости потока данных.
$answer$,
  (SELECT id FROM topics WHERE name = 'Architecture & Patterns')
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
  $$Как избежать prop drilling в большом приложении?$$,
  NULL,
  $$
Способы:

- **React Context** — для глобальных данных (тема, пользователь).
- **State management** (Redux, Zustand) — для сложного состояния.
- **Компонентная композиция** (children, render props) — для локальных случаев.
- **Feature-sliced архитектура** — минимизация межфичевых зависимостей.

Контекст не стоит использовать для всего —
он вызывает лишние ререндеры при любом изменении.
$$,
  (SELECT id FROM topics WHERE name = 'Architecture & Patterns')
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
  $$Что такое dependency inversion в контексте frontend?$$,
  NULL,
$answer$
Принцип:
модули высокого уровня не должны зависеть от модулей низкого уровня.
Оба должны зависеть от абстракций.

Пример:
- вместо прямого вызова `axios.get()` создайте абстракцию `ApiService`;
- реализацию можно подменить (mock, другой HTTP-клиент).

В JS/TS достигается через:
- инъекцию зависимостей (props, context),
- интерфейсы (TypeScript),
- кастомные хуки.

Упрощает тестирование и замену реализаций.
$answer$,
  (SELECT id FROM topics WHERE name = 'Architecture & Patterns')
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
  4,
  $$Как реализовать lazy loading компонентов в React?$$,
  NULL,
$answer$
Используем `React.lazy` + `Suspense`:

```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyComponent />
    </Suspense>
  );
}
```

Для маршрутов (React Router):

```jsx
<Route
  path="/about"
  element={
    <Suspense fallback={<Spinner />}>
      <LazyAbout />
    </Suspense>
  }
/>
```

Lazy loading уменьшает размер начального бандла
и ускоряет загрузку приложения.
$answer$,
  (SELECT id FROM topics WHERE name = 'Architecture & Patterns')
);