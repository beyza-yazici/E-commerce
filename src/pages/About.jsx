// src/pages/About.jsx
import { Link } from 'react-router-dom';
import Team from './Team';
import LogoBand from '../components/Logo';

const stats = [
  {
    number: "15K",
    label: "Happy Customers"
  },
  {
    number: "150K",
    label: "Monthly Visitors"
  },
  {
    number: "15",
    label: "Countries Worldwide"
  },
  {
    number: "100+",
    label: "Top Partners"
  }
];

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center mb-24">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <span className="text-sm text-gray-600 uppercase mb-4 block">
            ABOUT COMPANY
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#252B42] mb-6">
            ABOUT US
          </h1>
          
          <p className="text-gray-600 mb-8 max-w-md">
            We know how large objects will act, but things on a small scale
          </p>
          
          <Link 
            to="/contact" 
            className="inline-block bg-[#23A6F0] text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors"
          >
            Get Quote Now
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative">
          {/* Background Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full -z-10"></div>
          <div className="absolute top-8 right-8 w-4 h-4 bg-purple-400 rounded-full"></div>
          
          {/* Main Image */}
          <img
            src="https://images.pexels.com/photos/975250/pexels-photo-975250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Shopping Woman"
            className="relative z-10 max-w-full"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-red-500 block mb-5 text-center md:text-left">
            Problems trying
          </span>
          
          <div className="md:flex md:justify-between md:items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-[#252B42] max-w-md mb-8 md:mb-0 text-center md:text-left">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </h2>
            
            <p className="text-gray-600 md:max-w-md text-center md:text-left">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="md:flex md:justify-between md:items-center space-y-12 md:space-y-0">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#252B42] mb-2">
                {stat.number.includes('K') ? (
                    <>
                        {stat.number.replace('K', '')}
                        <span className="text-2xl">K</span>
                    </>
                    ) : stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
<div className="max-w-6xl mx-auto mt-24 mb-24">
  <div className="relative rounded-2xl overflow-hidden aspect-video">
    {/* Video Thumbnail */}
    <img
      src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg" // Dağ gölü görseliniz
      alt="Mountain Lake"
      className="w-full h-full object-cover"
    />
    
    {/* Play Button */}
    <button 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                 bg-blue-500 hover:bg-blue-600 transition-colors 
                 w-16 h-16 rounded-full flex items-center justify-center 
                 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
      onClick={() => {
        // Video oynatma fonksiyonu
      }}
    >
      <svg 
        className="w-8 h-8 text-white ml-1" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path 
          d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
        />
      </svg>
    </button>
  </div>
</div>

      <Team />

      {/* Companies Section */}
      <div className="mt-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#252B42] mb-4">
            Big Companies Are Here
          </h2>
          <p className="text-gray-600 max-w-md mx-auto text-sm md:text-base">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        
        <LogoBand />

        {/* Work With Us Section */}
<div className="mt-24 md:flex">
  {/* Left Side - Blue Background */}
  <div className="bg-[#23A6F0] text-white md:w-1/2 p-8 md:p-16">
    <div className="max-w-md">
      <span className="text-sm uppercase mb-4 block">
        WORK WITH US
      </span>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Now Let&apos;s grow Yours
      </h2>
      
      <p className="mb-8 text-sm md:text-base">
        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
      </p>
      
      <button className="border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-[#23A6F0] transition-colors">
        Button
      </button>
    </div>
  </div>

  {/* Right Side - Image */}
  <div className="hidden md:block md:w-1/2">
    <img
      src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      alt="Woman in pink"
      className="w-full h-full object-cover"
    />
  </div>
</div>
      </div>
    </div>
  );
};

export default About;