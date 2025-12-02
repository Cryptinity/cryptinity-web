import './globals.css'
export const metadata = {
  title: 'Cryptinity',
  description: 'Cryptinity Web4 Superapp'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">{children}</div>
      </body>
    </html>
  )
}
