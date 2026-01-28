CREATE TABLE questions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),

  type text NOT NULL CHECK (type IN ('TECHNICAL', 'HR')),
  grade text NOT NULL CHECK (grade IN ('JUNIOR', 'MIDDLE', 'SENIOR')),
  difficulty int NOT NULL CHECK (difficulty BETWEEN 1 AND 5),

  content text NOT NULL,
  hr_hint text,
  reference_answer text,

  topic_id uuid NOT NULL REFERENCES topics(id) ON DELETE CASCADE
);

ALTER TABLE questions
ADD CONSTRAINT questions_type_invariants_check
CHECK (
  (type = 'HR' AND reference_answer IS NULL AND hr_hint IS NOT NULL)
  OR
  (type = 'TECHNICAL' AND hr_hint IS NULL AND reference_answer IS NOT NULL)
);