// src/pages/Contact.jsx
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get answers to all your questions.
          </h1>
          <p className="text-gray-600">
            Problems trying to resolve the conflict between the two major realms of Classical physics.
          </p>
        </div>

        {/* Contact Button */}
        <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors mb-8">
          CONTACT OUR COMPANY
        </button>

        {/* Social Media Links */}
        <div className="flex justify-center items-center gap-6">
          <Link 
            to="#" 
            className="text-gray-500 hover:text-[#23A6F0] transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </Link>
          <Link 
            to="#" 
            className="text-gray-500 hover:text-[#23A6F0] transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </Link>
          <Link 
            to="#" 
            className="text-gray-500 hover:text-[#23A6F0] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </Link>
          <Link 
            to="#" 
            className="text-gray-500 hover:text-[#23A6F0] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;