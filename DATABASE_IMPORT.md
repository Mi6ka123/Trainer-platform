# How to Import Database to Railway

## Option 1: Automatic (Recommended)

When you deploy to Railway, the database will be set up automatically via the `scripts/init-db.js` script.

## Option 2: Manual Import

### Step 1: Get PostgreSQL Connection String

1. Go to Railway: https://railway.app/project/cef6e37d-cbb9-403a-9320-5ea6c668fbb2
2. Click "PostgreSQL" service
3. Copy connection string (DATABASE_URL)

### Step 2: Import Database Dump

Using `psql`:

```bash
psql "postgresql://user:password@host:5432/railway" < database.sql
```

Using Railway CLI:

```bash
railway connect postgresql < database.sql
```

### Step 3: Verify Import

```bash
railway connect postgresql

# In PostgreSQL prompt:
\dt
SELECT COUNT(*) FROM trainers;
```

## What Gets Imported

✅ 6 tables (users, trainers, sessions, payments, reviews, trainer_schedules)
✅ 5 sample trainers
✅ All indexes and constraints
✅ Proper relationships and foreign keys

## Status

**Current Database:**
- Location: Localhost (PostgreSQL 16)
- Trainers: 5
- Users: 5
- Sessions: 0
- Payments: 0
- Reviews: 0

Ready to deploy to Railway! 🚀
