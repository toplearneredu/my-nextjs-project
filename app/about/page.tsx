import { Card, CardContent } from "@/components/ui/card"
import { User, Award, Target, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About TopLearnerEdu</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Dedicated to excellence in education and committed to shaping bright futures
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Founder</h2>
              <Card className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <User className="w-12 h-12 text-blue-600" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Rakesh Kumar</h3>
                      <p className="text-gray-600">Founder & Director</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    With over 15 years of experience in education, Rakesh Kumar founded TopLearnerEdu with a vision to
                    provide quality education to students from all backgrounds. His dedication to teaching and passion
                    for student success has made TopLearnerEdu one of the most trusted coaching institutes in Ranchi.
                  </p>
                  <p className="text-gray-700">
                    Under his leadership, the institute has helped thousands of students achieve their academic goals
                    and build successful careers in various fields.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <img
                src="/Founder.png?height=500&width=400"
                alt="Rakesh Kumar - Founder"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at TopLearnerEdu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">Striving for the highest standards in education and student outcomes</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Target className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Focus</h3>
                <p className="text-gray-600">Dedicated attention to each student's individual learning needs</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-600">Building a supportive learning environment for all students</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <User className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-600">Maintaining honesty and transparency in all our interactions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
