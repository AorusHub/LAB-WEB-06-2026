import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Pustaka Senja | Ruang Baca",
    description: "Website Pustaka Senja",
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <body className="min-h-screen flex flex-col bg-awan text-tinta font-isi">
                <Navbar />
                    <main className="mx-auto w-full max-w-5xl flex-grow px-6 py-10">{children}</main>
                <Footer />
            </body>
        </html>
    );
}