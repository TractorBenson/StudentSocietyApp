import { Link, useLocation } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

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

type Category = "festivals" | "heritage";

interface Item {
  id: string;
  category: Category;
  title: string;
  image: string;
  intro: string;
}

export function FestivalsHeritage() {
  const location = useLocation();
  const activeFilter: Category = location.pathname.includes("heritage") ? "heritage" : "festivals";

  const items: Item[] = [
    {
      id: "spring-festival",
      category: "festivals",
      title: "Spring Festival (Chinese New Year)",
      image: festivalImage1,
      intro: "The most important traditional festival marking the beginning of the lunar new year with family reunions and celebrations.",
    },
    {
      id: "lantern-festival",
      category: "festivals",
      title: "Lantern Festival",
      image: festivalImage2,
      intro: "Celebrated on the 15th day of the first lunar month, featuring beautiful lantern displays and riddle-solving traditions.",
    },
    {
      id: "qingming-festival",
      category: "festivals",
      title: "Qingming Festival",
      image: festivalImage3,
      intro: "A reflective spring festival for honoring ancestors, sweeping tombs, enjoying nature, and remembering family heritage.",
    },
    {
      id: "dragon-boat",
      category: "festivals",
      title: "Dragon Boat Festival",
      image: festivalImage4,
      intro: "Ancient festival commemorating poet Qu Yuan, featuring exciting dragon boat races and traditional zongzi rice dumplings.",
    },
    {
      id: "mid-autumn",
      category: "festivals",
      title: "Mid-Autumn Festival",
      image: festivalImage5,
      intro: "Harvest festival celebrating the full moon with mooncakes, family gatherings, and moon appreciation traditions.",
    },
    {
      id: "double-ninth",
      category: "festivals",
      title: "Double Ninth Festival",
      image: festivalImage6,
      intro: "Celebrated on the ninth day of the ninth lunar month with mountain climbing, chrysanthemum appreciation, and respect for elders.",
    },
    {
      id: "tea-ceremony",
      category: "heritage",
      title: "Tea Ceremony Tradition",
      image: heritageImage3,
      intro: "Refined practice of preparing and serving tea, embodying harmony, respect, and tranquility in Chinese culture.",
    },
    {
      id: "forbidden-city",
      category: "heritage",
      title: "The Forbidden City",
      image: heritageImage1,
      intro: "Imperial palace complex in Beijing that served as home to Chinese emperors for nearly 500 years.",
    },
    {
      id: "calligraphy",
      category: "heritage",
      title: "Chinese Calligraphy",
      image: heritageImage2,
      intro: "Ancient art form combining writing and visual beauty, considered one of the highest forms of Chinese art.",
    },
    {
      id: "opera",
      category: "heritage",
      title: "Chinese Opera",
      image: heritageImage4,
      intro: "Traditional theatrical art form featuring elaborate costumes, makeup, and stylized performances combining music, dance, and acrobatics.",
    },
    {
      id: "great-wall",
      category: "heritage",
      title: "The Great Wall",
      image: heritageImage5,
      intro: "One of China's most recognizable landmarks, reflecting centuries of engineering, defense strategy, and cultural memory.",
    },
    {
      id: "paper-cutting",
      category: "heritage",
      title: "Chinese Paper Cutting",
      image: heritageImage6,
      intro: "A delicate folk art using red paper and symbolic patterns to express blessings, celebration, and everyday creativity.",
    },
  ];

  const filteredItems = items.filter((item) => item.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-16 px-4" style={{ backgroundColor: '#D62828' }}>
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl mb-4">
            {activeFilter === "festivals" ? "Festivals" : "Heritage"}
          </h1>
          <p className="text-xl">
            {activeFilter === "festivals" 
              ? "Explore the vibrant celebrations that mark Chinese culture throughout the year"
              : "Discover the timeless traditions and treasures of Chinese civilization"}
          </p>
        </div>
      </section>

      {/* Card Grid */}
      <section className="py-16 px-4 bg-[#FCF7F8] flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Link key={item.id} to={`/detail/${item.id}`}>
                <Card className="border-gray-200 hover:shadow-xl transition-all cursor-pointer h-full overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardContent className="pt-6 pb-6">
                    <h3 className="text-xl mb-3" style={{ color: "#333333" }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.intro}</p>
                    <div className="mt-4">
                      <span className="text-sm hover:underline" style={{ color: "#D62828" }}>
                        Read More →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
