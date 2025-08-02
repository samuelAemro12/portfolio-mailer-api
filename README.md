# Portfolio Mailer API

Backend API for handling contact form submissions from Samuel Aemro's portfolio website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file with your email credentials:
```env
PORT=5000
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password
TO_EMAIL=your_email@gmail.com
```

3. For Gmail, enable 2FA and create an App Password

4. Run development server:
```bash
npm run dev
```

## API Endpoints

- `POST /api/mail` - Send contact form email
- `GET /` - Health check

## Deployment

Deploy to Render, Railway, or Vercel Functions.