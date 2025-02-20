// src/pages/Team.jsx
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    image: "https://media.licdn.com/dms/image/v2/C4D03AQE8uHbxXDXfmw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1635783306921?e=1745452800&v=beta&t=9fgm9oQ2LGvrH_naQHhYMre0FM9g8w2xQLa91esRqow",
    username: "Gökhan Özdemir",
    profession: "Project Manager",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEYAoAvqHDn9Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718233695775?e=1745452800&v=beta&t=Yd6o6chFrgwW5AIe4efWzJV4RToXy8XUFhAJO6fVhjs",
    username: "Beyza Nur Yazıcı",
    profession: "Full Stack Developer",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    image: "https://media.licdn.com/dms/image/v2/D4D35AQEpxXf00pI2Pg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1738135517925?e=1740693600&v=beta&t=-FtiEJVn8-gQZOr8WDH-3gLnnMMWhsJdVm7stBlWiDk",
    username: "Sinem Sevimlikurt",
    profession: "Full Stack Developer",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  }
];

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Meet Our Team
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Problems trying to resolve the conflict between
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="md:grid md:grid-cols-3 md:gap-8 space-y-8 md:space-y-0">
        {teamMembers.map((member) => (
          <div key={member.id} className="text-center">
            {/* Member Image */}
            <div className="mb-4">
              <img
                src={member.image}
                alt={member.username}
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Member Info */}
            <h3 className="text-lg font-semibold mb-1">
              {member.username}
            </h3>
            <p className="text-gray-600 mb-4">
              {member.profession}
            </p>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-4">
              <Link 
                to={member.social.facebook}
                className="text-[#23A6F0] hover:text-blue-700 transition-colors"
                aria-label={`${member.username}'s Facebook`}
              >
                <Facebook size={20} />
              </Link>
              <Link 
                to={member.social.instagram}
                className="text-[#23A6F0] hover:text-blue-700 transition-colors"
                aria-label={`${member.username}'s Instagram`}
              >
                <Instagram size={20} />
              </Link>
              <Link 
                to={member.social.twitter}
                className="text-[#23A6F0] hover:text-blue-700 transition-colors"
                aria-label={`${member.username}'s Twitter`}
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;