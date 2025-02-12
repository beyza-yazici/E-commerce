import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

const iconMap = {
  Facebook: <Facebook className="w-5 h-5 text-blue-600" />,
  Instagram: <Instagram className="w-5 h-5 text-pink-500" />,
  Twitter: <Twitter className="w-5 h-5 text-blue-400" />
};

export default function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    fetch("/data/footerData.json")
      .then((res) => res.json())
      .then((data) => setFooterData(data));
  }, []);

  if (!footerData) return <p>Loading...</p>;

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
