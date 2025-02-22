import { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Plus,
  Heart,
  Share2,
  Download,
  Filter,
  ChevronDown,
  Star,
  Navigation,
  ChevronLeft
} from 'lucide-react';
import Cebu from '../assets/cebu.jpg';
import Siargao from '../assets/siargao.webp';
import Bohol from '../assets/bohol.webp';
import AIItineraryGenerator from '../components/itinerary/AIItineraryGenerator';

function Itinerary() {
  const [duration, setDuration] = useState('3');
  const [travelStyle, setTravelStyle] = useState('adventure');
  const [showGenerator, setShowGenerator] = useState(false);

  const sampleItineraries = [
    {
      id: 1,
      title: "Cebu Adventure Escape",
      duration: "3 Days",
      rating: 4.9,
      reviews: 128,
      image: Cebu,
      locations: ["Cebu City", "Moalboal", "Oslob"],
      activities: ["Island Hopping", "Canyoneering", "Whale Shark Watching"],
      price: "₱12,500",
      tags: ["Adventure", "Nature", "Marine Life"]
    },
    {
      id: 2,
      title: "Siargao Island Paradise",
      duration: "5 Days",
      rating: 4.8,
      reviews: 96,
      image: Siargao,
      locations: ["Cloud 9", "Sugba Lagoon", "Sohoton Cove"],
      activities: ["Surfing", "Island Hopping", "Lagoon Visit"],
      price: "₱15,800",
      tags: ["Surfing", "Island Life", "Photography"]
    },
    {
      id: 3,
      title: "Bohol Cultural Journey",
      duration: "4 Days",
      rating: 4.7,
      reviews: 112,
      image: Bohol,
      locations: ["Chocolate Hills", "Panglao", "Loboc River"],
      activities: ["Tarsier Sanctuary", "River Cruise", "Beach Hopping"],
      price: "₱13,900",
      tags: ["Culture", "Nature", "Heritage"]
    }
  ];

  if (showGenerator) {
    return (
      <main className="max-w-7xl mx-auto pt-24 px-4 pb-20">
        <button
          onClick={() => setShowGenerator(false)}
          className="flex items-center gap-2 text-gray-600 hover:text-amber-500 mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Itineraries
        </button>
        <AIItineraryGenerator />
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto pt-24 px-4 pb-20">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm font-medium">
            <span className="flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              AI Trip Planner
            </span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Smart Itinerary Generator</h1>
        <p className="text-gray-600">Create your perfect Philippine adventure with AI-powered recommendations</p>
      </div>

      {/* Trip Preferences Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Customize Your Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
            <div className="relative">
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 rounded-xl py-3 px-4 pr-10 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              >
                <option value="3">3 Days</option>
                <option value="5">5 Days</option>
                <option value="7">7 Days</option>
                <option value="10">10 Days</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Travel Style</label>
            <div className="relative">
              <select
                value={travelStyle}
                onChange={(e) => setTravelStyle(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 rounded-xl py-3 px-4 pr-10 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              >
                <option value="adventure">Adventure</option>
                <option value="relaxation">Relaxation</option>
                <option value="cultural">Cultural</option>
                <option value="foodie">Foodie</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <button 
              onClick={() => setShowGenerator(true)}
              className="w-full bg-amber-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Generate Custom Itinerary
            </button>
          </div>
        </div>
      </div>

      {/* Recommended Itineraries */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Recommended Itineraries</h2>
          <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleItineraries.map((itinerary) => (
            <div key={itinerary.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
              {/* Itinerary Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={itinerary.image}
                  alt={itinerary.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Itinerary Details */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-gray-600">{itinerary.duration}</span>
                  <div className="flex items-center gap-1 ml-auto">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="text-sm font-medium">{itinerary.rating}</span>
                    <span className="text-sm text-gray-500">({itinerary.reviews})</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">{itinerary.title}</h3>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <p className="text-sm text-gray-600">{itinerary.locations.join(" • ")}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Navigation className="w-5 h-5 text-gray-400 mt-0.5" />
                    <p className="text-sm text-gray-600">{itinerary.activities.join(" • ")}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {itinerary.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-lg font-semibold text-amber-500">{itinerary.price}</p>
                  </div>
                  <button className="bg-amber-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-600 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-12">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Itinerary?</h3>
            <p className="mb-6 text-white/90">Let our AI create a personalized travel plan based on your preferences</p>
            <button className="bg-white text-amber-500 px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
              Start Planning
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Itinerary; 