import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import Script from "next/script" // ✅ Add this

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TopLearnerEdu - Best Coaching Institute in Ranchi",
  description:
    "TopLearnerEdu offers quality education for Class 1-12, English courses, Teacher Eligibility courses, and Competitive exam preparation in Ranchi, Jharkhand.",
  keywords: "coaching institute, education, Ranchi, CBSE, ICSE, JAC, English courses, competitive exams",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GW5XRDRJJT"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GW5XRDRJJT');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
