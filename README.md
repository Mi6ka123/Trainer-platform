# TrainerHub MVP

**Platform for booking and managing fitness trainers in Almaty**

## 🎯 Features

- **Client Side:**
  - 🔍 Search trainers by specialization and price
  - 📅 Book sessions with calendar
  - 💳 Mock payment system (Kaspi & Stripe ready)
  - ⭐ Leave reviews and ratings
  - 📱 Responsive design (mobile-first)

- **Trainer Side:**
  - 📝 Registration and profile setup
  - 📊 Dashboard with bookings
  - 💰 Earnings tracking
  - 📅 Schedule management

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** Supabase (PostgreSQL) - Ready
- **Hosting:** Railway
- **Payments:** Kaspi & Stripe (mock for MVP)

## 📂 Project Structure

```
trainer-platform/
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Tailwind CSS
│   ├── client/
│   │   ├── search/page.tsx      # Find trainers
│   │   ├── booking/page.tsx     # Book session
│   │   ├── payment/page.tsx     # Payment page
│   │   └── my-sessions/page.tsx # My bookings
│   └── trainer/
│       └── register/page.tsx    # Trainer signup
├── lib/
│   └── supabase.ts              # Supabase client
├── Dockerfile                   # Docker config
├── package.json                 # Dependencies
└── railway.json                 # Railway config
```

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

## 📦 Deployment

See `DEPLOY.md` for Railway deployment instructions.

## 💾 Database Setup

When connected to Supabase, run these SQL commands:

```sql
-- See TRAINER_PLATFORM_MVP_TZ.md Part 2 for full schema
CREATE TABLE users (...)
CREATE TABLE trainers (...)
CREATE TABLE sessions (...)
CREATE TABLE payments (...)
```

## 🧪 Testing

All pages are functional with **mock data**:
- Trainers list is mocked
- Booking saves to session state
- Payment is mock (no real charges)
- Reviews are mock

When connected to Supabase, replace mock data with real database queries.

## 💰 Business Model

- **Commission:** 20-25% from each session
- **Target Revenue:** 500k tenge/month (20 trainers, 5+ bookings each)
- **Payment Flow:** Client → Platform → Trainer (minus commission)

## 🔒 Security Notes

- Passwords should be hashed (use bcrypt in production)
- Payment data should be PCI-DSS compliant
- Add authentication middleware for protected routes
- Validate all inputs on backend

## 📈 Next Features

- [ ] Real Supabase integration
- [ ] User authentication (email/password)
- [ ] Real payment processing (Kaspi/Stripe)
- [ ] Email notifications
- [ ] SMS notifications
- [ ] Google/Apple Maps integration
- [ ] Mobile app (React Native)
- [ ] Video calls (Zoom integration)
- [ ] Advanced analytics
- [ ] Referral program

## 👨‍💼 Support

- **Questions?** Check `TRAINER_PLATFORM_MVP_TZ.md`
- **Deployment help?** See `DEPLOY.md`
- **Code issues?** Check Next.js docs

---

**Built with ❤️ for TrainerHub**

Status: **MVP Ready** ✅
