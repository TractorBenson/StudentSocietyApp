import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent } from "../components/ui/card";
import { Users, Target, Heart, Globe } from "lucide-react";
import aboutImage from "../../imports/about.jpg";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Cultural Preservation",
      description: "We are committed to preserving and promoting Chinese cultural heritage for future generations.",
      color: "#D62828",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Creating an inclusive space where students can connect, learn, and celebrate together.",
      color: "#F77F00",
    },
    {
      icon: Globe,
      title: "Cultural Exchange",
      description: "Bridging cultures by sharing Chinese traditions with the wider community.",
      color: "#D62828",
    },
    {
      icon: Target,
      title: "Educational Excellence",
      description: "Providing authentic, engaging learning experiences about Chinese culture and history.",
      color: "#F77F00",
    },
  ];

  const teamMembers = [
    {
      role: "President",
      responsibilities: "Leading the organization and coordinating all major initiatives",
    },
    {
      role: "Vice President",
      responsibilities: "Supporting operations and managing cultural events",
    },
    {
      role: "Events Coordinator",
      responsibilities: "Planning and executing festivals and celebrations",
    },
    {
      role: "Marketing Director",
      responsibilities: "Managing communications and social media outreach",
    },
    {
      role: "Cultural Affairs",
      responsibilities: "Curating educational content and heritage programs",
    },
    {
      role: "Treasurer",
      responsibilities: "Managing finances and sponsorships",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src={aboutImage}
          alt="Chinese Cultural Hub Community"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl mb-6">About Us</h1>
          <p className="text-xl md:text-2xl">
            Lighting Up Chinese Culture in the Digital World
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-8 text-center" style={{ color: "#D62828" }}>
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Chinese Cultural Hub began as a student-led initiative to create a
              welcoming space for those passionate about Chinese culture, heritage,
              and traditions. What started as small gatherings has blossomed into a
              vibrant community that celebrates the depth and diversity of Chinese
              civilization.
            </p>
            <p>
              We believe that culture is a living, breathing connection between past
              and present. Through our festivals, workshops, and educational
              programs, we strive to make Chinese cultural experiences accessible
              and engaging for everyone—whether you're reconnecting with your roots
              or discovering something entirely new.
            </p>
            <p>
              Our society serves as a bridge between tradition and modernity,
              bringing together students from all backgrounds to share in the rich
              tapestry of Chinese art, music, philosophy, cuisine, and celebrations
              that have shaped human history for over 5,000 years.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-[#FCF7F8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center" style={{ color: "#D62828" }}>
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${value.color}15` }}
                    >
                      <value.icon className="h-7 w-7" style={{ color: value.color }} />
                    </div>
                    <div>
                      <h3 className="text-2xl mb-3" style={{ color: "#333333" }}>
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-8 text-center" style={{ color: "#D62828" }}>
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-gray-200" style={{ borderLeftColor: "#F77F00" }}>
              <CardContent className="pt-6">
                <h3 className="text-xl mb-3" style={{ color: "#F77F00" }}>
                  Cultural Festivals
                </h3>
                <p className="text-gray-600">
                  Celebrate traditional holidays like Spring Festival, Mid-Autumn
                  Festival, and Dragon Boat Festival with authentic performances,
                  food, and activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-gray-200" style={{ borderLeftColor: "#D62828" }}>
              <CardContent className="pt-6">
                <h3 className="text-xl mb-3" style={{ color: "#D62828" }}>
                  Workshops & Classes
                </h3>
                <p className="text-gray-600">
                  Learn traditional arts like calligraphy, paper cutting, tea
                  ceremony, and Chinese cooking from experienced practitioners.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-gray-200" style={{ borderLeftColor: "#D62828" }}>
              <CardContent className="pt-6">
                <h3 className="text-xl mb-3" style={{ color: "#D62828" }}>
                  Educational Programs
                </h3>
                <p className="text-gray-600">
                  Attend lectures, film screenings, and discussions exploring
                  Chinese history, philosophy, literature, and contemporary issues.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-gray-200" style={{ borderLeftColor: "#F77F00" }}>
              <CardContent className="pt-6">
                <h3 className="text-xl mb-3" style={{ color: "#F77F00" }}>
                  Social Events
                </h3>
                <p className="text-gray-600">
                  Join our welcoming community for casual gatherings, cultural
                  outings, networking events, and collaborative projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 bg-[#FCF7F8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-8 text-center" style={{ color: "#D62828" }}>
            Our Team
          </h2>
          <p className="text-center text-gray-700 text-lg mb-12">
            Our dedicated executive board works year-round to bring you exceptional
            cultural experiences and foster a thriving community.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="pt-6">
                  <h3 className="text-xl mb-2" style={{ color: "#D62828" }}>
                    {member.role}
                  </h3>
                  <p className="text-gray-600">{member.responsibilities}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: "#D62828" }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl mb-6">Join Our Community</h2>
          <p className="text-xl leading-relaxed mb-8">
            Whether you're looking to reconnect with your heritage, learn something
            new, or simply make friends who share your interests, Chinese Cultural
            Hub welcomes you with open arms.
          </p>
          <p className="text-lg opacity-90">
            Visit our Contact page to get in touch and learn about upcoming events!
          </p>
        </div>
      </section>
    </div>
  );
}
