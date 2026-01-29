CREATE TABLE IF NOT EXISTS topics (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL UNIQUE,
  description text,
  type text NOT NULL CHECK (type IN ('TECHNICAL', 'HR'))
);