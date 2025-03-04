import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Navigation, MapPin, Users, BarChart, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="blue-glow blue-glow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={fadeIn}
            >
              <span className="gradient-text">User-Driven</span> Map Exploration & Updates
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Discover and contribute to the most accurate, up-to-date maps powered by community intelligence and AI.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={fadeIn}
            >
              <Link to="/signup" className="btn-primary text-center">
                Get Started Free
              </Link>
              <Link to="/#how-it-works" className="btn-outline text-center">
                How It Works
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-16 relative"
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1516319915504-015b432d407c?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Raptee Maps Interface" 
                className="w-full h-auto rounded-xl shadow-2xl animate-glow"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-dark-900/50" id="problem">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The <span className="gradient-text">Problem</span> With Current Maps
              </h2>
              <p className="text-gray-300 mb-6">
                Open-source mapping solutions, being community-driven, can often become outdated, leading to inaccurate navigation due to missing or outdated roads, buildings, and other essential data.
              </p>
              <p className="text-gray-300 mb-6">
                Manually updating these maps is time-consuming and requires significant effort, making it difficult to keep up with rapid changes.
              </p>
              <p className="text-gray-300">
                To ensure accurate and reliable navigation, a scalable, automated, and user-driven solution is necessary.
              </p>
            </motion.div>
            <motion.div 
              className="relative"
              variants={fadeIn}
            >
              <div className="blue-glow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img 
                src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Outdated Map Example" 
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" id="features">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={fadeIn}
            >
              <span className="gradient-text">Key Features</span> of Raptee Maps
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg"
              variants={fadeIn}
            >
              Our innovative approach combines user data, AI, and community verification to create the most accurate maps possible.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="card relative"
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="blue-glow blue-glow-sm absolute top-0 left-0"></div>
              <div className="p-4 relative z-10">
                <div className="bg-primary-500/20 p-3 rounded-lg inline-block mb-4">
                  <Navigation className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Road Detection</h3>
                <p className="text-gray-400">
                  When a user travels on a road not present in existing maps, our segmentation model processes satellite imagery to check for a road in that location.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="card"
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="p-4">
                <div className="bg-primary-500/20 p-3 rounded-lg inline-block mb-4">
                  <MapPin className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">User-GPS Validation</h3>
                <p className="text-gray-400">
                  If multiple users' GPS traces align with the detected road, it is flagged for addition, ensuring accuracy through consensus.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="card"
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="p-4">
                <div className="bg-primary-500/20 p-3 rounded-lg inline-block mb-4">
                  <BarChart className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Road Classification</h3>
                <p className="text-gray-400">
                  IMU and accelerometer data classify the road as smooth, off-road, or damaged, helping users plan better routes.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="card"
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="p-4">
                <div className="bg-primary-500/20 p-3 rounded-lg inline-block mb-4">
                  <Users className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Crowdsourced Verification</h3>
                <p className="text-gray-400">
                  Users confirm road accuracy through the app, reducing manual validation and increasing community engagement.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="card"
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="p-4">
                <div className="bg-primary-500/20 p-3 rounded-lg inline-block mb-4">
                  <Map className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Temporary Updates</h3>
                <p className="text-gray-400">
                  New roads are displayed in the app before final approval, giving users immediate access to the latest information.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="card relative"
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="blue-glow blue-glow-sm absolute bottom-0 right-0"></div>
              <div className="p-4 relative z-10">
                <div className="bg-primary-500/20 p-3 rounded-lg inline-block mb-4">
                  <Award className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Automated Map Integration</h3>
                <p className="text-gray-400">
                  Verified roads are automatically submitted to Raptee maps, streamlining the update process and reducing admin workload.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-dark-900/50" id="how-it-works">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={fadeIn}
            >
              <span className="gradient-text">How It Works</span>
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg"
              variants={fadeIn}
            >
              Our innovative approach combines user data, AI, and community verification to create the most accurate maps possible.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-500/20 hidden md:block"></div>
            
            <div className="space-y-12">
              <motion.div 
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold mb-3">Discover New Roads</h3>
                    <p className="text-gray-400">
                      As you travel, Raptee Maps automatically detects when you're on a road that doesn't exist in current maps.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center z-10 hidden md:flex">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                      alt="Discover New Roads" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                    <img 
                      src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                      alt="AI Verification" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center z-10 hidden md:flex">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-xl font-semibold mb-3">AI Verification</h3>
                    <p className="text-gray-400">
                      Our AI analyzes satellite imagery and your GPS data to confirm the existence of the road and classify its type.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold mb-3">Community Validation</h3>
                    <p className="text-gray-400">
                      Other users in the area are prompted to confirm the road's existence, creating a consensus-based verification system.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center z-10 hidden md:flex">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                      alt="Community Validation" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                    <img 
                      src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                      alt="Map Integration" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center z-10 hidden md:flex">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-xl font-semibold mb-3">Map Integration</h3>
                    <p className="text-gray-400">
                      Verified roads are automatically added to Raptee Maps and submitted to OpenStreetMap, improving maps for everyone.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={fadeIn}
            >
              <span className="gradient-text">Expected Impact</span>
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg"
              variants={fadeIn}
            >
              Raptee Maps is revolutionizing how maps are updated and maintained, with benefits for users and the broader community.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Improved Navigation",
                description: "Users get more accurate and up-to-date maps for their rides."
              },
              {
                title: "Reduced Admin Workload",
                description: "Automating road detection and verification minimizes manual effort."
              },
              {
                title: "Faster Map Updates",
                description: "Crowdsourced contributions enable real-time updates instead of waiting months."
              },
              {
                title: "Better Ride Planning",
                description: "Users can avoid bad roads and take optimized routes."
              },
              {
                title: "Increased Community Engagement",
                description: "Gamification and rewards encourage user participation."
              },
              {
                title: "Higher OpenStreetMap Accuracy",
                description: "Raptee helps improve OSM data for all users."
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-dark-900/80 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6"
                variants={fadeIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-900/50 relative">
        <div className="blue-glow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={fadeIn}
            >
              Ready to Explore with <span className="gradient-text">Raptee Maps</span>?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Join our community of explorers and help build the most accurate maps in the world.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={fadeIn}
            >
              <Link to="/signup" className="btn-primary text-center">
                Get Started Free
              </Link>
              <Link to="/contact" className="btn-outline text-center">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;