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
  $$Когда стоит использовать внешнее хранилище состояния (Redux, Zustand), а не useState?$$,
  NULL,
  $answer$
Внешнее хранилище состояния стоит использовать,
если:

- состояние нужно **во многих компонентах**
  на разных уровнях дерева;
- состояние должно **переживать размонтирование**
  компонентов;
- требуется расширенная функциональность:
  **time travel**, сериализация,
  middleware (логирование, persist).

Для локального состояния
(формы, UI-флаги, локальные переключатели)
обычно достаточно
`useState` или `useReducer`.
$answer$,
  (SELECT id FROM topics WHERE name = 'State Management')
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
  $$Что такое flux-архитектура? Как она реализована в Redux?$$,
  NULL,
  $answer$
**Flux** — это архитектура
с однонаправленным потоком данных:

1. **View** — инициирует `Action`,
2. **Action** — отправляется в `Store`,
3. **Store** — обновляет состояние через `Reducer`,
4. **View** — подписывается на изменения `Store`.

Redux реализует принципы Flux:
- единое хранилище (**single store**),
- чистые редьюсеры  
  `(state, action) → newState`,
- `dispatch` — единственный способ
  изменить состояние.

Это обеспечивает предсказуемость,
простую отладку
и воспроизводимость состояния.
$answer$,
  (SELECT id FROM topics WHERE name = 'State Management')
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
  $$В чём преимущество Zustand или Jotai перед Redux?$$,
  NULL,
  $answer$
Современные state-менеджеры
(Zustand, Jotai) имеют ряд преимуществ:

- **меньше boilerplate** —
  не нужны action types,
  reducers и creators;
- **гранулярные подписки** —
  компонент перерисовывается
  только при изменении нужных данных;
- **нет необходимости в Provider**
  (в Zustand);
- **реактивность на уровне значений**
  (Jotai — atom-based подход).

Redux остаётся актуальным
для сложных сценариев:
middleware,
SSR,
строгие архитектурные контракты.
$answer$,
  (SELECT id FROM topics WHERE name = 'State Management')
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
  $$Как избежать лишних ререндеров при использовании глобального состояния?$$,
  NULL,
  $answer$
Основные стратегии оптимизации:

- **Мемоизация селекторов**  
  `reselect` для Redux,
  `createSelector` или аналоги в Zustand;
- **гранулярные подписки** —
  подписка только на нужные поля состояния;
- **React.memo** для компонентов;
- **вынос логики в хуки**,
  чтобы изолировать влияние состояния.

Пример с Zustand:

```js
const userName = useStore(state => state.user.name);
// компонент обновится только при изменении name
```
$answer$,
(SELECT id FROM topics WHERE name = 'State Management')
);