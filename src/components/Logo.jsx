import { 
    Github, 
    Twitter, 
    Linkedin, 
    Facebook, 
    Instagram,
    Slack 
  } from 'lucide-react';
  
  const LogoBand = () => (
    <div className="py-10 bg-gray-50"> 
      {/* Desktop görünüm */}
      <div className="hidden md:flex justify-center items-center gap-16 max-w-7xl mx-auto px-4"> 
        <a href="#" className="text-gray-400 hover:text-[#333] transition-colors">
          <Github size={48} strokeWidth={1.5} /> 
        </a>
        <a href="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors">
          <Twitter size={48} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
          <Linkedin size={48} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-gray-400 hover:text-[#1877F2] transition-colors">
          <Facebook size={48} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-gray-400 hover:text-[#E4405F] transition-colors">
          <Instagram size={48} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-gray-400 hover:text-[#4A154B] transition-colors">
          <Slack size={48} strokeWidth={1.5} />
        </a>
      </div>
  
      {/* Mobil görünüm */}
      <div className="md:hidden flex flex-col items-center gap-8 px-4"> 
        <a href="#" className="text-gray-400 hover:text-[#333] transition-colors">
          <Github size={40} strokeWidth={1.5} /> 
        </a>
        <a href="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors">
          <Twitter size={40} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
          <Linkedin size={40} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-gray-400 hover:text-[#1877F2] transition-colors">
          <Facebook size={40} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-gray-400 hover:text-[#E4405F] transition-colors">
          <Instagram size={40} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-gray-400 hover:text-[#4A154B] transition-colors">
          <Slack size={40} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
  
  export default LogoBand;