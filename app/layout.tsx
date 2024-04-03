import "../global.css"
import { Inter } from "next/font/google"
import LocalFont from "next/font/local"
import { Metadata } from "next"
import Particles from "./components/particles"

export const metadata: Metadata = {
    title: {
        default: "DevOps Pioneers",
        template: "%s | chronark.com",
    },
    description: "Co-founder of unkey.dev and founder of planetfall.io",
    openGraph: {
        title: "DevOps Pioneers",
        description: "DevOps Pioneers - Herald DevCorps",
        url: "https://chronark.com",
        siteName: "DevOps Pioneers",
        //
        locale: "en-US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        shortcut: "/favicon.png",
    },
}
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
})

const calSans = LocalFont({
    src: "../public/fonts/CalSans-SemiBold.ttf",
    variable: "--font-calsans",
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className={[inter.variable, calSans.variable].join(" ")}
        >
            <head>{/* <Analytics /> */}</head>
            <body
                className={`bg-black ${
                    process.env.NODE_ENV === "development"
                        ? "debug-screens"
                        : undefined
                }`}
            >
                <Particles
                    className="fixed inset-0 -z-10 animate-fade-in "
                    quantity={5}
                />
                <Particles
                    className="fixed inset-0 -z-10 animate-fade-in blur-2xl"
                    quantity={7}
                />
                <Particles
                    className="fixed inset-0 -z-10 animate-fade-in blur-sm"
                    quantity={4}
                />
                {children}
            </body>
        </html>
    )
}
