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
  $$Как отменить последний коммит, если он ещё не отправлен в удалённый репозиторий?$$,
  NULL,
  $answer$
Если нужно **сохранить изменения** в рабочей директории:

```bash
git reset --soft HEAD~1
```
Если нужно полностью удалить изменения:
```bash
git reset --hard HEAD~1
```
Важно:

не используйте --hard, если не уверены;

изменения будут удалены без возможности восстановления.
$answer$,
(SELECT id FROM topics WHERE name = 'Git')
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
  $$Как отменить изменения в рабочей директории до коммита?$$,
  NULL,
  $answer$
Отменить изменения в одном файле:

```bash
git checkout -- filename
```

Отменить все изменения:

```bash
git checkout .
```
$answer$,
(SELECT id FROM topics WHERE name = 'Git')
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
  $$Как посмотреть историю коммитов?$$,
  NULL,
  $answer$
Основные команды Git:

```bash
git log             # полная история
git log --oneline   # краткий формат
git log --graph     # визуализация веток
git log -p          # с diff
```
Графические инструменты:

gitk

VS Code

GitHub Desktop
$answer$,
(SELECT id FROM topics WHERE name = 'Git')
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
  $$Как объединить несколько коммитов в один (squash)?$$,
  NULL,
  $answer$
Для объединения коммитов используется
**interactive rebase**.

Пример для последних трёх коммитов:

```bash
git rebase -i HEAD~3
```
В открывшемся редакторе:

оставьте pick у первого коммита,

замените pick на squash (или s)
у остальных,

сохраните файл.

После этого Git предложит
отредактировать итоговое сообщение коммита.

Squash обычно используется перед PR,
чтобы убрать «мусорные» коммиты
и сохранить чистую историю.
$answer$,
(SELECT id FROM topics WHERE name = 'Git')
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
  $$Что такое rebase и чем он отличается от merge?$$,
  NULL,
  $answer$
**Merge**:
- создаёт новый коммит,
  объединяющий две ветки;
- история сохраняется в исходном виде.

**Rebase**:
- «перемещает» коммиты текущей ветки
  на вершину целевой ветки;
- история становится линейной.

Преимущества rebase:
- чистая и линейная история,
- легче отслеживать изменения.

Недостатки rebase:
- переписывает историю,
- нельзя использовать
  в общих (публичных) ветках.

Общее правило:
**rebase — для локальных веток,
merge — для публичных.**
$answer$,
  (SELECT id FROM topics WHERE name = 'Git')
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
  $$Как восстановить удалённую ветку?$$,
  NULL,
  $answer$
Если ветка **уже была запушена**:

```bash
git reflog                  # найти хеш последнего коммита
git checkout -b branch-name <hash>
git push origin branch-name
```
Если ветка не была запушена:

можно попробовать найти коммиты через
git fsck --lost-found,

но восстановление в этом случае сложнее
и не всегда возможно.

Профилактика:

регулярно пушить изменения,

использовать protected branches,

аккуратно работать с rebase и reset --hard.
$answer$,
(SELECT id FROM topics WHERE name = 'Git')
);