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
  $$Что такое хуки (hooks) в React? Зачем они нужны?$$,
  NULL,
  $answer$
**Хуки** — это функции,
которые позволяют использовать состояние (**state**)
и побочные эффекты (**effects**)
в функциональных компонентах.

Основные хуки:
- `useState` — управление локальным состоянием,
- `useEffect` — выполнение побочных эффектов
  (запросы, подписки и т.д.),
- `useContext`, `useReducer`,
  `useCallback`, `useMemo` и другие.

Пример:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      {count}
    </button>
  );
}
```
Хуки сделали функциональные компоненты
основным способом разработки в React
и устранили необходимость в классовых компонентах.
$answer$,
(SELECT id FROM topics WHERE name = 'React')
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
  $$Что такое props в React? Можно ли их изменять?$$,
  NULL,
  $answer$
**Props (properties)** — это входные данные компонента,
которые передаются от родительского компонента
к дочернему.

Основные свойства props:
- являются **read-only**,
- не должны мутироваться внутри компонента,
- обеспечивают **однонаправленный поток данных**.

Пример:

```jsx
function Greeting({ name }) {
  // name — prop, изменять его нельзя
  return <h1>Hello, {name}!</h1>;
}
```
Если требуется изменяемое состояние,
следует использовать useState
или поднять состояние в родительский компонент.
$answer$,
(SELECT id FROM topics WHERE name = 'React')
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
  $$Что такое компонент в React? Какие типы компонентов существуют?$$,
  NULL,
  $answer$
**Компонент** — это независимая
и переиспользуемая часть UI,
которая описывает,
как выглядит и ведёт себя интерфейс.

Основные типы компонентов:

1. **Функциональные компоненты**  
   Основной и рекомендуемый подход:

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
```
2. **Классовые компоненты**
Устаревший стиль (до React 16.8),
основанный на React.Component.

С появлением хуков функциональные компоненты
покрывают все основные сценарии разработки.
$answer$,
(SELECT id FROM topics WHERE name = 'React')
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
  $$Что такое состояние (state) в React? Как его обновлять?$$,
  NULL,
  $answer$
**State (состояние)** — это данные,
которые могут изменяться со временем
и влияют на рендер компонента.

В функциональных компонентах
состояние обновляется через `useState`:

```jsx
const [count, setCount] = useState(0);

setCount(1);                 // установить новое значение
setCount(prev => prev + 1);  // функциональное обновление
```
Важно помнить:

нельзя мутировать состояние напрямую
(state.field = value — ошибка),

обновления состояния асинхронны
и могут быть сгруппированы React.
$answer$,
(SELECT id FROM topics WHERE name = 'React')
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
  $$Что такое lifting state up (подъём состояния)?$$,
  NULL,
  $answer$
**Lifting state up** — это паттерн,
при котором общее состояние
перемещается в ближайший общий родительский компонент,
чтобы синхронизировать данные
между несколькими дочерними компонентами.

Типичный сценарий:
- два компонента используют одно и то же значение,
- состояние `value` выносится в родителя,
- родитель передаёт `value` и `onChange`
  в оба дочерних компонента.

Это обеспечивает
**единый источник истины (single source of truth)**.
$answer$,
  (SELECT id FROM topics WHERE name = 'React')
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
  $$Что такое ref в React? Как его использовать?$$,
  NULL,
  $answer$
**ref** — это способ получить
прямой доступ к DOM-элементу
или сохранить изменяемое значение
без вызова ререндера.

Создание рефа:

```jsx
const inputRef = useRef(null);
```

Использование:

```jsx
<input ref={inputRef} />
<button onClick={() => inputRef.current.focus()}>
  Focus
</button>
```
Дополнительно:

ref можно использовать
для хранения значений,
которые не влияют на рендер
(аналог this.variable в классовых компонентах).

Рекомендации:

не читать и не изменять ref.current
во время рендера;

не использовать ref там,
где можно обойтись декларативным подходом
и состоянием.
$answer$,
(SELECT id FROM topics WHERE name = 'React')
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
  $$В чём разница между useEffect и useLayoutEffect?$$,
  NULL,
  $answer$
- **useEffect**
  запускается асинхронно
  после отрисовки DOM и перерисовки браузера;
  не блокирует визуальный рендер.

- **useLayoutEffect**
  запускается синхронно
  сразу после изменения DOM,
  но **до** отрисовки браузера;
  блокирует визуальное обновление.

`useLayoutEffect` следует использовать,
только если нужно:
- измерить DOM-элемент сразу после изменений,
- синхронно применить визуальные правки,
  чтобы избежать мерцания.

В **95% случаев** достаточно `useEffect`.
$answer$,
  (SELECT id FROM topics WHERE name = 'React')
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
  5,
  $$Как работает Concurrent Mode и Suspense в React? Для чего они нужны?$$,
  NULL,
  $answer$
В React 18 **Concurrent Mode**
доступен в виде *concurrent features*.

Он позволяет React:
- прерывать рендеринг
  низкоприоритетных обновлений
  в пользу высокоприоритетных
  (например, пользовательского ввода);
- отображать fallback UI
  во время загрузки данных.

**Suspense** — компонент,
который позволяет «ожидать»
асинхронные операции
(загрузку кода или данных):

```jsx
<Suspense fallback={<Spinner />}>
  <ProfileDetails />
</Suspense>
```
Требования:

компонент внутри Suspense
должен «выбрасывать» Promise
(обычно через библиотеку
или кастомный cache).

Цель —
улучшить UX
за счёт плавных переходов
и отсутствия визуальных скачков.
$answer$,
(SELECT id FROM topics WHERE name = 'React')
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
  5,
  $$Как работает batching (пакетная обработка) состояний в React 18? Что изменилось?$$,
  NULL,
  $answer$
В React 18 была значительно расширена
**автоматическая пакетная обработка обновлений
(automatic batching)**.

Раньше:
- `setState` внутри обработчиков событий
  группировались в один ререндер;
- обновления из `setTimeout`, `Promise`
  и нативных событий
  вызывали **несколько ререндеров**.

В React 18:
- **все** обновления состояния
  автоматически группируются
  в один ререндер,
  независимо от источника.

Это улучшает производительность
и снижает количество лишних рендеров.

При необходимости batching
можно отключить с помощью `flushSync`
(используется крайне редко).
$answer$,
  (SELECT id FROM topics WHERE name = 'React')
);
