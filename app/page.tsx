import Hero from "@/components/Hero"
import CoursesSection from "@/components/CoursesSection"
import AboutSection from "@/components/AboutSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import NewsSection from "@/components/NewsSection"
import YouTubeSection from "@/components/YouTubeSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <CoursesSection />
      <TestimonialsSection />
      <YouTubeSection />
      <NewsSection />
    </main>
  )
}
