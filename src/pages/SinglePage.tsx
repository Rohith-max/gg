import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Newsletter from '../components/Newsletter';
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
        className="w-full bg-black overflow-hidden"
        style={{ height: "22.5rem", position: "relative" }}
      >
        <video
          src="/gg-1.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        />
        <Link to="/" className="absolute inset-0 z-10 flex items-center justify-center">
          {/* Optional: overlay logo or content here */}
        </Link>
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
          className="relative"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')",
            filter: "brightness(0.65)"
          }}></div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative z-10 py-20 px-6 md:px-12 text-white"
          >
            <div className="max-w-3xl mx-auto">
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-caesar mb-8 text-center tracking-wider"
              >
                PURPOSE
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                Greek God is more than clothing. It's a reminder of who you are and what you're capable of.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                The greatest warriors, thinkers, and leaders of history lived with discipline, strength, and purpose.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                We are their descendants. That same fire runs in our veins.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed text-center font-light">
                Every design is a symbol—a call to awaken that power within.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Vision Slogan */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')",
            filter: "brightness(0.65)"
          }}></div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative z-10 py-20 px-6 md:px-12 text-white"
          >
            <div className="max-w-3xl mx-auto">
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-caesar mb-8 text-center tracking-wider"
              >
                VISION
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                To create a brand that embodies high performance—mentally, physically, and spiritually.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                A movement for those who refuse to settle, who push limits, and live with intention.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed text-center font-light">
                Each piece is crafted to remind you of the legacy you carry—because greatness isn't just in the past. It's in you.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Legacy Slogan */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b')",
            filter: "brightness(0.65)"
          }}></div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative z-10 py-20 px-6 md:px-12 text-white"
          >
            <div className="max-w-3xl mx-auto">
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-caesar mb-8 text-center tracking-wider"
              >
                LEGACY
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                Greek God isn't about the past—it's about unlocking the power already in you.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                This is for those who refuse to be ordinary. Who refuse to live small.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed text-center font-light">
                It's time to own your legacy.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Newsletter component that hovers until footer is visible */}
      <Newsletter />
    </div>
  );
};

export default SinglePage;
