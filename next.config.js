/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "hackznokogiritosaken1116.blob.core.windows.net",
            "lh3.googleusercontent.com",
        ],
    },
};

module.exports = nextConfig;
