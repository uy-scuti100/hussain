import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/(global-components)/header";
import ScrollToTop from "@/components/(global-components)/scroll-to-top";
import Footer from "@/components/(global-components)/footer";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

// export const metadata: Metadata = {
// 	title: "Hussain Yusuf | UY_SCUTI",
// 	description: "A personal website of Hussain Yusuf",
// };

const icons = [
	{ rel: "icon", url: "/favicon-32x32.png" },
	{ rel: "icon", url: "/favicon-16x16.png" },
	{ rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
];

const manifest = "/manifest.json";
export const metadata: Metadata = {
	title: "Hussain Yusuf | UY_SCUTI",
	description:
		"Full-stack web developer and web designer, committed to creating scalable web apps and websites that are easy to use with a beautiful user experience and convert users into loyal customers.",
	openGraph: {
		type: "website",
		url: "https://hussainyusuf.com",
		title: "Hussain Yusuf | UY_SCUTI",
		description:
			"Full-stack web developer and web designer, committed to creating scalable web apps and websites that are easy to use with a beautiful user experience and convert users into loyal customers.",
		siteName: "Hussain Yusuf | UY_SCUTI",
		images: [
			{
				url: "https://cdn.sanity.io/images/8kuztcv7/production/679c265989451b1da723898a32232061edccd452-1440x1800.webp",
			},
			{
				url: "https://lh3.googleusercontent.com/a/ACg8ocJAQuAkSRqYZAfgmWAmERfRhymd7s156NQHJ1rSJvqxP6nFNg=s192-c-rg-br100",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@hussain_joe",
		creator: "@hussain_joe",
		title: "Hussain Yusuf | UY_SCUTI",
		description:
			"Osiris Digital Agency empowers brands to thrive in the digital landscape. We craft exceptional design solutions and data-driven strategies that elevate your brand presence, drive conversions, and achieve your marketing goals.",
		images:
			"https://cdn.sanity.io/images/8kuztcv7/production/679c265989451b1da723898a32232061edccd452-1440x1800.webp",
	},
	robots: "index, follow",
	icons: icons,
	manifest: manifest,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				{/* <Header /> */}
				{children}
				<ScrollToTop />
				<Footer />
			</body>
		</html>
	);
	// [#18181B]
}
// [38.875rem]
