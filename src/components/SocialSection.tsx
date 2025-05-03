
import { Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// const socialPosts = [
//   {
//     platform: "Instagram",
//     image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     title: "Behind the scenes at our latest shoot",
//     likes: 842,
//     comments: 32,
//   },
//   {
//     platform: "Instagram",
//     image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     title: "Creative brainstorming session",
//     likes: 1240,
//     comments: 56,
//   },
//   {
//     platform: "LinkedIn",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     title: "My latest article on content strategy",
//     likes: 423,
//     comments: 18,
//   }
// ];

const socialLinks = [
  {
    name: "Instagram",
    handle: "@naylelahh",
    icon: Instagram,
    color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
    url: "https://www.instagram.com/naylelahh?igsh=dnZxeTYzZXN4cDVu&utm_source=qr",
  },
  {
    name: "LinkedIn",
    handle: "dedharya imaneulla wardjanan",
    icon: Linkedin,
    color: "bg-blue-600",
    url: "https://www.linkedin.com/in/dedharya-immanuella-wardjanan-503971221/",
  },
  {
    name: "Email",
    handle: "dedharyaiw21@gmail.com",
    icon: Mail,
    color: "bg-gray-800",
    url: "mailto:dedharyaiw21@gmail.com",
  }
];

export default function SocialSection() {
  return (
    <section id="social" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect & Follow</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with my latest work and insights by following me on social media.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              className="transform transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Card className="overflow-hidden border-0 shadow-md h-full">
                <div className={`h-3 ${link.color}`}></div>
                <CardContent className="p-6 flex items-center">
                  <div className={`w-12 h-12 rounded-full ${link.color} flex items-center justify-center mr-4`}>
                    <link.icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{link.name}</h3>
                    <p className="text-gray-600">{link.handle}</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
        
        {/* <h3 className="text-2xl font-bold mb-8 text-center">Recent Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {post.platform}
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">{post.title}</h4>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-3">{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}
        
        <div className="text-center mt-12">
          <Button asChild className="bg-[#0000FF] hover:bg-purple-700">
            <a href="#" className="inline-flex items-center">
              Follow Me <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
