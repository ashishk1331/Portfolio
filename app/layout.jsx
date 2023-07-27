import "./globals.css";
import { Inconsolata } from "next/font/google";
import Head from "next/head";
import { twMerge } from "tailwind-merge";

const font = Inconsolata({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
    title: "AshishK1331",
    description: "Hello from ashish khare.",
};

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
                    content="https://res.cloudinary.com/delxpwsul/image/upload/v1679996217/og_white_lrvpzc.png"
                />
            </Head>
            <body
                className={twMerge(
                    "prose prose-lg prose-neutral mx-auto marker:text-primary p-4 px-8",
                    font.className
                )}
            >
                {children}
            </body>
        </html>
    );
}
