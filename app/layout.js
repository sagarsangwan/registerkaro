import "./globals.css";

export const metadata = {
  title: "Home | RegisterKaro",
  description: "The Official RegisterKaro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
