export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

// Metadata requerida para Next.js
export const metadata = {
  title: 'Mi Aplicación',
  description: 'Descripción de mi aplicación',
}; 