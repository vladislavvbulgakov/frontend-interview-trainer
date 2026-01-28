INSERT INTO topics (name, description, type)
VALUES
('Browser & Web Basics', 'Как работает браузер, рендеринг страницы, DOM, Web APIs и основы безопасности', 'TECHNICAL'),
('JavaScript', 'Язык JavaScript: синтаксис, execution model, асинхронность, память', 'TECHNICAL'),
('HTML & Layout','HTML, семантическая разметка, доступность и основы вёрстки', 'TECHNICAL'),
('CSS', 'Стили, layout-системы, responsive design, производительность CSS','TECHNICAL'),
('React', 'React API, компоненты, hooks, lifecycle и производительность', 'TECHNICAL'),
('State Management', 'Управление состоянием во frontend-приложениях','TECHNICAL'),
('Architecture & Patterns', 'Архитектурные подходы и паттерны во frontend-разработке', 'TECHNICAL'),
('Testing', 'Тестирование frontend-приложений: unit, integration, e2e','TECHNICAL'),
('Tooling & Ecosystem', 'Инструменты разработки, сборки и экосистема frontend','TECHNICAL'),
('Git', 'Системы контроля версий и командная работа с кодом','TECHNICAL'),
('HTTP & REST', 'Взаимодействие frontend с backend: HTTP, REST, API','TECHNICAL'),
('TypeScript', 'Статическая типизация в JavaScript, типы, интерфейсы, generics', 'TECHNICAL'),
('Build Tools', 'Инструменты сборки frontend-приложений: Webpack, Vite, Rollup','TECHNICAL'),
('CI/CD', 'Непрерывная интеграция и доставка: пайплайны, автоматизация, деплой', 'TECHNICAL'),
('Communication', 'Коммуникация в команде, объяснение решений, фидбек', 'HR'),
('Teamwork', 'Работа в команде и взаимодействие с другими ролями', 'HR'),
('Problem Solving', 'Подход к решению задач и анализу проблем', 'HR'),
('Growth & Motivation', 'Профессиональный рост, обучение и мотивация','HR'),
('Code Review & Feedback', 'Проведение код-ревью и работа с обратной связью', 'HR')
ON CONFLICT (name) DO NOTHING;