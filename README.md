# Rowdy Diamond Store 🎮💎

Rowdy Diamond Store is a premium, high-performance web platform designed for the FreeFire gaming community in Sri Lanka. It provides a seamless and secure experience for instant diamond top-ups, a verified marketplace for high-level gaming accounts, and dedicated multi-tenant administration tools.

![Rowdy Diamond Store Logo](public/logo.svg)

## 🚀 Features

### 💎 Diamond Top-up System

- **Instant Checkout**: Multi-step checkout modal for selecting diamond packages.
- **Player Verification**: Real-time FreeFire Player ID lookup to ensure diamonds reach the right account.
- **Payment Proof**: Secure screenshot upload for admin verification via Cloudinary.
- **Automated Emails**: Instant email notifications for order placement and completion.

### 🏪 Account Marketplace

- **Verified Listings**: High-level accounts with detailed stats (Level, Rank, Diamonds, Skins, Characters).
- **Flexible Payments**: Support for both **One-time Full Payment** and **Installment Plans** (up to 12 months).
- **Down-payment Logic**: Automated calculation of monthly balances based on the selected down-payment amount.
- **Secure Transfer**: Managed account handovers via admin verification.

### 🛠️ Admin & Seller Portals

- **Subdomain Routing**: Native Next.js Proxies mapping `admin.rowdydiamond.store` and `seller.rowdydiamond.store` cleanly to their respective dashboards.
- **Admin Dashboard**: Real-time tracking of revenue, order management, inventory control, and user oversight.
- **Seller Portal**: Dedicated high-tech Diamond Blue glassmorphism portal for independent sellers to list accounts and track their own sales.
- **Isolated Management**: Distinct logic and styling separating general users, sellers, and administrators.

### 🔒 Security & Authentication

- **Better Auth Integration**: Secure authentication with support for Email OTP for users, sellers, and admins.
- **OTP Verification**: Mandatory email verification for all new user registrations to prevent spam.
- **Role-Based Access**: Protected routes and multi-tier role management (`user`, `seller`, `admin`).
- **WAF Compatibility**: Proxy-based rewrites bypassing traditional Edge middleware limits for flawless WAF traversal and header transmission.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Server Actions, Native Rewrites)
- **Authentication**: [Better Auth](https://better-auth.com/) (Email OTP, Role Management)
- **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose-less architecture for high performance)
- **Styling**: Vanilla CSS Modules (Glassmorphism, Diamond Blue UI, Fluid Typography)
- **Media**: [Cloudinary](https://cloudinary.com/) (Payment proof and account screenshot management)
- **Email**: [Nodemailer](https://nodemailer.com/) (Transaction alerts and OTPs)
- **Icons**: [Lucide React](https://lucide.dev/) (with custom inline SVG integrations)

## 📦 Getting Started

### Prerequisites

- Node.js 20+
- pnpm
- MongoDB Atlas cluster
- Cloudinary account
- SMTP service (Gmail, SendGrid, or Resend)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-repo/rowdy-diamond-store.git
   cd rowdy-diamond-store
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Environment Variables**:
   Create a `.env.local` file and add the following:

   ```env
   # Core
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_APP_URL=http://localhost:3000

   # Auth
   BETTER_AUTH_SECRET=your_auth_secret

   # Email (SMTP)
   EMAIL_SERVER_HOST=smtp.gmail.com
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER=your_email@gmail.com
   EMAIL_SERVER_PASSWORD=your_app_password
   EMAIL_FROM="Rowdy Diamond Store <noreply@rowdydiamond.lk>"
   ADMIN_EMAIL=admin@rowdydiamond.lk

   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # Automation
   CRON_SECRET=your_random_string_for_reminders
   ```

4. **Run the development server**:

   ```bash
   pnpm dev
   ```

## 🏗️ Project Structure

```text
├── app/                  # Next.js App Router
│   ├── (auth)/           # Sign-in, Sign-up, and Seller login flows (OTP)
│   ├── (main)/           # Public pages (Diamonds, Accounts, Profile, Contact)
│   ├── admin/            # Protected Admin Panel
│   ├── seller/           # Dedicated Seller Dashboard
│   └── api/              # API Endpoints (Auth, Orders, Stats)
├── components/           # Shared React Components
│   ├── layout/           # Navbar & Footer
│   ├── diamonds/         # Top-up modals & cards
│   └── accounts/         # Installment modals & listings
├── lib/                  # Core Utilities (Auth configuration, DB Client, Mailer)
├── public/               # Static Assets (Favicons, SVG Logos, Vectors)
└── next.config.mjs       # Config & Native Proxy Routing Rules
```

## 🌐 Subdomain Proxies

Routing for subdomains is handled via `next.config.mjs` using Next.js `rewrites()` and `redirects()`. This completely bypasses the need for `middleware.ts`, preventing edge runtime crashes and resolving cookie forwarding issues.

- `admin.rowdydiamond.store` -> Proxied to `/admin`
- `seller.rowdydiamond.store` -> Proxied to `/seller`
- Root traffic maps dynamically to `app/(main)`

## 📜 Automation

The project includes a cron-job endpoint at `/api/cron/payment-reminders` to automatically notify users via email 24 hours before their installment due dates. This can be scheduled using Vercel Cron or GitHub Actions.

## 📄 License

This project is for educational and commercial demonstration purposes only.

---
Built with ❤️ for the FreeFire Community.
