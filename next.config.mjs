import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx"],
	experimental: {
		mdxRs: true,
	},
	images: {
		remotePatterns: [
		  {
			protocol: 'https',
			hostname: 'avatars.githubusercontent.com',
			port: '',
		  },
		],
	  },
};

export default withContentlayer(nextConfig);
