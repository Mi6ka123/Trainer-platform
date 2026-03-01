# Deploy to Railway - Complete Instructions

## ✅ Project Status
- [x] Next.js 14 built successfully
- [x] All pages working with mock data
- [x] Dockerfile created
- [x] railway.json configured
- [x] Ready for deployment

## 🚀 Deploy Steps (Choose ONE method)

### Method 1: Connect GitHub Repo (Recommended)

1. Create empty repo on GitHub: https://github.com/new
   - Name: `trainer-platform`
   - Make it Public
   - Click "Create repository"

2. Go to Railway: https://railway.app/project/cef6e37d-cbb9-403a-9320-5ea6c668fbb2

3. Click "+ New" → "GitHub Repo"

4. Authorize Railway to access your GitHub

5. Select: `your-username/trainer-platform`

6. Railway will auto-detect Dockerfile and deploy

---

### Method 2: Use Railway CLI

```bash
# Set token
export RAILWAY_TOKEN=df8c9f1c-cddc-47ed-952c-c9134a9dea08

# Navigate to project
cd /root/.openclaw/workspace/trainer-platform

# Deploy
railway up
```

---

### Method 3: Upload ZIP (No GitHub)

1. Go to: https://railway.app/project/cef6e37d-cbb9-403a-9320-5ea6c668fbb2

2. Click "+ New" → "Raw GitHub URL"

3. Upload the project files directly

---

## 📋 What Gets Deployed

```
- Home page (/)
- Search trainers (/client/search)
- Register trainer (/trainer/register)
- Book session (/client/booking)
- Payment page (/client/payment)
- My sessions (/client/my-sessions)
- Reviews (integrated in my-sessions)
```

## 🎯 After Deployment

1. Get your Railway URL (something like: https://trainer-platform-production.railway.app)

2. Add environment variables in Railway Dashboard:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

3. Connect Supabase database (optional, for production)

4. Start adding real trainers to the database

## 💡 Next Steps

- [ ] Connect to Supabase
- [ ] Add real trainers
- [ ] Set up Kaspi/Stripe payments
- [ ] Configure email notifications
- [ ] Start marketing

---

## 📞 Support

- Railway Docs: https://railway.app/docs
- Next.js Docs: https://nextjs.org/docs
- Supabase Docs: https://supabase.com/docs
