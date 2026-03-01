# Deployment to Railway

## Quick Start

### Option 1: Deploy from Files (Fastest)

1. **Go to Railway Dashboard:**
   https://railway.app/project/cef6e37d-cbb9-403a-9320-5ea6c668fbb2

2. **Create New Service:**
   - Click "+ New" → "Empty Service"
   - Name: `trainer-platform`

3. **Upload Files:**
   - Connect repository OR upload files manually
   - Railway will auto-detect `Dockerfile`

4. **Set Environment:**
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NODE_ENV=production
   ```

5. **Deploy:**
   - Click "Deploy"
   - Railway builds and starts your app
   - Get public URL (example: `https://trainer-platform-production.railway.app`)

---

## Local Testing

### Run Locally
```bash
npm install
npm run dev
```

Visit: http://localhost:3000

### Test Build
```bash
npm run build
npm run start
```

---

## Pages Available

- **Home:** `/`
- **Find Trainers:** `/client/search`
- **Become Trainer:** `/trainer/register`
- **Book Session:** `/client/booking`
- **Payment:** `/client/payment`
- **My Sessions:** `/client/my-sessions`

---

## Next Steps

1. **Connect Supabase Database:**
   - Create account at supabase.com
   - Create new project
   - Copy URL and Anon Key
   - Add to Railway environment variables

2. **Run Database Migrations:**
   - Execute SQL from `TRAINER_PLATFORM_MVP_TZ.md` Part 2

3. **Connect Payment (Optional):**
   - Kaspi API or Stripe (mock for now)

4. **Add Real Trainers:**
   - Create trainer records in database
   - Upload trainer photos

---

## Support

For Railway issues: https://railway.app/docs
For Next.js issues: https://nextjs.org/docs
