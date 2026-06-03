import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Notion Grade Book Calculator",
  description: "Turn Notion into a gradebook with calculations. Weighted averages, grade formulas, and student progress tracking for teachers."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ed92b38b-bcc3-43ec-a6a9-5312a7e4d330"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
