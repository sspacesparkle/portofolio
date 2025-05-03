
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-purple-50 to-white pt-32 pb-16 md:pb-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                HI THERE!
              </span>{' '}
              I am <span className="font text-[#0000FF]">Dedharya Immanuella</span>, as known as{' '}
              <span className="font-extrabold text-[#0000FF]">Nayla.</span>
          </h1>

            <p className="text-base md:text-lg text-gray-700">
              Mostly interested in{' '}
              <span className="font-semibold text-blue-700">
                Graphic Design, Videos & Photos Editing
              </span>
              , and{' '}
              <span className="font-semibold text-blue-700">Creating Content</span> with
              almost 2 years of experience. Enjoy my portfolio!{' '}
              <span className="inline-block">💗</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#0000FF] hover:bg-[#0000cc]" size="lg">


                <a href="#contact">
                  Let's Collaborate <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-in mx-auto">
            <img
              src="img/PROFIL.jpeg"
              alt="Content Creator"
              className="w-full h-full object-cover object-center rounded-full border-4 border-[#0000FF] shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.25,88.12,111.59,78.75,151.89,69.09,180.68,62.38,209.69,55.05,239.72,49Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
