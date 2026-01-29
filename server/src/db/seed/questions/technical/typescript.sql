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
  $$Что такое TypeScript и зачем он нужен?$$,
  NULL,
  $answer$
**TypeScript** — это надмножество JavaScript
со **статической типизацией**,
которое компилируется в обычный JS.

Преимущества TypeScript:
- раннее выявление ошибок,
- лучшее автодополнение и навигация в IDE,
- самодокументируемый код,
- поддержка generics, интерфейсов и utility types.

Используется в крупных проектах
для повышения надёжности
и поддерживаемости кода.
$answer$,
  (SELECT id FROM topics WHERE name = 'TypeScript')
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
  $$Как задать тип для функции в TypeScript?$$,
  NULL,
  $answer$
Существует несколько способов типизации функций.

### 1. Аннотация параметров и возвращаемого типа

```ts
function add(a: number, b: number): number {
  return a + b;
}
```
### 2. Типизация стрелочной функции

```ts
const greet = (name: string): string => `Hello, ${name}`;
```

### 3. Отдельный тип функции

```ts
type AddFn = (x: number, y: number) => number;

const add: AddFn = (a, b) => a + b;
```

TypeScript часто может
сам вывести тип возвращаемого значения,
поэтому явная аннотация
не всегда обязательна.
$answer$,
(SELECT id FROM topics WHERE name = 'TypeScript')
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
  $$Что такое generics в TypeScript? Приведите пример.$$, 
  NULL,
  $answer$
**Generics** позволяют писать универсальный код,
не привязываясь к конкретному типу.

Пример:

```ts
function identity<T>(arg: T): T {
  return arg;
}

const a = identity<string>("hello");
const b = identity("world"); // T = string
```
Generics полезны для:
    - функций и утилит,
    - массивов (Array<T>),
    - контейнеров и хуков.

Можно задавать ограничения:

```ts
function logLength<T extends { length: number }>(arg: T) {
  console.log(arg.length);
}
```
$answer$,
(SELECT id FROM topics WHERE name = 'TypeScript')
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
  $$Как создать тип, который запрещает определённые ключи объекта?$$,
  NULL,
  $answer$
Для запрета определённых ключей
используются `never` и mapped types.

Пример:

```ts
type ForbiddenKeys = "password" | "secret";

type WithoutForbidden<T> = {
  [K in keyof T as K extends ForbiddenKeys ? never : K]: T[K];
};
```
Такой тип полностью запрещает
наличие указанных ключей в объекте.

Альтернативы:

branded types,

runtime-валидация.
$answer$,
(SELECT id FROM topics WHERE name = 'TypeScript')
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
  $$Как реализовать тип, который делает все свойства объекта необязательными, кроме указанных?$$,
  NULL,
  $answer$
Для этого используются
mapped types и utility types.

Пример:

```ts
type RequiredExcept<T, K extends keyof T> =
  Partial<T> & Pick<T, K>;
```

Более строгий вариант:

```ts
type RequiredExcept<T, K extends keyof T> =
  Omit<T, K> & Required<Pick<T, K>>;
```

Пример использования:

```ts
interface User {
  id: string;
  name: string;
  email?: string;
}

type PartialUser = RequiredExcept<User, "id">;
// { id: string; name?: string; email?: string }
```
$answer$,
(SELECT id FROM topics WHERE name = 'TypeScript')
);