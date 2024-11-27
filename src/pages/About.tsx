import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Users, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description: "Pioneering advanced AI solutions that shape the future."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Ethics",
    description: "Commitment to responsible and transparent AI development."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaboration",
    description: "Working closely with clients to deliver tailored solutions."
  }
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & AI Strategy Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    bio: "Leading expert in AI implementation and digital transformation."
  },
  {
    name: "Michael Roberts",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    bio: "Pioneering AI solutions with over 15 years of experience."
  },
  {
    name: "Emma Thompson",
    role: "Head of Training",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    bio: "Expert in AI education and professional development."
  }
];

export default function About() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div 
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative h-screen"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2940')",
            opacity: 0.9
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            About I AM'AI
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-light">
            Innovating the Future with Responsible AI Solutions
          </p>
          <Link
            to="#team"
            className="px-8 py-4 bg-white text-black rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            Meet Our Team
          </Link>
        </div>
      </motion.div>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At I AM'AI, we are dedicated to empowering society through ethical and effective 
              AI solutions, helping businesses, individuals, and public organizations navigate 
              the digital transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts behind I AM'AI's innovative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Shaping the Future of AI</h2>
          <p className="text-xl mb-12 opacity-80">
            Partner with us to transform your organization through innovative AI solutions
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full hover:bg-opacity-90 transition-all duration-300 text-lg"
          >
            Contact Us <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}