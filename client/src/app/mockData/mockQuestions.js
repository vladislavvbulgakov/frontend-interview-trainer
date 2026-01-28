const MOCK_QUESTIONS = [
   {
      questionId: "q-1",
      type: "TECHNICAL",
      grade: "JUNIOR",
      topic: {
         id: "js",
         name: "JavaScript"
      },
      difficulty: 3,
      content: "Что такое замыкание (closure) в JavaScript?",
      hrHint: null,
      referenceAnswer: `
        Замыкание — это функция, которая имеет доступ к переменным из внешней области видимости,
        даже после того, как внешняя функция завершила выполнение.
        Используется для инкапсуляции состояния.
    `,
      userStatus: {
         lastAnswer: "NOT_ANSWERED",
         confidenceScore: 0
      }
   },

   {
      questionId: "q-2",
      type: "TECHNICAL",
      grade: "JUNIOR",
      topic: {
         id: "js",
         name: "JavaScript"
      },
      difficulty: 4,
      content: "Что такое микрозадачи (microtasks) и макрозадачи (macrotasks)?",
      hrHint: null,
      referenceAnswer: `
        Microtasks: Promise.then, queueMicrotask, MutationObserver.
        Macrotasks: setTimeout, setInterval, I/O, UI events.
        Microtasks выполняются сразу после текущего скрипта, до следующего macrotask.
    `,
      userStatus: {
         lastAnswer: "NOT_ANSWERED",
         confidenceScore: 0
      }
   },

   {
      questionId: "q-3",
      type: "TECHNICAL",
      grade: "MIDDLE",
      topic: {
         id: "react",
         name: "React"
      },
      difficulty: 4,
      content: "Что такое reconciliation в React?",
      hrHint: null,
      referenceAnswer: `
        Reconciliation — процесс сравнения Virtual DOM деревьев
        для определения минимального количества изменений в реальном DOM.
        Использует keys для оптимизации.
    `,
      userStatus: {
         lastAnswer: "ANSWERED",
         confidenceScore: 3
      }
   },

   {
      questionId: "q-4",
      type: "TECHNICAL",
      grade: "MIDDLE",
      topic: {
         id: "react",
         name: "React"
      },
      difficulty: 5,
      content: "Зачем нужны keys в списках React?",
      hrHint: null,
      referenceAnswer: `
        Keys помогают React эффективно определять,
        какие элементы изменились, были добавлены или удалены.
        Использование index как key — плохая практика.
    `,
      userStatus: {
         lastAnswer: "ANSWERED",
         confidenceScore: 4
      }
   },

   {
      questionId: "q-5",
      type: "TECHNICAL",
      grade: "SENIOR",
      topic: {
         id: "architecture",
         name: "Architecture"
      },
      difficulty: 5,
      content: "Объясните принципы SOLID.",
      hrHint: null,
      referenceAnswer: `
        S — Single Responsibility
        O — Open/Closed
        L — Liskov Substitution
        I — Interface Segregation
        D — Dependency Inversion
    `,
      userStatus: {
         lastAnswer: "NOT_ANSWERED",
         confidenceScore: 0
      }
   },

   {
      questionId: "q-6",
      type: "HR",
      grade: "JUNIOR",
      topic: {
         id: "hr-growh",
         name: "Growth & Motivation"
      },
      difficulty: 2,
      content: "Расскажите о себе и вашем опыте.",
      hrHint: "Оценить умение структурировано рассказывать",
      referenceAnswer: `
        Краткое представление, текущая роль, ключевые навыки,
        интерес к развитию и обучению.
    `,
      userStatus: {
         lastAnswer: "ANSWERED",
         confidenceScore: 2
      }
   },

   {
      questionId: "q-7",
      type: "HR",
      grade: "MIDDLE",
      topic: {
         id: "hr-problem-solving",
         name: "Problem Solving"
      },
      difficulty: 3,
      content: "Как вы реагируете на критику?",
      hrHint: "Оценить зрелость и самоанализ",
      referenceAnswer: `
        Важно показать открытость к обратной связи,
        готовность анализировать ошибки и улучшаться.
    `,
      userStatus: {
         lastAnswer: "ANSWERED",
         confidenceScore: 4
      }
   },

   {
      questionId: "q-8",
      type: "TECHNICAL",
      grade: "MIDDLE",
      topic: {
         id: "performance",
         name: "Performance"
      },
      difficulty: 4,
      content: "Как можно оптимизировать производительность веб-приложения?",
      hrHint: null,
      referenceAnswer: `
    Code splitting, lazy loading, memoization,
    оптимизация изображений, уменьшение re-render'ов.
    `,
      userStatus: {
         lastAnswer: "NOT_ANSWERED",
         confidenceScore: 0
      }
   },

   {
      questionId: "q-9",
      type: "TECHNICAL",
      grade: "JUNIOR",
      topic: {
         id: "html-css",
         name: "HTML / CSS"
      },
      difficulty: 2,
      content: "В чем разница между display: none и visibility: hidden?",
      hrHint: null,
      referenceAnswer: `
    display: none — элемент удаляется из layout.
    visibility: hidden — элемент невидим, но занимает место.
    `,
      userStatus: {
         lastAnswer: "ANSWERED",
         confidenceScore: 3
      }
   },

   {
      questionId: "q-10",
      type: "TECHNICAL",
      grade: "SENIOR",
      topic: {
         id: "browser",
         name: "Browser & Web Basics"
      },
      difficulty: 5,
      content: "Как браузер обрабатывает загрузку страницы?",
      hrHint: null,
      referenceAnswer: `
    Парсинг HTML → построение DOM,
    парсинг CSS → CSSOM,
    render tree → layout → paint → composite.
    `,
      userStatus: {
         lastAnswer: "NOT_ANSWERED",
         confidenceScore: 0
      }
   }
];

export default MOCK_QUESTIONS;
