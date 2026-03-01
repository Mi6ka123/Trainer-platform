-- Trainer Platform Database Schema
-- Create all tables for the application

-- Users table (clients)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trainers table
CREATE TABLE IF NOT EXISTS trainers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  specialization VARCHAR(100),
  bio TEXT,
  hourly_rate INTEGER DEFAULT 5000,
  rating DECIMAL(3,2) DEFAULT 0,
  reviews_count INTEGER DEFAULT 0,
  photo_url TEXT,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Training sessions
CREATE TABLE IF NOT EXISTS sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trainer_id UUID REFERENCES trainers(id) ON DELETE CASCADE,
  client_id UUID REFERENCES users(id) ON DELETE CASCADE,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  status VARCHAR(50) DEFAULT 'scheduled', -- scheduled, completed, cancelled
  price INTEGER NOT NULL,
  commission_amount INTEGER,
  trainer_earnings INTEGER,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payments
CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
  client_id UUID REFERENCES users(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL,
  status VARCHAR(50) DEFAULT 'pending', -- pending, completed, failed, refunded
  payment_method VARCHAR(100), -- kaspi, stripe, card
  transaction_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reviews
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
  trainer_id UUID REFERENCES trainers(id) ON DELETE CASCADE,
  client_id UUID REFERENCES users(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trainer availability/schedule
CREATE TABLE IF NOT EXISTS trainer_schedules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trainer_id UUID REFERENCES trainers(id) ON DELETE CASCADE,
  day_of_week INTEGER, -- 0-6 (Monday-Sunday)
  start_time TIME,
  end_time TIME,
  is_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_trainers_user_id ON trainers(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_trainer_id ON sessions(trainer_id);
CREATE INDEX IF NOT EXISTS idx_sessions_client_id ON sessions(client_id);
CREATE INDEX IF NOT EXISTS idx_sessions_status ON sessions(status);
CREATE INDEX IF NOT EXISTS idx_payments_session_id ON payments(session_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
CREATE INDEX IF NOT EXISTS idx_reviews_trainer_id ON reviews(trainer_id);
CREATE INDEX IF NOT EXISTS idx_trainer_schedules_trainer_id ON trainer_schedules(trainer_id);

-- Insert sample trainers for testing
INSERT INTO users (email, name, phone, bio) VALUES
  ('alina@trainers.kz', 'Алина Сергеева', '+77001234567', 'Йога инструктор'),
  ('dmitry@trainers.kz', 'Дмитрий Смирнов', '+77007654321', 'Тренер по силовым тренировкам'),
  ('mariya@trainers.kz', 'Мария Петрова', '+77009876543', 'Фитнес тренер'),
  ('ivan@trainers.kz', 'Иван Кузнецов', '+77005555555', 'Личный тренер'),
  ('natasha@trainers.kz', 'Наталья Волкова', '+77003333333', 'Инструктор пилатеса')
ON CONFLICT DO NOTHING;

INSERT INTO trainers (user_id, specialization, bio, hourly_rate, rating, photo_url, verified)
SELECT id, 
  CASE 
    WHEN email = 'alina@trainers.kz' THEN 'Йога'
    WHEN email = 'dmitry@trainers.kz' THEN 'Силовые тренировки'
    WHEN email = 'mariya@trainers.kz' THEN 'Фитнес'
    WHEN email = 'ivan@trainers.kz' THEN 'Личный тренинг'
    WHEN email = 'natasha@trainers.kz' THEN 'Пилатес'
  END,
  'Опытный профессиональный тренер',
  5000,
  4.5,
  'https://via.placeholder.com/200',
  TRUE
FROM users 
WHERE email IN ('alina@trainers.kz', 'dmitry@trainers.kz', 'mariya@trainers.kz', 'ivan@trainers.kz', 'natasha@trainers.kz')
ON CONFLICT DO NOTHING;
