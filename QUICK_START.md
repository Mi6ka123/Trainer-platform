# Quick Start - No GitHub Required

## Option 1: Docker (Recommended)

### Build locally
```bash
cd /root/.openclaw/workspace/trainer-platform
docker build -t trainer-platform:latest .
docker run -p 3000:3000 trainer-platform:latest
```

Open: http://localhost:3000

### Deploy to Railway with Docker
1. Go to: https://railway.app/project/cef6e37d-cbb9-403a-9320-5ea6c668fbb2
2. Click "+ New" → "GitHub Repo" 
3. Enter: `https://github.com/islambek/trainer-platform`
4. Or create repo first at: https://github.com/new

---

## Option 2: Run Locally (Node.js)

```bash
cd /root/.openclaw/workspace/trainer-platform

# Install
npm install

# Run development
npm run dev

# Or production build
npm run build
npm run start
```

Open: http://localhost:3000

---

## Option 3: Direct Railway Push

Using Railway CLI:
```bash
export RAILWAY_TOKEN=df8c9f1c-cddc-47ed-952c-c9134a9dea08
railway up
```

---

## What Works

✅ Home page
✅ Search trainers (mock data)
✅ Register trainer
✅ Book session
✅ Payment (test)
✅ My sessions
✅ Reviews

---

## Next: Connect Supabase

When you want real data, add these env vars in Railway:
```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

Then run SQL from `TRAINER_PLATFORM_MVP_TZ.md`
