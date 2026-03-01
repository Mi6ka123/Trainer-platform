import { Pool } from 'pg';
import { NextResponse } from 'next/server';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// GET all sessions for a user
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const clientId = searchParams.get('clientId');
    const trainerId = searchParams.get('trainerId');
    
    let query = 'SELECT * FROM sessions WHERE 1=1';
    const params: string[] = [];
    
    if (clientId) {
      query += ' AND client_id = $' + (params.length + 1);
      params.push(clientId);
    }
    
    if (trainerId) {
      query += ' AND trainer_id = $' + (params.length + 1);
      params.push(trainerId);
    }
    
    query += ' ORDER BY start_time DESC';
    
    const result = await pool.query(query, params);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch sessions' }, { status: 500 });
  }
}

// POST create new session
export async function POST(request: Request) {
  try {
    const { trainerId, clientId, startTime, endTime, price } = await request.json();
    
    const result = await pool.query(
      `INSERT INTO sessions (trainer_id, client_id, start_time, end_time, price, status) 
       VALUES ($1, $2, $3, $4, $5, 'scheduled') 
       RETURNING *`,
      [trainerId, clientId, startTime, endTime, price]
    );
    
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 });
  }
}
