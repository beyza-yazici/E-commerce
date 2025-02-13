import { Link } from 'react-router-dom';
import { Calendar, MessageSquare, ChevronRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/18676295/pexels-photo-18676295/free-photo-of-kent-sehir-kent-simgesi-gorulecek-yer.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Google",
    tags: ["Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/30643877/pexels-photo-30643877/free-photo-of-yalova-da-yagmurlu-sokakta-eski-turkuaz-araba.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Google",
    tags: ["Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/163822/color-umbrella-red-yellow-163822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Google",
    tags: ["Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10
  }
];

const FeaturedPosts = () => {
    return (
      <section className="container mx-auto px-4 py-12">

        <div className="text-center mb-12"> 
          <span className="text-[#23A6F0] text-sm">Practice Advice</span>
          <h2 className="text-[#252B42] text-4xl font-bold mt-2">Featured Products</h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {posts.map((post) => (
            <div key={post.id} className="flex-1 min-w-[300px] max-w-[350px] bg-white rounded-lg overflow-hidden shadow-lg">
             
              <div className="relative h-[300px]"> 
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#E74040] text-white text-sm px-2 py-1 rounded">
                  NEW
                </span>
              </div>

              <div className="p-6">
                <div className="flex gap-4 text-sm mb-4">
                  <Link 
                    to="/category/google" 
                    className="text-[#252B42] hover:text-[#23A6F0] transition-colors"
                  >
                    {post.category}
                  </Link>
                  {post.tags.map((tag, index) => (
                    <Link 
                      key={index}
                      to={`/tag/${tag.toLowerCase()}`}
                      className="text-[#252B42] hover:text-[#23A6F0] transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-[#252B42] mb-4">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                  {post.description}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#23A6F0]" />
                    <span>{post.date}</span>
                  </div>
                  <Link 
                    to="/comments" 
                    className="flex items-center gap-2 hover:text-[#23A6F0] transition-colors"
                  >
                    <MessageSquare size={16} className="text-[#23856D]" />
                    <span>{post.comments} comments</span>
                  </Link>
                </div>

                <Link 
                  to={`/post/${post.id}`} 
                  className="inline-flex items-center gap-2 text-sm text-[#252B42] hover:text-[#23A6F0] transition-colors group"
                >
                  Learn More
                  <ChevronRight 
                    size={16} 
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default FeaturedPosts;