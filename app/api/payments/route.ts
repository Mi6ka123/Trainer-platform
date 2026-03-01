import { Pool } from 'pg';
import { NextResponse } from 'next/server';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// POST create payment
export async function POST(request: Request) {
  try {
    const { sessionId, clientId, amount, paymentMethod } = await request.json();
    
    const result = await pool.query(
      `INSERT INTO payments (session_id, client_id, amount, payment_method, status) 
       VALUES ($1, $2, $3, $4, 'pending') 
       RETURNING *`,
      [sessionId, clientId, amount, paymentMethod]
    );
    
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to create payment' }, { status: 500 });
  }
}

// GET payment status
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentId = searchParams.get('paymentId');
    
    if (!paymentId) {
      return NextResponse.json({ error: 'Payment ID required' }, { status: 400 });
    }
    
    const result = await pool.query(
      'SELECT * FROM payments WHERE id = $1',
      [paymentId]
    );
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch payment' }, { status: 500 });
  }
}
