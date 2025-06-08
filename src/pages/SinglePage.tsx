import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import VideoPlayer from '../components/VideoPlayer';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const SinglePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with centered logo */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-black py-4"
      >
        <div className="container mx-auto px-4 flex justify-center">
          <Link to="/" className="flex items-center justify-center">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="/lovable-uploads/0347627e-6356-4431-b176-5a32a4de480f.png" 
              alt="Company Logo" 
              className="h-24 w-auto" 
            />
          </Link>
        </div>
      </motion.header>
      
      {/* Main content with video player - full width */}
      <main className="flex-grow w-full px-0 py-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="w-full">
            <VideoPlayer 
              src="/gg-1.mp4"
            />
          </div>
        </motion.div>
      </main>

      {/* Slogans Section - Similar to Index page */}
      <section className="w-full">
        {/* Purpose Slogan */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-20 px-6 md:px-12 bg-black text-white"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="max-w-none mx-auto text-left">
                <motion.h2 
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-caesar mb-8 tracking-wider"
                >
                  PURPOSE
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed mb-4 font-ebgaramond">
                  Greek God is more than clothing. It's a reminder of who you are and what you're capable of.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed mb-4 font-ebgaramond">
                  The greatest warriors, thinkers, and leaders of history lived with discipline, strength, and purpose.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed mb-4 font-ebgaramond">
                  We are their descendants. That same fire runs in our veins.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed font-ebgaramond">
                  Every design is a symbol—a call to awaken that power within.
                </motion.p>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 flex justify-center items-center"
            >
              <img 
                src="/s2.png"
                alt="Purpose related image"
                className="w-full h-auto object-contain max-h-96 rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Vision Slogan */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-20 px-6 md:px-12 bg-black text-white"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="max-w-none mx-auto text-left">
                <motion.h2 
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-caesar mb-8 tracking-wider"
                >
                  VISION
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed mb-4 font-ebgaramond">
                  To create a brand that embodies high performance—mentally, physically, and spiritually.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed mb-4 font-ebgaramond">
                  A movement for those who refuse to settle, who push limits, and live with intention.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed font-ebgaramond">
                  Each piece is crafted to remind you of the legacy you carry—because greatness isn't just in the past. It's in you.
                </motion.p>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 flex justify-center items-center"
            >
              <img 
                src="/s3.png"
                alt="Vision related image"
                className="w-full h-auto object-contain max-h-96 rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Legacy Slogan */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-20 px-6 md:px-12 bg-black text-white"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="max-w-none mx-auto text-left">
                <motion.h2 
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-caesar mb-8 tracking-wider"
                >
                  LEGACY
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed mb-4 font-ebgaramond">
                  Greek God isn't about the past—it's about unlocking the power already in you.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed mb-4 font-ebgaramond">
                  This is for those who refuse to be ordinary. Who refuse to live small.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed font-ebgaramond">
                  It's time to own your legacy.
                </motion.p>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 flex justify-center items-center"
            >
              <img 
                src="/s1.png"
                alt="Legacy related image"
                className="w-full h-auto object-contain max-h-96 rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Drop Sale Alert Section */}
      <section className="w-full bg-black text-white py-20 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-caesar mb-12 tracking-wider"
          >
            Upcoming Drop
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Product 1 */}
            <motion.div
              variants={fadeInUp}
              viewport={{ once: true }}
              className="flex flex-col bg-gray-900 rounded-lg shadow-xl overflow-hidden group transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/p1.jpg" 
                alt="Upcoming Product 1"
                className="w-full h-auto object-cover"
              />
              {/* Text content below image */}
              <div className="w-full p-4 text-center">
                <p className="text-sm text-gray-500 font-light uppercase">ZEUS COLLECTION</p>
                <h3 className="text-xl md:text-2xl font-bold mb-1 font-caesar text-white">ZEUS ENERGY TEE</h3>
                <p className="text-sm md:text-base mb-3 font-light text-gray-400">Channel the power of the gods with this striking graphic tee featuring the mighty Zeus.</p>
                <p className="text-lg md:text-xl font-semibold text-yellow-400">Coming Soon</p>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div
              variants={fadeInUp}
              viewport={{ once: true }}
              className="flex flex-col bg-gray-900 rounded-lg shadow-xl overflow-hidden group transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/p2.jpg"
                alt="Upcoming Product 2"
                className="w-full h-auto object-cover"
              />
              {/* Text content below image */}
              <div className="w-full p-4 text-center">
                <p className="text-sm text-gray-500 font-light uppercase">CORE COLLECTION</p>
                <h3 className="text-xl md:text-2xl font-bold mb-1 font-caesar text-white">CLASSIC LOGO TEE</h3>
                <p className="text-sm md:text-base mb-3 font-light text-gray-400">Represent the legacy with our essential tee, featuring the iconic Greek God logo.</p>
                <p className="text-lg md:text-xl font-semibold text-yellow-400">Coming Soon</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Newsletter component that hovers until footer is visible */}
      {/* <Newsletter /> */}
    </div>
  );
};

export default SinglePage;
