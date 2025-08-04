/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    RECAPTCHA_SECRET: process.env.RECAPTCHA_SECRET,
    RECAPTCHA_PUBLIC: process.env.RECAPTCHA_PUBLIC,
    EMAIL_RECEIVER: process.env.EMAIL_RECEIVER,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_SECURE: process.env.SMTP_SECURE,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_FROM: process.env.SMTP_FROM,
  },
};

export default nextConfig;
