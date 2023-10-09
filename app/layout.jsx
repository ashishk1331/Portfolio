import "./globals.css";
import { Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";

const font = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "700"],
});

export async function generateMetadata({ params }) {
    let baseURL = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT || 3000}`;

    return {
        title: "Ashish Khare",
        description:
            "Hello everyone! I’m Ashish Khare, a indie web developer and designer based in India.",
        metadataBase: baseURL,
        openGraph: {
            images: ["/api/og"],
        },
        twitter: {
            card: "summary_large_image",
            title: "AshishK has settled.",
            description:
                "Hello everyone! I’m Ashish Khare, a indie web developer and designer based in India.",
            siteId: "1467726470533754880",
            creator: "@ashishk1331",
            images: ["/api/og"],
        },
    };
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={twMerge(
                    "container max-w-7xl prose prose-invert mx-auto marker:text-primary p-4 px-8",
                    font.className,
                )}
            >
                {children}
            </body>
        </html>
    );
}
