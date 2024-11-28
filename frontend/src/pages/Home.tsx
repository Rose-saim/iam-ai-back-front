import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Building2, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4"
        >
          <h1 className="text-6xl md:text-8xl whitespace-pre-line font-bold mb-6 tracking-tight">
            {`Welcome to\nI AM'AI`}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-light">
            Empowering the future with responsible AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              to="/get-started"
              className="group inline-flex items-center px-8 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition transform hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI solutions for every sector
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-6 h-6" />,
                title: 'Business Solutions',
                description:
                  'Transform your business with AI-powered tools and training.',
                link: '/services/b2b',
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Individual Training',
                description:
                  'Master AI skills with personalized learning programs.',
                link: '/services/b2c',
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: 'Government Services',
                description:
                  'Enhance public services with innovative AI solutions.',
                link: '/services/b2g',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 hover:gap-2 transition-all group"
                >
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform with AI?
          </h2>
          <p className="text-xl mb-12 opacity-80">
            Join us in shaping the future of artificial intelligence
          </p>
          <Link
            to="/get-started"
            className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
