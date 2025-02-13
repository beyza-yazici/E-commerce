import { Link } from 'react-router-dom';
import { Calendar, MessageSquare, ChevronRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/19082346/pexels-photo-19082346/free-photo-of-kent-sehir-su-gemi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        {/* Header kısmı aynı */}
        
        <div className="flex flex-wrap justify-center gap-8">
          {posts.map((post) => (
            <div key={post.id} className="flex-1 min-w-[300px] max-w-[350px] bg-white rounded-lg overflow-hidden shadow-lg">
              {/* Image Container aynı */}
  
              <div className="p-6">
                {/* Categories & Tags */}
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
  
                {/* Title */}
                <h3 className="text-xl font-bold text-[#252B42] mb-4">
                  {post.title}
                </h3>
  
                {/* Description */}
                <p className="text-gray-500 text-sm mb-4">
                  {post.description}
                </p>
  
                {/* Footer */}
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
  
                {/* Learn More */}
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