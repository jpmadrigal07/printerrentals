/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RECAPTCHA_SECRET: process.env.RECAPTCHA_SECRET,
    RECAPTCHA_PUBLIC: process.env.RECAPTCHA_PUBLIC,
  },
};

export default nextConfig;
