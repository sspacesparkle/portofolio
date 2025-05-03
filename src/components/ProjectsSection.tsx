
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Product Collaborated Batik nDalem ARCS",
    category: "Talent and Collaborated",
    image: "img/batik.jpeg",
    description: "Created short films and product branding content to support the development and promotion of MSMEs (Micro, Small, and Medium Enterprises), focusing on storytelling that highlights unique brand values and market potential",
    link : "https://youtu.be/PXCvIjeLSoQ?si=RzXB-MNMVpVxw_lb"
  },
  {
    id: 2,
    title: "Short Movie Collaborated Batik nDalem ARCS",
    category:"Talent and Collaborated",
    image: "img/movie.jpeg",
    description: "Created short films and product branding content to support the development and promotion of MSMEs (Micro, Small, and Medium Enterprises), focusing on storytelling that highlights unique brand values and market potential",
    link : "https://youtu.be/_arTyTNbg9Y?si=uGWXmZohTgHIQnlZ",
  },
  {
    id: 3,
    title: "Video Iklan Product UMKM Denn's Sambal",
    category: "Talent and Collaborated",
    image: "img/sambal.jpeg",
    description: "Created short films and product branding content to support the development and promotion of MSMEs (Micro, Small, and Medium Enterprises), focusing on storytelling that highlights unique brand values and market potential",
    link: "https://youtu.be/HbGoZZoYAZ4?si=km2lPAeh3swkJ9Kz",
  },
  {
    id: 4,
    title: "Video Iklan Product Sari Roti",
    category: "Talent and Collaborated",
    image: "img/roti.jpeg",
    description: "Created short films and product branding content to support the development and promotion of MSMEs (Micro, Small, and Medium Enterprises), focusing on storytelling that highlights unique brand values and market potential.",
    link:"https://youtu.be/Qz22dtDWnJI?si=E39nCKZsWB03lX0Q"
  },
  {
    id: 5,
    title: "Moderator MC Workshop",
    category: "Public Speaking",
    image: "img/speaking2.jpeg",
    description: "Served as the moderator in a workshop on child motor skill development titled 'Why It Is Important to Sharpen Motor Skills in Children', facilitating discussions between speakers and participants to ensure a smooth and insightful learning experience.",
  },
  {
    id: 6,
    title: "Moderator Mc MUBES HIME 22/23",
    category: "Public Speaking",
    image: "img/speaking.jpeg",
    description: "Actively contributed to the successful execution of the HIME General Assembly (MUBES HIME), supporting event coordination and ensuring smooth organizational processes.",
  },
  {
    id: 7,
    title: "Public Speaking",
    category: "Public Speaking",
    image: "img/speaking3.jpeg",
    description: "Served as a speaker in a sharing session titled 'Boosting Your Confidence: Building Personal Branding', discussing strategies for developing a strong personal image in the digital era and encouraging participants to recognize and grow their unique potential",
  },
  {
    id: 10,
    title: "Ngomongin Good Think for Good Future",
    category: "Public Speaking",
    image: "img/speaking4.jpeg",
    description: "Served as moderator in a talk show titled 'Good Think for Good Future', facilitating an insightful discussion with the Founder & Executive Director of Ruang Internasional on the importance of mindset and positive thinking in shaping future opportunities",
  },
  {
    id: 8,
    title: "Social Media Tiktok & Instagram Fit",
    category: "Social Media Branding",
    image: "img/sosmed1.jpeg",
    description: "Managed multiple social media accounts across various platforms, overseeing content creation, scheduling, audience engagement, and performance analytics to support brand visibility and growth.",
  },
  {
    id: 9,
    title: "Social Media Tiktok & Instagram Fit",
    category: "Social Media Branding",
    image: "img/sosmed3.jpeg",
    description: "Managed multiple social media accounts across various platforms, overseeing content creation, scheduling, audience engagement, and performance analytics to support brand visibility and growth.",
  },
  {
    id: 11,
    title: "Youtube Video Editing",
    category: "Video Editing",
    image: "img/yt.jpeg",
    description: "Created promotional videos, vlogs, short films, and animations using tools such as Canva Pro, CapCut, and VN, effectively producing engaging visual content for various platforms.",
    link: "https://youtube.com/@naylelahh4703?si=4DL1sXwrmvrTdYAi",
  },
];

const categories = ["All", "Talent and Collaborated", "Public Speaking", "Social Media Branding","Video Editing"];


export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Check out some of my recent work that highlights my creative approach to content development.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-[#0000FF] text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#0000FF] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0000FF] hover:text-[#0000FF] flex items-center"
                >
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

