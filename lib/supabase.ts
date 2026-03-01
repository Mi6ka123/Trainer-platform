// Database configuration for PostgreSQL
// Uses DATABASE_URL environment variable set by Railway

export const getDbUrl = () => {
  return process.env.DATABASE_URL || 'postgresql://localhost:5432/trainer_platform'
}
