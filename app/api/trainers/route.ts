import { Pool } from 'pg';
import { NextResponse } from 'next/server';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// GET all trainers
export async function GET() {
  try {
    const result = await pool.query(`
      SELECT 
        t.id,
        t.specialization,
        t.hourly_rate,
        t.rating,
        t.reviews_count,
        t.photo_url,
        t.verified,
        u.name,
        u.email
      FROM trainers t
      JOIN users u ON t.user_id = u.id
      ORDER BY t.rating DESC
    `);
    
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch trainers' }, { status: 500 });
  }
}

// POST create new trainer
export async function POST(request: Request) {
  try {
    const { name, email, phone, specialization, hourly_rate, bio } = await request.json();
    
    // Create user
    const userResult = await pool.query(
      'INSERT INTO users (email, name, phone, bio) VALUES ($1, $2, $3, $4) RETURNING id',
      [email, name, phone, bio]
    );
    
    const userId = userResult.rows[0].id;
    
    // Create trainer
    const trainerResult = await pool.query(
      'INSERT INTO trainers (user_id, specialization, hourly_rate) VALUES ($1, $2, $3) RETURNING *',
      [userId, specialization, hourly_rate]
    );
    
    return NextResponse.json(trainerResult.rows[0], { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to create trainer' }, { status: 500 });
  }
}
