import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const iconMap = {
  Facebook: <Facebook className="w-5 h-5 text-blue-600" />,
  Instagram: <Instagram className="w-5 h-5 text-pink-500" />,
  Twitter: <Twitter className="w-5 h-5 text-blue-400" />
};

const footerData = {
  "sections": [
    {
      "title": "Company Info",
      "links": [
        { "text": "About Us", "href": "/about" },
        { "text": "Career", "href": "/career" },
        { "text": "We are hiring", "href": "/hiring" },
        { "text": "Blog", "href": "/blog" }
      ]
    },
    {
      "title": "Features",
      "links": [
        { "text": "Business Marketing", "href": "/marketing" },
        { "text": "User Analytic", "href": "/analytic" },
        { "text": "Live Chat", "href": "/support" },
        { "text": "Unlimited Support", "href": "/support" }
      ]
    },
    {
      "title": "Resources",
      "links": [
        { "text": "IOS & Android", "href": "/ios-android" },
        { "text": "Watch a Demo", "href": "/demo" },
        { "text": "Customers", "href": "/customers" },
        { "text": "API", "href": "/api" }
      ]
    }
  ],
  "social": {
    "title": "Get In Touch",
    "description": "the quick fox jumps over the lazy dog",
    "links": [
      { "href": "https://facebook.com", "icon": "Facebook" },
      { "href": "https://instagram.com", "icon": "Instagram" },
      { "href": "https://twitter.com", "icon": "Twitter" }
    ]
  },
  "copyright": "Made With Love By Figmaland. All Rights Reserved."
};

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{footerData.social.title}</h3>
          <p className="text-sm text-gray-500">{footerData.social.description}</p>
          <div className="flex space-x-4 mt-2">
            {footerData.social.links.map((item, index) => (
              <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
                {iconMap[item.icon]}
              </a>
            ))}
          </div>
        </div>

        {footerData.sections.map((section, index) => (
          <div key={index} className="flex-1">
            <h3 className="text-lg font-semibold">{section.title}</h3>
            <ul className="mt-2 space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-gray-600 hover:text-black transition">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        {footerData.copyright}
      </div>
    </footer>
  );
}