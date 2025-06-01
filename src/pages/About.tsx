import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import VideoPlayer from '../components/VideoPlayer';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-black overflow-hidden"
        style={{ height: "16rem", position: "relative" }}
      >
        <Link to="/" className="absolute inset-0 z-10 flex items-center justify-center">
          {/* Optional: overlay logo or content here */}
        </Link>
        <video
          src="/gg-1.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        />
      </motion.header>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Our Story</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 animate-fade-in">
              Crafting exceptional products since 2010, we believe in quality, sustainability, and timeless design.
            </p>
            <div className="w-full h-[400px] md:h-[500px] animate-fade-in">
              <VideoPlayer 
                src="/lovable-uploads/0347627e-6356-4431-b176-5a32a4de480f.png" 
                poster="/lovable-uploads/0347627e-6356-4431-b176-5a32a4de480f.png" 
              />
            </div>
          </div>
        </section>
        
        <Separator className="max-w-2xl mx-auto" />
        
        {/* Mission Section */}
        <section className="container mx-auto py-16 px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                We believe in creating products that stand the test of time - both in quality and design. Our mission is to provide you with products that become more meaningful with every use.
              </p>
              <p className="text-gray-600 mb-4">
                Sustainability isn't just a buzzword for us; it's at the core of everything we do. From sourcing raw materials to our manufacturing processes, we constantly strive to minimize our environmental footprint.
              </p>
              <p className="text-gray-600">
                Through our commitment to ethical practices and timeless design, we aim to redefine what it means to create products that are good for you and the planet.
              </p>
            </div>
            <div className="bg-gray-100 p-12 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-black rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Quality</h4>
                    <p className="text-gray-600 text-sm">Meticulous attention to detail and superior craftsmanship</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-black rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Sustainability</h4>
                    <p className="text-gray-600 text-sm">Environmentally conscious materials and processes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-black rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Transparency</h4>
                    <p className="text-gray-600 text-sm">Honest communication about our products and processes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-black rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Innovation</h4>
                    <p className="text-gray-600 text-sm">Continuously improving and evolving our designs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <Separator className="max-w-2xl mx-auto" />
        
        {/* Team Section */}
        <section className="container mx-auto py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-gray-600 mb-12">
              Our diverse team of passionate individuals works tirelessly to bring our vision to life. 
              Meet the people behind our brand who make everything possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Alexandra Chen",
                  role: "Founder & Creative Director",
                  bio: "With over 15 years of experience in design, Alexandra brings her unique vision and expertise to every aspect of our brand."
                },
                {
                  name: "Michael Rodriguez",
                  role: "Head of Product Development",
                  bio: "Michael's innovative approach and attention to detail ensure that our products are both beautiful and functional."
                },
                {
                  name: "Sarah Johnson",
                  role: "Sustainability Officer",
                  bio: "Sarah leads our sustainability initiatives, ensuring we maintain the highest environmental standards across all operations."
                }
              ].map((member, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-500 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;
