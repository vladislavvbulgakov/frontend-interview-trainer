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
  $$Как работает механизм приведения типов (type coercion) в JavaScript? Приведите примеры.$$, 
  NULL,
  $answer$
JavaScript автоматически приводит типы в выражениях.
Правила сложные, но есть ключевые случаи.

### Приведение к строке
Происходит при конкатенации с `+`,
если один из операндов — строка:

```js
1 + "2" // "12"
```
### Приведение к числу

Используется в арифметике,
при нестрогом сравнении (==)
и с унарным плюсом:

```js
"5" - 2 // 3
+"42"   // 42
```
### Приведение к boolean

Происходит в условиях и логических операциях:
```js
!!0 // false
```
### Опасный пример

```js
[] == ![] // true
// []  -> "" (toPrimitive)
// ![] -> false -> 0
// "" == 0 -> true
```
Рекомендация:
избегайте ==, используйте ===.
$answer$,
(SELECT id FROM topics WHERE name = 'JavaScript')
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
  $$Как объявить функцию в JavaScript? Назовите три способа.$$, 
  NULL,
  $answer$
Существует три основных способа объявления функций.

### 1. Function Declaration

```js
function greet() {
  return "Hello";
}
```
### 2. Function Expression

```js
const greet = function () {
  return "Hello";
};
```
### 3. Arrow Function

```js
const greet = () => "Hello";
```
Различия:

Function Declaration подвержена hoisting,

Function Expression — нет,

стрелочные функции не имеют собственного
this, arguments и super.
$answer$,
(SELECT id FROM topics WHERE name = 'JavaScript')
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
  $$Как работает деструктуризация в JavaScript? Приведите примеры для объектов и массивов.$$, 
  NULL,
  $answer$
**Деструктуризация** — это извлечение значений
из объектов или массивов
в отдельные переменные.

### Массивы

```js
const [a, b] = [1, 2];      // a = 1, b = 2
const [x, , y] = [1, 2, 3]; // x = 1, y = 3
```
### Объекты
```js
const { name, age } = { name: "Bob", age: 25 };

// переименование
const { name: fullName } = user;

// значение по умолчанию
const { role = "user" } = user;
```
Деструктуризация удобна при работе:

с API-ответами,

с параметрами функций,

с конфигурационными объектами.
$answer$,
(SELECT id FROM topics WHERE name = 'JavaScript')
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
  $$В чём разница между == и === в JavaScript?$$, 
  NULL,
  $answer$
- `==` — **нестрогое равенство**,
  выполняет приведение типов перед сравнением;
- `===` — **строгое равенство**,
  сравнивает и значения, и типы без приведения.

Примеры:

```js
0 == false   // true
0 === false  // false

"" == 0      // true
"" === 0     // false
```
Рекомендуется использовать ===,
чтобы избежать неожиданного поведения.
$answer$,
(SELECT id FROM topics WHERE name = 'JavaScript')
);