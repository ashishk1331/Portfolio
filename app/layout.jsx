import "./globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";
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
        metadataBase: baseURL,
        openGraph: {
            images: ["/api/og"],
        },
    };
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@ashishk1331" />
                <meta
                    property="og:url"
                    content="https://ashishk1331.vercel.app/"
                />
                <meta property="og:title" content="AshishK is mad!" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="Hello everyone! I’m Ashish Khare, a indie web developer and designer based in India."
                />
                <meta
                    property="og:image"
                    content="http://localhost:3000/api/og?author=Akshat%20Mishra&title=Productivity%20is%20the%20new%20world%20porn.&date=28%20Aug%202023"
                />
            </Head>
            <body
                className={twMerge(
                    "prose prose-invert mx-auto marker:text-primary p-4 px-8",
                    font.className,
                )}
            >
                {children}
            </body>
        </html>
    );
}
