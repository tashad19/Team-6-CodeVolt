import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Users, Target, Compass, Award, ArrowRight } from 'lucide-react';
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

const About: React.FC = () => {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="blue-glow absolute top-1/3 left-1/4"></div>
        <div className="blue-glow blue-glow-lg absolute bottom-1/3 right-1/4"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeIn}
            >
              About <span className="gradient-text">Raptee Maps</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              We're on a mission to create the most accurate, up-to-date maps through the power of community and artificial intelligence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-dark-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Raptee Maps was born out of frustration with outdated mapping solutions. Our founders, avid travelers and technology enthusiasts, frequently encountered inaccurate navigation due to missing or outdated roads, especially in rapidly developing areas.
              </p>
              <p className="text-gray-300 mb-6">
                They realized that the traditional approach to map updates—relying on dedicated teams or sporadic community contributions—couldn't keep pace with the rate of change in our physical infrastructure.
              </p>
              <p className="text-gray-300">
                In 2023, they set out to create a solution that would harness the power of everyday users, combined with cutting-edge AI, to create a self-updating map system that grows more accurate with every journey.
              </p>
            </motion.div>
            <motion.div 
              className="relative"
              variants={fadeIn}
            >
              <div className="blue-glow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Raptee Maps Team" 
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="card relative overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="blue-glow blue-glow-sm absolute -bottom-20 -left-20"></div>
              <div className="p-8 relative z-10">
                <div className="bg-primary-500/20 p-3 rounded-lg inline-block mb-4">
                  <Target className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300 mb-4">
                  To democratize map creation and maintenance by empowering users to contribute to and benefit from the most accurate, up-to-date mapping system in the world.
                </p>
                <p className="text-gray-300">
                  We believe that the best maps are created by the people who use them every day, and we're building the technology to make that possible at scale.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="card relative overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="blue-glow blue-glow-sm absolute -top-20 -right-20"></div>
              <div className="p-8 relative z-10">
                <div className="bg-primary-500/20 p-3 rounded-lg inline-block mb-4">
                  <Compass className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-300 mb-4">
                  A world where no one gets lost due to outdated maps, where every road, path, and trail is accurately represented, and where communities collaborate to maintain the digital representation of our physical world.
                </p>
                <p className="text-gray-300">
                  We envision Raptee Maps becoming the foundation for the next generation of location-based services, autonomous vehicles, and smart cities.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-dark-900/50">
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
              Our <span className="gradient-text">Values</span>
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg"
              variants={fadeIn}
            >
              The principles that guide our work and shape our product.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Community First",
                description: "We believe in the power of community and build our product to serve and empower our users."
              },
              {
                title: "Accuracy & Reliability",
                description: "We're committed to providing the most accurate and reliable mapping data possible."
              },
              {
                title: "Innovation",
                description: "We continuously push the boundaries of what's possible with mapping technology."
              },
              {
                title: "Accessibility",
                description: "We strive to make our product accessible to everyone, regardless of technical expertise."
              },
              {
                title: "Transparency",
                description: "We're open about how our system works and how we use data to improve our maps."
              },
              {
                title: "Sustainability",
                description: "We build for the long term, with a focus on creating a sustainable mapping ecosystem."
              }
            ].map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-xl p-6"
                variants={fadeIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-300">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="gradient-text">Team</span>
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg"
              variants={fadeIn}
            >
              The passionate individuals behind Raptee Maps.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Samantha Lee",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Michael Chen",
                role: "Head of AI",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Priya Sharma",
                role: "Lead Developer",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "David Wilson",
                role: "UX Designer",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Emma Rodriguez",
                role: "Community Manager",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
              }
            ].map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-dark-900/80 backdrop-blur-sm border border-dark-700/50 rounded-xl overflow-hidden"
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Us CTA */}
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
              Join the <span className="gradient-text">Raptee Maps</span> Community
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Be part of the revolution in mapping technology. Help us build a more accurate world, one road at a time.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={fadeIn}
            >
              <Link to="/signup" className="btn-primary text-center">
                Get Started Free
              </Link>
              <Link to="/careers" className="btn-outline text-center">
                Join Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;