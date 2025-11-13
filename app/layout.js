import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata = {
  title: "Digroz – Empowering Digital Growth",
  description: "Professional web, app, and marketing solutions by Digroz.",
  icons: {
    icon: "/favicon.ico", // path inside /public folder
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", // iOS support
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
