import { useParams, Link } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar, Share2, Facebook, Twitter, Link as LinkIcon } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export function Detail() {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState("origins");

  // Mock data - in a real app this would come from a database or API
  const contentData: Record<string, any> = {
    "spring-festival": {
      title: "Spring Festival (Chinese New Year)",
      date: "Lunar New Year (January-February)",
      image: "https://images.unsplash.com/photo-1707103620427-c64562d496f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbmV3JTIweWVhciUyMGdhbGElMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzMwNjk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      sections: {
        origins: {
          title: "Origins",
          content: "The Spring Festival, also known as Chinese New Year, has a history spanning over 4,000 years. According to legend, it originated from a mythical beast called Nian that would terrorize villages at the beginning of each new year. Villagers discovered that Nian feared the color red, loud noises, and bright lights, leading to the traditions of hanging red decorations, setting off firecrackers, and lighting lanterns that continue today.",
        },
        customs: {
          title: "Customs & Traditions",
          content: "The festival is marked by numerous customs including thorough house cleaning to sweep away bad luck, hanging red lanterns and couplets, giving red envelopes (hongbao) containing money to children and unmarried adults, and family reunion dinners on New Year's Eve. The celebrations last for 15 days, ending with the Lantern Festival. Each day has its own significance and associated traditions.",
        },
        food: {
          title: "Festival Foods",
          content: "Traditional foods play a central role in Spring Festival celebrations. Dumplings (jiaozi) symbolize wealth due to their resemblance to ancient gold ingots. Fish represents abundance and prosperity. Nian gao (sticky rice cake) signifies growth and progress. Spring rolls represent wealth, and tangyuan (sweet rice balls) symbolize family unity. Each dish carries auspicious meanings for the new year.",
        },
        activities: {
          title: "Related Activities",
          content: "Spring Festival celebrations include lion and dragon dances performed in streets and squares, temple fairs featuring traditional games and performances, visiting relatives and friends, watching CCTV's annual Spring Festival Gala, and participating in community events. Modern celebrations also include digital red envelopes and online reunion activities for those unable to return home.",
        },
      },
    },
    "lantern-festival": {
      title: "Lantern Festival",
      date: "15th day of Lunar New Year",
      image: "https://images.unsplash.com/photo-1716955575640-b988ab09a037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbGFudGVybiUyMGZlc3RpdmFsJTIwbmlnaHR8ZW58MXx8fHwxNzcyOTUyNzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      sections: {
        origins: {
          title: "Origins",
          content: "The Lantern Festival marks the end of Spring Festival celebrations and dates back over 2,000 years to the Han Dynasty. Emperor Ming of Han, a Buddhist, ordered lanterns to be lit in the palace and temples to honor Buddha. This practice gradually evolved into a grand festival celebrated by common people throughout China.",
        },
        customs: {
          title: "Customs & Traditions",
          content: "The festival is characterized by displaying and viewing elaborate lanterns of all shapes and sizes. Riddles are written on lanterns for people to solve, adding an intellectual dimension to the celebration. Families go out together to admire lantern displays in parks and streets. It's also traditional to eat tangyuan and watch folk performances including dragon dances and yangge dancing.",
        },
        food: {
          title: "Festival Foods",
          content: "Tangyuan, sweet glutinous rice balls filled with sesame, peanut, or red bean paste, are the signature food of the Lantern Festival. Their round shape symbolizes family unity and completeness. The act of eating tangyuan together represents family harmony and the hope for reunion in the coming year.",
        },
        activities: {
          title: "Related Activities",
          content: "Major cities host spectacular lantern exhibitions featuring traditional and modern designs. Activities include solving lantern riddles, releasing sky lanterns, watching lion and dragon dances, and participating in folk performances. Some regions also practice the tradition of walking on stilts or performing traditional opera under the lantern light.",
        },
      },
    },
    "forbidden-city": {
      title: "The Forbidden City",
      date: "Built 1406-1420",
      image: "https://images.unsplash.com/photo-1674637966612-6c05d18e7bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwdHJhZGl0aW9uYWwlMjBhcmNoaXRlY3R1cmUlMjB0ZW1wbGV8ZW58MXx8fHwxNzczMDE5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      sections: {
        origins: {
          title: "Historical Background",
          content: "The Forbidden City was constructed from 1406 to 1420 during the Ming Dynasty under Emperor Yongle. It served as the imperial palace and political center of China for nearly 500 years, housing 24 emperors from the Ming and Qing dynasties. The complex covers 180 acres and contains 980 buildings with over 8,700 rooms, making it the largest ancient palatial structure in the world.",
        },
        customs: {
          title: "Palace Life & Ceremonies",
          content: "Life in the Forbidden City was governed by strict rules and elaborate ceremonies. The emperor conducted state affairs in the Outer Court, while the Inner Court served as living quarters for the imperial family. Grand ceremonies included coronations, imperial weddings, and seasonal rituals. The palace was divided by strict hierarchies, with different areas accessible only to specific ranks.",
        },
        food: {
          title: "Imperial Cuisine",
          content: "The Forbidden City housed elaborate kitchens serving imperial cuisine of the highest order. Meals were prepared by hundreds of specialized chefs and could include over 100 dishes for a single meal. Imperial cuisine emphasized not only taste but also presentation, nutritional balance, and symbolic meanings. Many dishes had auspicious names and were served on exquisite porcelain.",
        },
        activities: {
          title: "Visiting Today",
          content: "Now known as the Palace Museum, the Forbidden City is one of the most visited museums in the world. Visitors can explore the vast complex, view priceless artifacts including paintings, ceramics, and imperial treasures. Special exhibitions showcase different aspects of imperial life. Virtual tours and augmented reality experiences help bring the palace's history to life for modern visitors.",
        },
      },
    },
  };

  const content = contentData[id || ""] || contentData["spring-festival"];
  const sections = ["origins", "customs", "food", "activities"];

  const relatedArticles = [
    { title: "Dragon Boat Festival", link: "/detail/dragon-boat" },
    { title: "Mid-Autumn Festival", link: "/detail/mid-autumn" },
    { title: "Chinese Calligraphy", link: "/detail/calligraphy" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#FCF7F8]">
      {/* Fixed Sidebar */}
      <aside className="lg:w-64 bg-white border-r border-gray-200 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto">
        <div className="p-6">
          <h3 className="mb-4" style={{ color: "#D62828" }}>
            Contents
          </h3>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  activeSection === section
                    ? "text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                style={
                  activeSection === section
                    ? { backgroundColor: "#D62828" }
                    : {}
                }
              >
                {content.sections[section]?.title || section}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
            <div className="flex items-center gap-2 mb-4 text-gray-600">
              <Calendar className="h-5 w-5" />
              <span>{content.date}</span>
            </div>
            <h1 className="text-4xl mb-6" style={{ color: "#333333" }}>
              {content.title}
            </h1>
            <div className="rounded-lg overflow-hidden mb-6">
              <ImageWithFallback
                src={content.image}
                alt={content.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <Card
                key={section}
                id={section}
                className="border-gray-200 scroll-mt-20"
              >
                <CardContent className="pt-8 pb-8">
                  <h2
                    className="text-2xl mb-4"
                    style={{ color: "#D62828" }}
                  >
                    {content.sections[section]?.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {content.sections[section]?.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Share Buttons */}
          <Card className="border-gray-200 mt-8">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h3 className="text-xl">Share this article</h3>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    style={{ borderColor: "#D62828", color: "#D62828" }}
                  >
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    style={{ borderColor: "#D62828", color: "#D62828" }}
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    style={{ borderColor: "#D62828", color: "#D62828" }}
                  >
                    <LinkIcon className="h-4 w-4" />
                    Copy Link
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <Card className="border-gray-200 mt-8">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl mb-6" style={{ color: "#D62828" }}>
                Related Articles
              </h3>
              <div className="space-y-3">
                {relatedArticles.map((article, index) => (
                  <Link
                    key={index}
                    to={article.link}
                    className="block p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <p className="text-gray-700 hover:text-[#D62828] transition-colors">
                      {article.title} →
                    </p>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
