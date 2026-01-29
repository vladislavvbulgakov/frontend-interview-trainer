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
  $$Что такое медиа-запросы? Приведите пример responsive-дизайна.$$, 
  NULL,
  $answer$
**Медиа-запросы** позволяют применять CSS-стили
в зависимости от условий устройства:
ширины экрана, ориентации, плотности пикселей и т.д.

Часто используется **mobile-first подход**:
базовые стили — для мобильных устройств,
а десктоп-версии подключаются через `min-width`.

Пример:

```css
/* мобильные стили — по умолчанию */
body {
  font-size: 16px;
}

/* десктоп */
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}
```
$answer$,
(SELECT id FROM topics WHERE name = 'CSS')
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
  $$Что такое CSS-специфичность? Как она рассчитывается?$$,
  NULL,
  $answer$
**Специфичность** определяет,
какие CSS-стили будут применены,
если к одному элементу подходят несколько правил.

Приоритет (от высшего к низшему):
1. `!important` (следует избегать),
2. inline-стили (`style="..."`),
3. ID-селекторы (`#header`),
4. классы, атрибуты, псевдоклассы  
   (`.btn`, `[type="text"]`, `:hover`),
5. элементы и псевдоэлементы  
   (`div`, `::before`).

Специфичность считается по формуле:
**(ID, классы, теги)**.

Примеры:
- `#nav .item` → **(1, 1, 0)**
- `.menu li` → **(0, 1, 1)**

Правило с большей специфичностью побеждает.
$answer$,
  (SELECT id FROM topics WHERE name = 'CSS')
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
  $$Что делает свойство box-sizing: border-box?$$,
  NULL,
  $answer$
По умолчанию используется значение `content-box`:
ширина элемента задаёт только **content**,
а `padding` и `border` добавляются сверху.

`box-sizing: border-box` включает
`padding` и `border` **внутрь заданной ширины** элемента.

Пример:

```css
.element {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
}
```
Это упрощает layout:
width: 100% действительно занимает всю ширину,
даже при наличии padding и border.
$answer$,
(SELECT id FROM topics WHERE name = 'CSS')
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
  $$Как центрировать блок по вертикали и горизонтали?$$,
  NULL,
  $answer$
Самый современный и удобный способ —
использовать **Flexbox**.

Пример:

```css
.parent {
  display: flex;
  justify-content: center; /* горизонталь */
  align-items: center;     /* вертикаль */
}
```
Flexbox обеспечивает
простое и надёжное центрирование
независимо от размеров элемента.
$answer$,
(SELECT id FROM topics WHERE name = 'CSS')
);