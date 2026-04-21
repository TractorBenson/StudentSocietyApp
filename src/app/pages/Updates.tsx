import { Link } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Calendar, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import updateImage1 from "../../imports/update_1.jpg";
import updateImage2 from "../../imports/update_2.jpg";
import updateImage3 from "../../imports/update_3.jpg";
import updateImage4 from "../../imports/update_4.jpg";

export function Updates() {
  const posts = [
    {
      id: 1,
      title: "Calligraphy Workshop",
      coverImage: updateImage1,
      date: "April 25, 2026 16:00",
      summary: "Learn the ancient art of Chinese calligraphy from master practitioners in a hands-on workshop designed for all experience levels. Participants will explore brush control, ink preparation, basic stroke forms, and the cultural meaning behind selected characters while creating their own finished piece to take home.",
    },
    {
      id: 2,
      title: "Explore Chinese Tea Culture",
      coverImage: updateImage2,
      date: "May 10, 2026 12:00",
      summary: "Discover the elegance and tradition of Chinese tea culture through a guided afternoon session. We will introduce major tea varieties, brewing methods, tea etiquette, and the role of tea in hospitality, reflection, and everyday social life, with time for tasting and discussion.",
    },
    {
      id: 3,
      title: "Traditional Chinese Music Performance",
      coverImage: updateImage3,
      date: "May 24, 2026 14:00",
      summary: "Experience the enchanting sounds of guzheng, pipa, and erhu in a live concert celebrating traditional Chinese music. The performance will include short introductions to each instrument, selected classical pieces, and stories about how music has shaped festivals, poetry, and cultural memory.",
    },
    {
      id: 4,
      title: "Chinese Painting Workshop",
      coverImage: updateImage4,
      date: "May 31, 2026 15:00",
      summary: "Master the techniques of traditional ink wash painting with experienced artists in a relaxed creative workshop. The session will cover brush movement, composition, balance, and expressive use of ink, giving participants a chance to practice classic motifs and develop their own final artwork.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-16 px-4" style={{ backgroundColor: "#D62828" }}>
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl mb-4">Society Updates</h1>
          <p className="text-xl">
            Stay informed about our latest events, workshops, and cultural activities
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-[#FCF7F8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Blog Posts - Left/Main Area */}
            <div className="lg:col-span-2 space-y-8">
              {posts.map((post) => (
                <Card key={post.id} className="border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-1 h-64 md:h-auto">
                      <ImageWithFallback
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <CardContent className="pt-6 pb-6 h-full flex flex-col">
                        <div className="flex items-center gap-2 mb-3 text-sm" style={{ color: "#F77F00" }}>
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <h2 className="text-2xl mb-4" style={{ color: "#333333" }}>
                          {post.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                          {post.summary}
                        </p>
                        <Button
                          variant="outline"
                          className="self-start gap-2"
                          style={{ borderColor: "#D62828", color: "#D62828" }}
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Sidebar - Right */}
            <div className="space-y-8">
              {/* Newsletter Signup */}
              <Card className="border-2" style={{ borderColor: "#D62828" }}>
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl mb-3" style={{ color: "#D62828" }}>
                    Stay Updated
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Subscribe to our newsletter for the latest updates on events and cultural insights.
                  </p>
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="w-full"
                    />
                    <Button
                      className="w-full text-white"
                      style={{ backgroundColor: "#D62828" }}
                    >
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="border-gray-200">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl mb-4" style={{ color: "#D62828" }}>
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    <Link
                      to="/festivals"
                      className="block text-gray-700 hover:text-[#D62828] transition-colors"
                    >
                      → Festivals
                    </Link>
                    <Link
                      to="/heritage"
                      className="block text-gray-700 hover:text-[#D62828] transition-colors"
                    >
                      → Heritage
                    </Link>
                    <Link
                      to="/food"
                      className="block text-gray-700 hover:text-[#D62828] transition-colors"
                    >
                      → Food Culture
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
