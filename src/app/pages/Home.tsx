import { Link } from "react-router";
import { Calendar, Landmark, UtensilsCrossed, Bell, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import heroImage from "../../imports/8eff7865219065b9f930bd0e7ed49d21.jpeg";
import activity1 from "../../imports/369.jpeg";
import activity2 from "../../imports/370.jpeg";
import activity3 from "../../imports/372.jpeg";
import activity4 from "../../imports/371.jpeg";

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousActivitiesSlide, setPreviousActivitiesSlide] = useState(0);
  const [relatedArticlesSlide, setRelatedArticlesSlide] = useState(0);

  const quickLinks = [
    {
      icon: Calendar,
      title: "Festivals",
      description: "Explore traditional celebrations",
      path: "/festivals",
      color: "#D62828",
    },
    {
      icon: Landmark,
      title: "Heritage",
      description: "Discover cultural treasures",
      path: "/heritage",
      color: "#F77F00",
    },
    {
      icon: UtensilsCrossed,
      title: "Food",
      description: "Taste authentic cuisine",
      path: "/food",
      color: "#D62828",
    },
    {
      icon: Bell,
      title: "Updates",
      description: "Latest news & events",
      path: "/updates",
      color: "#F77F00",
    },
  ];

  const latestEvents = [
    {
      date: "April 25, 2026 16:00",
      title: "Calligraphy Workshop",
      description: "Learn the ancient art of Chinese calligraphy from master practitioners.",
    },
    {
      date: "May 10, 2026 12:00",
      title: "Explore Chinese Tea Culture",
      description: "Discover the elegance and tradition of Chinese tea culture.",
    },
    {
      date: "May 24, 2026 14:00",
      title: "Traditional Chinese Music Performance",
      description: "Experience the enchanting sounds of guzheng, pipa, and erhu in a live concert.",
    },
    {
      date: "May 31, 2026 15:00",
      title: "Chinese Painting Workshop",
      description: "Master the techniques of traditional ink wash painting with experienced artists.",
    },
  ];

  const previousActivities = [
    {
      image: activity1,
      title: "Chinese New Year Gala",
      date: "February 17, 2026",
    },
    {
      image: activity2,
      title: "Chinese New Year Gala",
      date: "February 17, 2026",
    },
    {
      image: activity3,
      title: "Chinese New Year Gala",
      date: "February 17, 2026",
    },
    {
      image: activity4,
      title: "Chinese New Year Gala",
      date: "February 17, 2026",
    },
  ];

  const relatedArticles = [
    {
      image: "https://images.unsplash.com/photo-1765188987896-dfc20b28b6ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwdHJhZGl0aW9uYWwlMjB0ZWElMjBjZXJlbW9ueSUyMGN1bHR1cmV8ZW58MXx8fHwxNzc2NzMzOTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "The Ancient Art of Chinese Tea Culture",
      excerpt: "Exploring the philosophy and traditions behind China's beloved tea ceremony.",
      link: "https://www.bbc.com/travel/article/20230815-chinas-ancient-tea-culture",
    },
    {
      image: "https://images.unsplash.com/photo-1578073273382-f847b29d2192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwcmVkJTIwZW52ZWxvcGUlMjB0cmFkaXRpb24lMjBsdW5hciUyMG5ldyUyMHllYXJ8ZW58MXx8fHwxNzc2NzMzOTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Red Envelopes: The Tradition of Hongbao",
      excerpt: "Understanding the cultural significance of red envelope giving during Lunar New Year.",
      link: "https://www.chinahighlights.com/travelguide/festivals/red-envelopes.htm",
    },
    {
      image: "https://images.unsplash.com/photo-1728513012046-710053a92049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjaGluZXNlJTIwZHJhZ29uJTIwYm9hdCUyMGZlc3RpdmFsfGVufDF8fHx8MTc3NjczMzkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Dragon Boat Festival: A 2000-Year Tradition",
      excerpt: "The history and customs of one of China's most celebrated traditional festivals.",
      link: "https://www.nationalgeographic.com/travel/article/dragon-boat-festival",
    },
    {
      image: "https://images.unsplash.com/photo-1640164096817-0d9544334087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwdHJhZGl0aW9uYWwlMjB3ZWRkaW5nJTIwY3VzdG9tc3xlbnwxfHx8fDE3NzY3MzM5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Traditional Chinese Wedding Customs Explained",
      excerpt: "From tea ceremonies to red wedding dresses, discover the rituals of Chinese weddings.",
      link: "https://www.brides.com/chinese-wedding-traditions-and-customs-1216",
    },
  ];

  const nextPreviousActivitiesSlide = () => {
    setPreviousActivitiesSlide((prev) => (prev + 1) % previousActivities.length);
  };

  const prevPreviousActivitiesSlide = () => {
    setPreviousActivitiesSlide((prev) => (prev - 1 + previousActivities.length) % previousActivities.length);
  };

  const nextRelatedArticlesSlide = () => {
    setRelatedArticlesSlide((prev) => (prev + 1) % relatedArticles.length);
  };

  const prevRelatedArticlesSlide = () => {
    setRelatedArticlesSlide((prev) => (prev - 1 + relatedArticles.length) % relatedArticles.length);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Chinese Cultural Hub"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl mb-2">
            Discover China
          </h1>
          <p className="text-5xl md:text-6xl">
            Connect with culture
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-[#FCF7F8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.path}>
                <Card className="border-gray-200 hover:shadow-lg transition-all cursor-pointer h-full">
                  <CardContent className="pt-8 pb-8 flex flex-col items-center text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${link.color}15` }}
                    >
                      <link.icon className="h-8 w-8" style={{ color: link.color }} />
                    </div>
                    <h3 className="text-xl mb-2" style={{ color: '#333333' }}>{link.title}</h3>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Previous Activities & Related Articles */}
            <div className="space-y-12">
              {/* Previous Activities Carousel */}
              <div>
                <h2 className="text-3xl mb-6" style={{ color: '#D62828' }}>Latest Activities</h2>
                <Card className="border-gray-200 overflow-hidden">
                  <div className="relative">
                    <img
                      src={previousActivities[previousActivitiesSlide].image}
                      alt={previousActivities[previousActivitiesSlide].title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-2xl mb-2">{previousActivities[previousActivitiesSlide].title}</h3>
                        <p className="text-sm">{previousActivities[previousActivitiesSlide].date}</p>
                      </div>
                    </div>
                    <button
                      onClick={prevPreviousActivitiesSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" style={{ color: '#D62828' }} />
                    </button>
                    <button
                      onClick={nextPreviousActivitiesSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" style={{ color: '#D62828' }} />
                    </button>
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex gap-2 justify-center">
                      {previousActivities.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setPreviousActivitiesSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === previousActivitiesSlide ? 'w-8' : ''
                          }`}
                          style={{ backgroundColor: index === previousActivitiesSlide ? '#D62828' : '#d1d5db' }}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Related Articles Carousel */}
              <div>
                <h2 className="text-3xl mb-6" style={{ color: '#D62828' }}>Related Articles</h2>
                <Card className="border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <ImageWithFallback
                      src={relatedArticles[relatedArticlesSlide].image}
                      alt={relatedArticles[relatedArticlesSlide].title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-2xl mb-2">{relatedArticles[relatedArticlesSlide].title}</h3>
                        <p>{relatedArticles[relatedArticlesSlide].excerpt}</p>
                      </div>
                    </div>
                    <button
                      onClick={prevRelatedArticlesSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition-colors z-10"
                    >
                      <ChevronLeft className="h-6 w-6" style={{ color: '#D62828' }} />
                    </button>
                    <button
                      onClick={nextRelatedArticlesSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition-colors z-10"
                    >
                      <ChevronRight className="h-6 w-6" style={{ color: '#D62828' }} />
                    </button>
                  </div>
                  <CardContent className="pt-4 pb-6">
                    <div className="flex gap-2 justify-center mb-4">
                      {relatedArticles.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setRelatedArticlesSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === relatedArticlesSlide ? 'w-8' : ''
                          }`}
                          style={{ backgroundColor: index === relatedArticlesSlide ? '#D62828' : '#d1d5db' }}
                        />
                      ))}
                    </div>
                    <a
                      href={relatedArticles[relatedArticlesSlide].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        className="w-full"
                        style={{ backgroundColor: '#D62828', color: 'white' }}
                      >
                        View Article
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right: Latest Events */}
            <div>
              <h2 className="text-3xl mb-6" style={{ color: '#D62828' }}>Upcoming Events & Announcements</h2>
              <div className="space-y-6">
                {latestEvents.map((event, index) => (
                  <Card key={index} className="border-l-4 hover:shadow-md transition-shadow" style={{ borderLeftColor: '#F77F00' }}>
                    <CardContent className="pt-6">
                      <p className="text-sm mb-2" style={{ color: '#F77F00' }}>{event.date}</p>
                      <h3 className="text-xl mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Society Slogan and Introduction */}
      <section className="py-20 px-4" style={{ backgroundColor: '#D62828' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl mb-6">
            Lighting Up Chinese Culture in the Digital World
          </h2>
          <p className="text-xl leading-relaxed mb-8">
            Chinese Cultural Hub is your gateway to exploring the rich tapestry of Chinese heritage, 
            traditions, and contemporary culture. From ancient festivals to modern celebrations, 
            we bring together stories, knowledge, and experiences that connect people with 
            5,000 years of cultural wisdom.
          </p>
          <Link to="/about">
            <Button size="lg" variant="outline" className="bg-white hover:bg-gray-100" style={{ color: '#D62828' }}>
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}