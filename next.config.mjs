/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    RECAPTCHA_SECRET: process.env.RECAPTCHA_SECRET,
    RECAPTCHA_PUBLIC: process.env.RECAPTCHA_PUBLIC,
    EMAIL_RECEIVER: process.env.EMAIL_RECEIVER,
    POSTMARK_API_KEY: process.env.POSTMARK_API_KEY,
  },
};

export default nextConfig;
