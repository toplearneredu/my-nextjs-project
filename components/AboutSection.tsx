import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About TopLearnerEdu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded by Rakesh Kumar, TopLearnerEdu is committed to providing quality education and shaping the future of
            students in Ranchi, Jharkhand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-4">
              TopLearnerEdu was established with a vision to provide accessible, quality education to students from all
              backgrounds. Under the leadership of our founder Rakesh Kumar, we have grown to become one of the most
              trusted coaching institutes in Ranchi.
            </p>
            <p className="text-gray-600 mb-4">
              Located in the heart of Hinoo, Ranchi, we offer comprehensive courses ranging from school-level education
              to competitive exam preparation, ensuring every student gets the guidance they need to succeed.
            </p>
            <p className="text-gray-600">
              Our experienced faculty and modern teaching methods have helped hundreds of students achieve their
              academic goals and build successful careers.
            </p>
          </div>
          <div className="relative">
            <img
              src="/ourstory.png?height=400&width=500"
              alt="TopLearnerEdu Campus"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Target className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600">To provide quality education and empower students to achieve their dreams</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Eye className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-600">To be the leading educational institute in Jharkhand</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Award className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">Committed to maintaining the highest standards of education</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600">Building a supportive learning community for all students</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
