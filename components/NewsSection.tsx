import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

const news = [
  {
    title: "New Batch for UPSC Preparation Starting Soon",
    description: "Join our comprehensive UPSC preparation program with experienced faculty and updated curriculum.",
    date: "2024-01-15",
    category: "Admissions",
    image: "/Upsc.png?height=100&width=100",
  },
  {
    title: "Excellent Results in CBSE Board Exams 2024",
    description: "Our students achieved outstanding results with 95% pass rate and many scoring above 90%.",
    date: "2024-01-10",
    category: "Results",
    image: "/resultcbse.png?height=200&width=300",
  },
  {
    title: "Free Workshop on English Communication Skills",
    description: "Join our free workshop to improve your English speaking and writing skills.",
    date: "2024-01-08",
    category: "Events",
    image: "/freeworkshop.png?height=200&width=300",
  },
  {
    title: "New Online Classes Available",
    description: "We now offer online classes for all our courses with interactive sessions and recorded lectures.",
    date: "2024-01-05",
    category: "Announcements",
    image: "/newonline.png?height=200&width=300",
  },
]

export default function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="news" className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, and events at TopLearnerEdu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img
                  src={item.image || "logo.png"}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600">{item.category}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold hover:text-blue-600 transition-colors">{item.title}</CardTitle>
                <CardDescription className="text-gray-600">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />2 min read
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
