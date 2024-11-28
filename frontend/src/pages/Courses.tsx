import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, Users, Star } from 'lucide-react';

const allCourses = [
  {
    title: "AI Fundamentals",
    category: "Beginner",
    level: "Beginner",
    duration: "8 weeks",
    rating: 4.9,
    students: 1234,
    price: "$399",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Machine Learning Essentials",
    category: "Intermediate",
    level: "Intermediate",
    duration: "10 weeks",
    rating: 4.8,
    students: 892,
    price: "$599",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Advanced AI Implementation",
    category: "Advanced",
    level: "Advanced",
    duration: "12 weeks",
    rating: 4.9,
    students: 756,
    price: "$799",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Deep Learning Basics",
    category: "Beginner",
    level: "Beginner",
    duration: "6 weeks",
    rating: 4.7,
    students: 543,
    price: "$299",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Neural Networks Mastery",
    category: "Advanced",
    level: "Advanced",
    duration: "14 weeks",
    rating: 4.9,
    students: 421,
    price: "$899",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400"
  }
];

const categories = ["All Courses", "Beginner", "Intermediate", "Advanced"];

export default function Courses() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter courses based on category and search query
  const filteredCourses = allCourses.filter(course => {
    const matchesCategory = selectedCategory === "All Courses" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
            backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2940')",
            opacity: 0.9
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Explore Our AI Courses
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-light">
            Choose from a wide range of courses designed for every skill level
          </p>
          <Link
            to="#courses"
            className="px-8 py-4 bg-white text-black rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            View All Courses
          </Link>
        </div>
      </motion.div>

      {/* Course Catalog */}
      <div id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="relative w-full md:w-auto mb-4 md:mb-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-80 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center px-4 py-2 border rounded-full hover:bg-gray-100">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border transition ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'hover:bg-gray-100 border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.level}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-gray-600">{course.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-1" />
                      {course.students}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-1" />
                      {course.duration}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    <Link
                      to={`/courses/${index}`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your AI Journey?</h2>
          <p className="text-xl mb-12 opacity-80">
            Join our community of learners and master AI skills at your own pace
          </p>
          <Link
            to="/enroll"
            className="px-8 py-4 bg-white text-black rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}