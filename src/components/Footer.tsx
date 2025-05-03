
import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Portfolio<span className="text-purple-500">.</span></h3>
            <p className="text-gray-300 mb-4">Creating compelling digital content that captivates audiences and drives engagement.</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/naylelahh?igsh=dnZxeTYzZXN4cDVu&utm_source=qr" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/dedharya-immanuella-wardjanan-503971221/" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:dedharyaiw21@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-purple-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#social" className="text-gray-300 hover:text-purple-400 transition-colors">Social</a></li>
            </ul>
          </div>
          
          <div>
            {/* <h3 className="text-lg font-semibold mb-4">Contact</h3> */}
            <p className="text-gray-300">Based in Jakarta,Indonesia</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nayla. All rights reserved.</p>
          <p>&copy; {new Date().getFullYear()} made by didit eko</p>
        </div>
      </div>
    </footer>
  );
}
