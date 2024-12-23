import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div 
      className="home" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}>
      <h1>Welcome to Navomi's Portfolio</h1>
      <p>I'm a passionate developer ready to build amazing things!</p>
    </motion.div>
  );
}

export default Home;