import { Link } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import foodImage1 from "../../imports/food_1.jpg"
import foodImage2 from "../../imports/food_2.jpg"
import foodImage3 from "../../imports/food_3.jpg"
import foodImage4 from "../../imports/food_4.jpg"
import foodImage5 from "../../imports/food_5.jpg"
import foodImage6 from "../../imports/food_6.png"

export function Food() {
  const dishes = [
    {
      id: "dumplings",
      title: "Dumplings (Jiaozi)",
      image: foodImage1,
      description: "Crescent-shaped parcels filled with meat and vegetables, symbolizing wealth and prosperity.",
      region: "Northern China",
    },
    {
      id: "peking-duck",
      title: "Peking Duck",
      image: foodImage2,
      description: "Iconic Beijing dish featuring crispy skin duck served with thin pancakes, scallions, and sweet bean sauce.",
      region: "Beijing",
    },
    {
      id: "dim-sum",
      title: "Dim Sum",
      image: foodImage3,
      description: "Cantonese-style small plates including steamed buns, dumplings, and rice rolls, traditionally enjoyed with tea.",
      region: "Guangdong",
    },
    {
      id: "hot-pot",
      title: "Hot Pot (Huoguo)",
      image: foodImage4,
      description: "Interactive dining experience where diners cook ingredients in a communal pot of simmering broth.",
      region: "Sichuan",
    },
    {
      id: "mooncakes",
      title: "Mooncakes",
      image: foodImage5,
      description: "Round pastries filled with sweet or savory fillings, traditionally eaten during Mid-Autumn Festival.",
      region: "National",
    },
    {
      id: "noodles",
      title: "Hand-Pulled Noodles",
      image: foodImage6,
      description: "Fresh noodles stretched and pulled by hand, showcasing the skill and artistry of noodle masters.",
      region: "Lanzhou",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-16 px-4" style={{ backgroundColor: "#D62828" }}>
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl mb-4">Chinese Cuisine</h1>
          <p className="text-xl">
            Discover the rich flavors and traditions of authentic Chinese food culture
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chinese cuisine is one of the world's greatest culinary traditions, with a history spanning thousands of years. 
            Each region offers unique flavors, cooking techniques, and cultural significance. From the spicy heat of Sichuan 
            to the delicate dim sum of Guangdong, Chinese food reflects the diversity and richness of Chinese culture.
          </p>
        </div>
      </section>

      {/* Dishes Grid */}
      <section className="py-16 px-4 bg-[#FCF7F8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishes.map((dish) => (
              <Card
                key={dish.id}
                className="border-gray-200 hover:shadow-xl transition-all overflow-hidden group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm" style={{ backgroundColor: "#F77F00", color: "white" }}>
                    {dish.region}
                  </div>
                </div>
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl mb-3" style={{ color: "#333333" }}>
                    {dish.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {dish.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2" style={{ borderColor: "#D62828" }}>
            <CardContent className="pt-8 pb-8 text-center">
              <h2 className="text-3xl mb-4" style={{ color: "#D62828" }}>
                Want to Learn More?
              </h2>
              <p className="text-gray-700 mb-6">
                Join our upcoming cooking workshops and culinary events to experience authentic Chinese cuisine firsthand.
              </p>
              <Link
                to="/updates"
                className="inline-block px-8 py-3 rounded-md text-white transition-colors"
                style={{ backgroundColor: "#D62828" }}
              >
                View Upcoming Events
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
