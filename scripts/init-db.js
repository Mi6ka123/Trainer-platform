#!/usr/bin/env node

const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

async function initDatabase() {
  if (!process.env.DATABASE_URL) {
    console.log('⚠️  DATABASE_URL not set, skipping database initialization');
    return;
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    console.log('🔄 Connecting to database...');
    
    // Test connection
    const client = await pool.connect();
    console.log('✅ Connected to database');
    client.release();

    // Read and execute schema
    const schemaPath = path.join(__dirname, '../schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    console.log('📝 Creating tables...');
    await pool.query(schema);
    
    console.log('✅ Database initialized successfully!');
    console.log('✅ Tables created');
    console.log('✅ Sample data inserted');
    
  } catch (err) {
    console.error('❌ Database initialization failed:', err.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

initDatabase();
