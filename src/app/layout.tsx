import Footer from "./components/Footer"
import Navebar from "./components/Navebar"
import Notification from "./components/Notification"
import './globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"><body>
      <Notification />
      <Navebar />
      {children}
      <Footer />
    </body>
    </html>
  )
}
