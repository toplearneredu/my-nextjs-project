import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Award, BookOpen } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-yellow-300">TopLearnerEdu</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering students with quality education from Class 1-12, English courses, Teacher Eligibility programs,
            and Competitive exam preparation in Ranchi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Link href="#courses">Explore Courses</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm">Students Enrolled</div>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm">Expert Teachers</div>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm">Courses Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
