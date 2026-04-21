import { useParams, Link } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar, Share2, Facebook, Twitter, Link as LinkIcon } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import festivalImage1 from "../../imports/festival_1.jpg";
import festivalImage2 from "../../imports/festival_2.jpg";
import festivalImage3 from "../../imports/festival_3.jpg";
import festivalImage4 from "../../imports/festival_4.jpg";
import festivalImage5 from "../../imports/festival_5.jpg";
import festivalImage6 from "../../imports/festival_6.jpg";
import heritageImage1 from "../../imports/heritage_1.jpg";
import heritageImage2 from "../../imports/heritage_2.jpg";
import heritageImage3 from "../../imports/heritage_3.jpg";
import heritageImage4 from "../../imports/heritage_4.jpg";
import heritageImage5 from "../../imports/heritage_5.jpg";
import heritageImage6 from "../../imports/heritage_6.jpg";

export function Detail() {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState("origins");

  const contentData: Record<string, any> = {
    "spring-festival": {
      title: "Spring Festival (Chinese New Year)",
      date: "Lunar New Year (January-February)",
      image: festivalImage1,
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
      image: festivalImage2,
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
    "qingming-festival": {
      title: "Qingming Festival",
      date: "Early April",
      image: festivalImage3,
      sections: {
        origins: {
          title: "Origins",
          content: "Qingming Festival, also known as Tomb-Sweeping Day, developed from ancient spring rituals connected with remembrance, renewal, and respect for ancestors. It became a time for families to visit burial sites, clean tombs, and honor those who came before them while also welcoming the arrival of spring.",
        },
        customs: {
          title: "Customs & Traditions",
          content: "Families commonly sweep tombs, offer flowers or food, burn incense, and spend time outdoors. The festival balances solemn remembrance with seasonal appreciation, so outings, kite flying, and walks through fresh spring landscapes are also part of the tradition.",
        },
        food: {
          title: "Festival Foods",
          content: "Many regions prepare qingtuan, green glutinous rice balls colored with mugwort or other spring herbs. These foods connect the festival to seasonal ingredients and represent freshness, continuity, and family memory.",
        },
        activities: {
          title: "Related Activities",
          content: "Modern Qingming activities often include family storytelling, cemetery visits, cultural lectures, and community discussions about ancestry. For student communities, it can also be a meaningful time to explore family history and cultural identity.",
        },
      },
    },
    "dragon-boat": {
      title: "Dragon Boat Festival",
      date: "5th day of the 5th lunar month",
      image: festivalImage4,
      sections: {
        origins: {
          title: "Origins",
          content: "The Dragon Boat Festival is closely associated with Qu Yuan, a patriotic poet and minister from ancient China. According to tradition, local people raced boats to search for him and threw rice into the river, customs that later evolved into dragon boat racing and eating zongzi.",
        },
        customs: {
          title: "Customs & Traditions",
          content: "The festival is best known for dragon boat races, where teams paddle long decorated boats to the rhythm of drums. People also hang herbs such as mugwort and calamus, wear scented sachets, and participate in customs believed to protect health during summer.",
        },
        food: {
          title: "Festival Foods",
          content: "Zongzi, sticky rice dumplings wrapped in bamboo leaves, are the signature food. Fillings vary by region, from red bean and dates to pork belly, salted egg yolk, and mushrooms, showing the diversity of Chinese regional cuisine.",
        },
        activities: {
          title: "Related Activities",
          content: "Communities celebrate with boat races, cultural performances, zongzi-making workshops, and storytelling sessions about Qu Yuan. The festival is especially useful for exploring poetry, teamwork, and local food traditions together.",
        },
      },
    },
    "mid-autumn": {
      title: "Mid-Autumn Festival",
      date: "15th day of the 8th lunar month",
      image: festivalImage5,
      sections: {
        origins: {
          title: "Origins",
          content: "Mid-Autumn Festival began as a harvest celebration centered on the full moon. Over time, legends such as Chang'e flying to the moon and Hou Yi shooting down the suns became part of the festival's cultural imagination.",
        },
        customs: {
          title: "Customs & Traditions",
          content: "Families gather to admire the full moon, share mooncakes, light lanterns, and express wishes for reunion. The round moon symbolizes completeness, making the festival one of the most important occasions for family connection.",
        },
        food: {
          title: "Festival Foods",
          content: "Mooncakes are the most iconic food, with fillings such as lotus seed paste, red bean, mixed nuts, and salted egg yolk. Other seasonal foods, including pomelo and taro, may also appear in regional celebrations.",
        },
        activities: {
          title: "Related Activities",
          content: "Common activities include lantern walks, poetry reading, mooncake tasting, and cultural games. Student groups often use the festival as a warm social event for sharing stories, food, and memories of home.",
        },
      },
    },
    "double-ninth": {
      title: "Double Ninth Festival",
      date: "9th day of the 9th lunar month",
      image: festivalImage6,
      sections: {
        origins: {
          title: "Origins",
          content: "Double Ninth Festival takes place when both the month and day are nine, a number traditionally associated with yang energy and longevity. The festival has long been connected with health, protection, and respect for older generations.",
        },
        customs: {
          title: "Customs & Traditions",
          content: "People climb mountains, admire chrysanthemums, drink chrysanthemum wine, and spend time outdoors. In modern China, the festival is also linked with honoring elders and promoting intergenerational care.",
        },
        food: {
          title: "Festival Foods",
          content: "Chongyang cake is a traditional festival food, often layered and decorated to suggest rising higher. Chrysanthemum tea and other seasonal foods also reflect autumn's colors and flavors.",
        },
        activities: {
          title: "Related Activities",
          content: "The festival can be celebrated with hikes, tea gatherings, elder-care volunteer events, and conversations about longevity. It offers a thoughtful way to connect seasonal traditions with community service.",
        },
      },
    },
    "forbidden-city": {
      title: "The Forbidden City",
      date: "Built 1406-1420",
      image: heritageImage1,
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
    calligraphy: {
      title: "Chinese Calligraphy",
      date: "Practiced for over 2,000 years",
      image: heritageImage2,
      sections: {
        origins: {
          title: "Historical Background",
          content: "Chinese calligraphy grew from early writing systems carved on oracle bones and cast into bronze vessels. As scripts developed, writing became more than communication; it became a disciplined art form expressing rhythm, personality, and cultural refinement.",
        },
        customs: {
          title: "Tools & Practice",
          content: "The traditional tools are brush, ink, paper, and inkstone, often called the Four Treasures of the Study. Practitioners train through repeated strokes, balance, spacing, and breath-like movement, gradually building control and expression.",
        },
        food: {
          title: "Cultural Meaning",
          content: "Calligraphy is connected with education, self-cultivation, poetry, and moral character. A single written character can reveal energy, restraint, confidence, and the artist's inner state.",
        },
        activities: {
          title: "Learning Today",
          content: "Today, calligraphy appears in workshops, exhibitions, festival couplets, digital design, and personal practice. It remains one of the most accessible ways to experience Chinese visual culture directly.",
        },
      },
    },
    "tea-ceremony": {
      title: "Tea Ceremony Tradition",
      date: "A living tradition of daily culture",
      image: heritageImage3,
      sections: {
        origins: {
          title: "Historical Background",
          content: "Tea has been part of Chinese life for centuries, moving from medicinal use to daily drinking, artistic appreciation, and social ritual. Different dynasties shaped tea preparation, from powdered tea to loose-leaf brewing.",
        },
        customs: {
          title: "Ritual & Etiquette",
          content: "Tea preparation values attention, patience, and respect. The choice of leaves, water temperature, teaware, pouring rhythm, and shared tasting all contribute to an atmosphere of calm hospitality.",
        },
        food: {
          title: "Cultural Meaning",
          content: "Tea culture reflects harmony between people, nature, and time. It is used to welcome guests, mark important conversations, and create quiet moments for reflection in everyday life.",
        },
        activities: {
          title: "Experiencing Tea Culture",
          content: "Tea tastings, teaware demonstrations, and guided brewing sessions help participants compare green, oolong, black, white, and pu'er teas while learning how geography and craft shape flavor.",
        },
      },
    },
    opera: {
      title: "Chinese Opera",
      date: "Traditional performing art",
      image: heritageImage4,
      sections: {
        origins: {
          title: "Historical Background",
          content: "Chinese opera developed from music, dance, storytelling, martial arts, and regional performance traditions. Forms such as Peking opera became highly refined, combining symbolic movement with dramatic singing and elaborate staging.",
        },
        customs: {
          title: "Performance Style",
          content: "Opera performers use stylized gestures, vocal techniques, facial makeup, costumes, and choreography to communicate character and emotion. Colors and patterns in face painting often signal loyalty, courage, cunning, or dignity.",
        },
        food: {
          title: "Cultural Meaning",
          content: "Chinese opera preserves legends, moral stories, historical episodes, and regional languages. It offers audiences a way to experience literature, music, and visual symbolism in one performance.",
        },
        activities: {
          title: "Experiencing Opera Today",
          content: "Modern audiences encounter opera through theater performances, campus demonstrations, costume workshops, film clips, and makeup sessions that explain how each visual element supports the story.",
        },
      },
    },
    "great-wall": {
      title: "The Great Wall",
      date: "Built and rebuilt across many dynasties",
      image: heritageImage5,
      sections: {
        origins: {
          title: "Historical Background",
          content: "The Great Wall refers to a network of walls, watchtowers, and fortifications constructed and rebuilt across centuries. It is most closely associated with frontier defense, communication, and the organization of imperial territory.",
        },
        customs: {
          title: "Architecture & Function",
          content: "The wall used local materials such as tamped earth, stone, and brick depending on region and period. Watchtowers, passes, and signal stations allowed soldiers to monitor movement and send messages across long distances.",
        },
        food: {
          title: "Cultural Meaning",
          content: "Today the Great Wall symbolizes endurance, collective effort, and the scale of Chinese historical imagination. It is both a military structure and a cultural landmark recognized around the world.",
        },
        activities: {
          title: "Visiting Today",
          content: "Visitors can hike restored sections, study construction techniques, and compare different wall landscapes. Educational programs often use the Great Wall to discuss engineering, history, and heritage preservation.",
        },
      },
    },
    "paper-cutting": {
      title: "Chinese Paper Cutting",
      date: "Traditional folk art",
      image: heritageImage6,
      sections: {
        origins: {
          title: "Historical Background",
          content: "Chinese paper cutting became widespread after paper was invented and made more affordable. It developed as a folk art used in homes, festivals, weddings, and seasonal celebrations.",
        },
        customs: {
          title: "Patterns & Techniques",
          content: "Artists cut folded or flat paper into symmetrical designs, animals, flowers, zodiac symbols, and auspicious characters. Red paper is especially common because it represents joy and good fortune.",
        },
        food: {
          title: "Cultural Meaning",
          content: "Paper cutting turns everyday materials into symbols of blessing, beauty, and family celebration. Designs placed on windows and doors often express wishes for happiness, prosperity, and protection.",
        },
        activities: {
          title: "Learning Today",
          content: "Workshops often begin with simple folded patterns before moving to more detailed freehand designs. It is a practical, hands-on way for students to understand symbolism and folk creativity.",
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
