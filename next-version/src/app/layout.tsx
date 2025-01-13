export const metadata = {
  title: '온라인피아노',
  description: '온라인피아노',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
