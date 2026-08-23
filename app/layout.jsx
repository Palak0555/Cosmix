import "./globals.css";

export const metadata = {
  title: "Cosmix — Website, App & Marketing for Growing Businesses",
  description:
    "For The Visionaries. Cosmix builds the website, app, and marketing engine that turns your reputation into a steady stream of new customers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
