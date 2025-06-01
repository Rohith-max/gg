
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Elevate Your Style</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Discover our curated collection of timeless pieces designed for the modern individual.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/shop">
                <Button className="text-base px-8 py-6">
                  Shop Now
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="text-base px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-black">
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Slogan Sections - No gaps between sections */}
        <section className="w-full">
          {/* Purpose Slogan */}
          <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')",
              filter: "brightness(0.65)"
            }}></div>
            <div className="relative z-10 py-20 px-6 md:px-12 text-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-caesar mb-8 text-center tracking-wider">PURPOSE</h2>
                <p className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                  Greek God is more than clothing. It's a reminder of who you are and what you're capable of.
                </p>
                <p className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                  The greatest warriors, thinkers, and leaders of history lived with discipline, strength, and purpose.
                </p>
                <p className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                  We are their descendants. That same fire runs in our veins.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-center font-light">
                  Every design is a symbol—a call to awaken that power within.
                </p>
              </div>
            </div>
          </div>
          
          {/* Vision Slogan */}
          <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')",
              filter: "brightness(0.65)"
            }}></div>
            <div className="relative z-10 py-20 px-6 md:px-12 text-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-caesar mb-8 text-center tracking-wider">VISION</h2>
                <p className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                  To create a brand that embodies high performance—mentally, physically, and spiritually.
                </p>
                <p className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                  A movement for those who refuse to settle, who push limits, and live with intention.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-center font-light">
                  Each piece is crafted to remind you of the legacy you carry—because greatness isn't just in the past. It's in you.
                </p>
              </div>
            </div>
          </div>
          
          {/* Legacy Slogan */}
          <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b')",
              filter: "brightness(0.65)"
            }}></div>
            <div className="relative z-10 py-20 px-6 md:px-12 text-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-caesar mb-8 text-center tracking-wider">LEGACY</h2>
                <p className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                  Greek God isn't about the past—it's about unlocking the power already in you.
                </p>
                <p className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                  This is for those who refuse to be ordinary. Who refuse to live small.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-center font-light">
                  It's time to own your legacy.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Products Preview */}
        <section className="container mx-auto py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <div className="aspect-square bg-gray-100 mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gray-200"></div>
                </div>
                <h3 className="font-medium text-lg mb-1">Product Name</h3>
                <p className="text-gray-500">$99.00</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="outline" className="text-base">
                View All Products
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
