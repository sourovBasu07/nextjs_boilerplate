import { Poppins } from "next/font/google";
import "@/app/globals.css";
import ContextProvider from "@/utils/ContextProvider";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Next JS App",
    description: "App boilerplate created using Next.js",
    icons: {
        icon: "next.svg",
    },
};

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <ContextProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </ContextProvider>
            </body>
        </html>
        // </SessionProvider>
    );
}