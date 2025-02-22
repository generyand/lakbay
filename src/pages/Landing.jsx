import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Globe,
  MessageSquare,
  Map,
  ArrowRight,
  Star,
  CheckCircle2,
  ChevronRight,
  Terminal,
  Zap
} from 'lucide-react';
import Cebu from '../assets/cebu.jpg';
import Siargao from '../assets/siargao.webp';
import Bohol from '../assets/bohol.webp';
import { motion } from 'framer-motion';

export default function Landing() {
  const [typedText, setTypedText] = useState('');
  const [currentDestination, setCurrentDestination] = useState(0);
  const destinations = ["Cebu", "Bohol", "Siargao", "Palawan"];
  
  // Typing animation effect
  useEffect(() => {
    const text = "Discover Philippines";
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Rotating destinations
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % destinations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Globe,
      title: "AI-Powered Translation",
      description: "Real-time translation for seamless communication with locals in any Philippine language."
    },
    {
      icon: Map,
      title: "Smart Itinerary Planning",
      description: "Personalized travel plans optimized for your preferences, time, and budget."
    },
    {
      icon: MessageSquare,
      title: "Local Insights",
      description: "Get authentic recommendations and cultural tips from our AI-powered local guide."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Solo Traveler",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "This app made my Philippine adventure so much easier! The translation feature helped me connect with locals.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "Family Vacation",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      content: "The itinerary planner is incredible. It created a perfect family-friendly schedule for us.",
      rating: 5
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with proper nav spacing */}
      <div className="relative min-h-screen pt-[72px] flex items-center overflow-hidden bg-gray-900">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Modern Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          {/* Gradient Spheres - Adjusted positioning */}
          <div className="absolute top-1/3 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-amber-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-500/30 rounded-full blur-3xl" />
        </div>

        {/* Main Content - Adjusted spacing */}
        <div className="relative z-10 w-full py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 md:space-y-8"
              >
                {/* AI Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-purple-500/10 border border-amber-500/20 backdrop-blur-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <span className="text-xs md:text-sm font-medium text-amber-400">AI-Powered Travel Assistant</span>
                </motion.div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    <span className="block">{typedText}</span>
                    <span className="block mt-2 bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl">
                      {destinations[currentDestination]}
                    </span>
                  </h1>
                  <p className="text-base md:text-lg text-gray-300 max-w-lg">
                    Experience the Philippines like never before with our AI-powered travel companion. 
                    Smart planning, local insights, and real-time assistance.
                  </p>
                </div>

                {/* Feature Pills */}
                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-3">
                  {[
                    { icon: Globe, text: '24/7 AI Assistant' },
                    { icon: Map, text: 'Smart Planning' },
                    { icon: MessageSquare, text: 'Local Insights' }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                      <feature.icon className="w-3 h-3 md:w-4 md:h-4 text-amber-400" />
                      <span className="text-xs md:text-sm text-white whitespace-nowrap">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      to="/itinerary"
                      className="group flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 w-full sm:w-auto px-6 py-3 rounded-xl text-white font-medium shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all"
                    >
                      Start Planning
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      to="/demo"
                      className="group flex items-center justify-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm w-full sm:w-auto px-6 py-3 rounded-xl text-white font-medium hover:bg-white/10 transition-all"
                    >
                      Watch Demo
                      <Terminal className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column - Visual Element */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative order-first lg:order-last"
              >
                <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto lg:mx-0">
                  {/* Main Image */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src={Cebu}
                      alt="Cebu Destination"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    {/* AI Analysis Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 backdrop-blur-sm bg-black/30">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs md:text-sm text-white font-medium">AI Analyzing Destination</span>
                      </div>
                      <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-amber-400"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Background Cards */}
                  <div className="absolute inset-0 -z-10 transform translate-x-4 translate-y-4 hidden md:block">
                    <div className="w-full h-full bg-amber-500/20 rounded-2xl" />
                  </div>
                  <div className="absolute inset-0 -z-20 transform translate-x-8 translate-y-8 hidden md:block">
                    <div className="w-full h-full bg-purple-500/20 rounded-2xl" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Features Section with Interactive Cards */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-600 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Powered by Advanced AI</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Experience Smart Travel
            </h2>
            <p className="text-lg text-gray-600">
              Our AI-powered features make your Philippine adventure smoother and more enjoyable.
            </p>
          </div>

          {/* Interactive Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Destinations Showcase with Hover Effects */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-gray-600">
              Discover the beauty of the Philippines through our curated destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { image: Cebu, name: "Cebu", description: "Historical sites & beaches" },
              { image: Siargao, name: "Siargao", description: "Surfing paradise" },
              { image: Bohol, name: "Bohol", description: "Natural wonders" }
            ].map((destination, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden">
                <div className="aspect-[4/3]">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {destination.name}
                  </h3>
                  <p className="text-white/90">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Testimonials Carousel */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Traveler Stories
            </h2>
            <p className="text-lg text-gray-600">
              See what other travelers are saying about their experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="py-24 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Start Your Philippine Adventure?
          </h2>
          <Link
            to="/itinerary"
            className="group inline-flex items-center gap-2 bg-white text-amber-500 px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-all transform hover:-translate-y-1"
          >
            Plan Your Trip Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
} 