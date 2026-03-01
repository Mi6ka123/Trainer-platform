# Railway Setup - Complete Guide

## Step 1: Deploy App to Railway

1. Go to: https://railway.app/project/cef6e37d-cbb9-403a-9320-5ea6c668fbb2
2. Click "+ New" → "GitHub Repo"
3. Select: `Mi6ka123/Trainer-platform`
4. Railway will auto-deploy

## Step 2: Add PostgreSQL Database

1. In Railway dashboard, click "+ New"
2. Select "PostgreSQL"
3. Railway creates database automatically
4. Copy connection details:
   - Host
   - Port (5432)
   - Database name
   - User
   - Password

## Step 3: Set Environment Variables

In Railway dashboard for your App service:

1. Click "Variables"
2. Add:
```
DATABASE_URL=postgresql://user:password@host:5432/database_name
NODE_ENV=production
```

## Step 4: Connect App to Database

1. Click "Connect" button between App and PostgreSQL services
2. Railway auto-injects `DATABASE_URL`

## Step 5: Create Tables

Run this SQL in PostgreSQL:

**Option A: Railway Database GUI**
1. Click PostgreSQL service in Railway
2. Click "Database" tab
3. Paste SQL from `schema.sql` file
4. Execute

**Option B: psql CLI**
```bash
psql postgresql://user:password@host:5432/database_name < schema.sql
```

**Option C: Node.js Script**
Create `scripts/init-db.js`:
```javascript
const { Pool } = require('pg');
const fs = require('fs');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const schema = fs.readFileSync('./schema.sql', 'utf8');

pool.query(schema)
  .then(() => {
    console.log('✅ Database initialized');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  });
```

Then run:
```bash
npm install pg
node scripts/init-db.js
```

## Step 6: Update App Code

App now has access to `DATABASE_URL`. 

Example query in Next.js API route:
```typescript
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(req: Request) {
  const result = await pool.query('SELECT * FROM trainers');
  return Response.json(result.rows);
}
```

## Expected Result

✅ App running on: `https://trainer-platform-production.railway.app`
✅ Database connected and initialized
✅ 5 sample trainers in database
✅ Ready to add real trainers and clients

## Troubleshooting

**App can't connect to DB:**
- Check `DATABASE_URL` in variables
- Ensure PostgreSQL service is running
- Check database credentials

**SQL errors:**
- Verify schema.sql syntax
- Check PostgreSQL version compatibility
- Look at Railway logs

**Missing tables:**
- Run schema.sql again
- Check execution output in logs
