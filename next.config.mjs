// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["naszsklep-api.vercel.app", "media.graphassets.com"],
	},
	experimental: {
		serverActions: true,
	},
};

export default nextConfig;
