import { Link } from "react-router-dom";
import Slider from "../components/Slider";


function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      {/* Slider Section */}
      <section className="w-full">
        <Slider />
      </section>

      {/* Editor's Pick */}
      <section className="text-center">
        <h2 className="text-xl font-bold">EDITOR&apos;S PICK</h2>
        <p className="text-gray-500">Problems trying to resolve the conflict between</p>
        <div className="flex justify-center gap-4 mt-6">
          <div className="flex flex-col items-center">
            <img src="https://picsum.photos/seed/men/200/300" alt="Men" />
            <Link to="#" className="font-bold">MEN</Link>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://picsum.photos/seed/women/200/300" alt="Women" />
            <Link to="#" className="font-bold">WOMEN</Link>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://picsum.photos/seed/accessories/200/300" alt="Accessories" />
            <Link to="#" className="font-bold">ACCESSORIES</Link>
          </div>
        </div>
      </section>

      {/* Bestseller Products */}
      <section className="text-center">
        <h2 className="text-xl font-bold">BESTSELLER PRODUCTS</h2>
        <p className="text-gray-500">Problems trying to resolve the conflict between</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={`https://picsum.photos/seed/product${index}/200/300`} alt="Product" />
              <p className="font-bold">Graphic Design</p>
              <p className="text-gray-500">English Department</p>
              <span className="text-green-600">$16.48</span>
            </div>
          ))}
        </div>
      </section>

      {/* Green Banner Section */}
      <section className="relative flex items-center justify-between bg-green-700 text-white p-10">
        <div>
          <h2 className="text-xl font-bold">SUMMER 2020</h2>
          <h1 className="text-3xl font-extrabold">Vita Classic Product</h1>
          <p className="text-sm mt-2">We know how large objects will act, but things on a small scale.</p>
          <button className="mt-4 px-4 py-2 bg-white text-black font-bold">ADD TO CART</button>
        </div>
        <img src="https://picsum.photos/seed/banner/400/300" alt="Product Banner" className="w-1/3" />
      </section>

      {/* Featured Posts */}
      <section className="text-center">
        <h2 className="text-xl font-bold">Featured Posts</h2>
        <p className="text-gray-500">Problems trying to resolve the conflict between</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <img src={`https://picsum.photos/seed/blog${index}/400/250`} alt="Blog Post" />
              <div className="p-4">
                <p className="font-bold">Loudest à la Madison #1</p>
                <p className="text-gray-500 text-sm">English Department</p>
                <Link to="#" className="text-blue-500">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;