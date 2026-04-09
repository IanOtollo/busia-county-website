# County Government of Busia Official Website

This is the official website for the County Government of Busia, Kenya. It is a high-performance, secure, and production-ready platform serving citizens, investors, and international partners.

## Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Internationalization**: next-intl (English & Swahili)
- **Security**: Strict CSP, HSTS, XSS protection, and pre-rendered static content

### Backend
- **Framework**: Laravel 11
- **Database**: SQLite (Default) / MySQL
- **API**: RESTful API with Sanctum authentication
- **Validation**: Form Request classes for all inputs

## Getting Started

### Prerequisites
- Node.js 18+
- PHP 8.3+
- Composer
- SQLite (usually included with PHP)

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd busia-county-website
   ```

2. **Frontend Setup**
   ```bash
   npm install
   cp .env.local.sample .env.local
   npm run dev
   ```

3. **Backend Setup**
   ```bash
   cd backend
   composer install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate --seed
   php artisan serve
   ```

## Directory Structure

- `/src/app`: Next.js App Router (Routes & Layouts)
- `/src/components`: UI & Layout components
- `/src/lib`: API clients, constants, and utilities
- `/messages`: Internationalization (i18n) translation files
- `/backend`: Laravel 11 source code

## Features

- **Multilingual Support**: Switch seamlessly between English and Swahili.
- **Resource Center**: Full library of budget documents, plans, and policies.
- **Service Portal**: Direct access to department services and contact information.
- **Transparency**: Active trackers for Tenders and Vacancies.
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing.

## Security

The platform implements industry-standard security practices:
- Secure communication via HTTPS enforcement.
- Protection against common web vulnerabilities (XSS, CSRF, SQLi).
- Controlled Content Security Policy (CSP).

---
© 2026 County Government of Busia. All Rights Reserved.
