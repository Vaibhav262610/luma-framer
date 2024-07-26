import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <title>Luma - Membershp Template for Framer</title>
        {/* <link rel="stylesheet" href="bower_components/aos/dist/aos.css" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
