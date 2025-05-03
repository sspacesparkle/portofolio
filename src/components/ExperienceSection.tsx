
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    company: "PT Bigjava",
    position: "Social Media Specialist",
    period: "Mei 2023 - Mei 2025",
    description: "Monitored and analyzed digital trends, working closely with the design, editorial, and creative teams to develop and produce engaging content.",
  },
  {
    company: "FUNacTive Yogyakarta",
    position: "Content Creator",
    period: "July 2024 - Dec 2024",
    description: "Developed creative content ideas and produced engaging visual assets for Instagram feed, stories, and reels using tools like Canva and CapCut.",
  },
  {
    company: "Kemedis",
    position: "Quality Assurance",
    period: "Oct 2022 - Nov 2022",
    description: "Implemented a new testing procedure that successfully reduced average testing time, accelerating product launch and improving team efficiency.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Personal Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey in content creation has equipped me with diverse skills and experiences
            working with brands and audiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-5 w-5 text-[#0000FF]" />
                  </div>
                  <CardTitle>{exp.position}</CardTitle>
                </div>
                <CardDescription className="text-[#0000FF] font-medium">{exp.company}</CardDescription>
                <CardDescription>{exp.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
