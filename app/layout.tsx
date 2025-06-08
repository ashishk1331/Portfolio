import "./globals.css";
import { Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";

const font = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "700"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={twMerge(
                    "container max-w-xl mt-48 fancy-anchors mx-auto marker:text-primary p-4",
                    font.className,
                )}
            >
                {children}
            </body>
        </html>
    );
}
