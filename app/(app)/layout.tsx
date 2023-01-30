import "../globals.css"
import Header from "./components/Header"
import Matches from "./components/user/match/Matches"
import Messages from "./components/Messages"
import TabLayout from "./components/TabLayout"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body className="flex">
        <div className="h-screen bg-white">
          {/* @ts-ignore */}
          <Header />
          <TabLayout
            matchesChildren={
              // @ts-ignore
              <Matches />
            }
            messagesChildren={<Messages />}
          />
        </div>
        <div className="w-full items-center justify-center bg-gray-100 border-l-gray-200 border-l-2">
          {children}
        </div>
      </body>
    </html>
  )
}
