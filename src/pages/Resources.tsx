import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Search,
  Download,
  Play,
  ArrowRight,
  FileText,
  BookOpen,
  Video,
  Newspaper
} from 'lucide-react';

const guides = [
  {
    title: "AI Implementation Guide",
    description: "A comprehensive guide for implementing AI across different industries",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    downloadLink: "#"
  },
  {
    title: "Business Transformation Toolkit",
    description: "Essential resources for modernizing your business with AI",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    downloadLink: "#"
  },
  {
    title: "AI Ethics Framework",
    description: "Guidelines for responsible AI implementation",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    downloadLink: "#"
  }
];

const caseStudies = [
  {
    title: "Municipal Services Optimization",
    description: "How AI reduced operational costs by 30% and improved citizen engagement",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    link: "/case-studies/municipal-services"
  },
  {
    title: "Employment Training Success",
    description: "Achieving 85% job placement rate through AI training programs",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    link: "/case-studies/employment-training"
  }
];

const webinars = [
  {
    title: "AI for Business Leaders",
    description: "Understanding AI fundamentals and implementation strategies",
    duration: "45 minutes",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Digital Transformation Journey",
    description: "Real-world examples of successful AI implementation",
    duration: "60 minutes",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  }
];

const articles = [
  {
    title: "The Future of AI in Public Services",
    description: "Exploring how AI is revolutionizing government services",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "AI-Driven Business Growth",
    description: "How small businesses are leveraging AI for success",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
  }
];

const resourceTypes = ['All', 'Guides', 'Case Studies', 'Webinars', 'Articles'];

export default function Resources() {
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
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
            AI Learning Resources
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-light">
            Discover guides, case studies, and educational content to enhance your AI expertise
          </p>
          <button className="px-8 py-4 bg-white text-black rounded-full hover:bg-opacity-90 transition-all duration-300">
            Access All Resources
          </button>
        </div>
      </motion.div>

      {/* Search and Filter Section */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              {resourceTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedType === type
                      ? 'bg-black text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Guides & eBooks */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Guides & eBooks</h2>
            <Link to="/resources/guides" className="text-blue-600 hover:text-blue-700">
              View All <ArrowRight className="inline-block w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{guide.title}</h3>
                    <p className="text-gray-200 mb-4">{guide.description}</p>
                    <button className="flex items-center text-white">
                      <Download className="w-5 h-5 mr-2" />
                      Download Guide
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Case Studies</h2>
            <Link to="/resources/case-studies" className="text-blue-600 hover:text-blue-700">
              View All <ArrowRight className="inline-block w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-200 mb-4">{study.description}</p>
                    <Link
                      to={study.link}
                      className="inline-flex items-center text-white"
                    >
                      Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Webinars & Videos */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Webinars & Videos</h2>
            <Link to="/resources/webinars" className="text-blue-600 hover:text-blue-700">
              View All <ArrowRight className="inline-block w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {webinars.map((webinar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative">
                  <img
                    src={webinar.thumbnail}
                    alt={webinar.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-black ml-1" />
                    </button>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 mb-2">{webinar.description}</p>
                  <p className="text-sm text-gray-500">Duration: {webinar.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Articles */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <Link to="/resources/articles" className="text-blue-600 hover:text-blue-700">
              View All <ArrowRight className="inline-block w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-500">{article.date}</p>
                  <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600">{article.description}</p>
                  <Link
                    to="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-black text-white rounded-2xl overflow-hidden">
          <div className="p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Our Latest Resources
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest AI insights, guides, and case studies
              delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}