import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    course: "Class 12 CBSE",
    rating: 5,
    text: "TopLearnerEdu helped me score 95% in my board exams. The teachers are excellent and very supportive.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Rahul Kumar",
    course: "JPSC Preparation",
    rating: 5,
    text: "I cleared JPSC in my first attempt thanks to the comprehensive preparation at TopLearnerEdu.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Anjali Singh",
    course: "English Honours",
    rating: 5,
    text: "The English courses here are top-notch. I gained confidence in both speaking and writing.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Vikash Gupta",
    course: "CTET Preparation",
    rating: 5,
    text: "Excellent coaching for CTET. The study material and mock tests were very helpful.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our successful students who have achieved their goals with TopLearnerEdu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Quote className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.course}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
