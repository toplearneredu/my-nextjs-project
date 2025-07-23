"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Clock, Languages } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Class 1 to 12 (CBSE, ICSE, JAC Boards)",
    description: "Comprehensive education for all school levels",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-blue-500 to-cyan-500",
    details: {
      fees: [
        { class: "Class 1 to 5", fee: "₹1000" },
        { class: "Class 6 to 8", fee: "₹1500" },
        { class: "Class 9 to 10", fee: "₹2000" },
        { class: "Class 11 to 12", fee: "₹2500" },
      ],
      languages: "English & Hindi",
      syllabus: "As per current curriculum",
      duration: "Full Academic Year",
    },
  },
  {
    id: 2,
    title: "English Courses",
    description: "Specialized English language and literature programs",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-green-500 to-teal-500",
    details: {
      fees: [
        { class: "B.A English Hons.", fee: "₹5000" },
        { class: "M.A English", fee: "₹7000" },
        { class: "T.G.T English Exam", fee: "₹15000" },
        { class: "P.G.T English Exam", fee: "₹20000" },
      ],
      languages: "English",
      syllabus: "University & Exam Board Curriculum",
      duration: "Varies by Course",
    },
  },
  {
    id: 3,
    title: "Teacher Eligibility Courses",
    description: "Prepare for teaching eligibility examinations",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-purple-500 to-pink-500",
    details: {
      fees: [
        { class: "C.T.E.T", fee: "₹25000" },
        { class: "J.T.E.T", fee: "₹20000" },
        { class: "C.C.A.T", fee: "₹20000" },
      ],
      languages: "English",
      syllabus: "As per Exam Board Guidelines",
      duration: "6-12 Months",
    },
  },
  {
    id: 4,
    title: "Competitive Exam Courses",
    description: "Comprehensive preparation for competitive examinations",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-orange-500 to-red-500",
    details: {
      fees: [
        { class: "B.H.U/DU Law Entrance", fee: "₹20000" },
        { class: "J.P.S.C", fee: "₹30000" },
        { class: "U.P.S.C", fee: "₹35000" },
        { class: "A.O.R", fee: "₹40000" },
      ],
      languages: "English",
      syllabus: "Comprehensive Exam Preparation",
      duration: "12-18 Months",
    },
  },
]

export default function CoursesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="courses" className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our wide range of courses designed to help you achieve your educational goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-r ${course.color} rounded-t-lg flex items-center justify-center`}>
                <BookOpen className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                <CardDescription className="text-gray-600">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">View Details & Fees</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">{course.title}</DialogTitle>
                      <DialogDescription>{course.description}</DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6">
                      {/* Fee Structure */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <Users className="w-5 h-5 mr-2" />
                          Fee Structure
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course.details.fees.map((fee, index) => (
                            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">{fee.class}</span>
                              <Badge variant="secondary" className="text-lg font-bold">
                                {fee.fee}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Course Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <Languages className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                          <div className="font-semibold">Languages</div>
                          <div className="text-sm text-gray-600">{course.details.languages}</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <BookOpen className="w-8 h-8 mx-auto mb-2 text-green-600" />
                          <div className="font-semibold">Syllabus</div>
                          <div className="text-sm text-gray-600">{course.details.syllabus}</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <Clock className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                          <div className="font-semibold">Duration</div>
                          <div className="text-sm text-gray-600">{course.details.duration}</div>
                        </div>
                      </div>

                      <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                        Enroll Now - Contact Us
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
