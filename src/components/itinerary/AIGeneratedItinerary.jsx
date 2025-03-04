import { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Utensils,
  Hotel,
  Car,
  DollarSign,
  Sun,
  Cloud,
  Umbrella,
  AlertCircle,
  Share2,
  Download,
  Printer,
  ChevronDown,
  ChevronUp,
  Navigation
} from 'lucide-react';
import Cebu from '../../assets/cebu.jpg';

export default function AIGeneratedItinerary({ formData }) {
  const [expandedDay, setExpandedDay] = useState(1);
  
  const itinerary = {
    summary: {
      destination: "Cebu - Bohol Adventure",
      duration: "5 Days",
      budget: "₱25,000 per person",
      weather: "Mostly sunny, 24-32°C",
      bestTime: "Early morning activities recommended",
      travelTips: [
        "Bring reef-safe sunscreen",
        "Carry cash for local markets",
        "Book whale shark tours in advance",
        "Respect marine life guidelines"
      ]
    },
    days: [
      {
        day: 1,
        title: "Cebu City Heritage & Culture",
        weather: "Sunny, 30°C",
        activities: [
          {
            time: "08:00 AM",
            title: "Historical Walking Tour",
            description: "Start at Magellan's Cross, visit Basilica del Santo Niño, and explore Fort San Pedro",
            duration: "3 hours",
            tips: "Wear comfortable walking shoes, bring water",
            image: Cebu,
          },
          {
            time: "12:00 PM",
            title: "Local Cuisine Experience",
            description: "Lunch at Zubuchon - Anthony Bourdain's recommended lechon place",
            duration: "1.5 hours",
            cost: "₱500-700 per person",
            mustTry: ["Lechon Cebu", "Ngohiong", "Pusit Bisaya"]
          },
          // ... more activities
        ]
      },
      {
        day: 2,
        title: "Moalboal Ocean Adventure",
        weather: "Partly cloudy, 28°C",
        activities: [
          {
            time: "06:00 AM",
            title: "Sardine Run Experience",
            description: "Witness millions of sardines in their natural habitat",
            duration: "2 hours",
            cost: "₱1,500 including gear rental",
            tips: "Basic swimming skills required"
          },
          // ... more activities
        ]
      },
      // ... more days
    ],
    accommodation: {
      cebu: {
        name: "Citadines Cebu City",
        type: "4-star hotel",
        location: "Baseline Center, Cebu City",
        price: "₱4,500/night",
        amenities: ["Pool", "Gym", "Free WiFi", "Restaurant"],
        bookingLink: "#"
      },
      moalboal: {
        name: "Ocean Bay Beach Resort",
        type: "Beachfront Resort",
        location: "Panagsama Beach, Moalboal",
        price: "₱3,500/night",
        amenities: ["Beach Access", "Diving Center", "Restaurant"],
        bookingLink: "#"
      }
    },
    transportation: {
      recommendations: [
        {
          type: "Airport to City",
          options: ["Grab (₱250-300)", "Airport Taxi (₱300-350)", "MyBus (₱50)"]
        },
        {
          type: "Cebu to Moalboal",
          options: ["Private Van (₱3,500)", "Bus (₱150/person)"]
        }
      ]
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-2">
      {/* Hero Section - Full bleed on mobile */}
      <div className="relative h-64 md:h-80 -mx-4 md:mx-0 md:rounded-2xl overflow-hidden mb-6 rounded-xl">
        <img
          src={Cebu}
          alt={itinerary.summary.destination}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
            {itinerary.summary.destination}
          </h1>
          <div className="flex items-center gap-2 text-white/90">
            <Clock className="w-4 h-4" />
            <span className="text-lg">{itinerary.summary.duration}</span>
          </div>
        </div>
      </div>

      {/* Quick Actions - Floating card style */}
      <div className="sticky top-0 -mx-4 md:mx-0 bg-white/90 backdrop-blur-md shadow-lg shadow-gray-100/50 md:rounded-xl z-20 mb-6">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-600">Quick Actions:</span>
          </div>
          <div className="flex items-center gap-2">
            {[
              { icon: Share2, label: "Share" },
              { icon: Download, label: "Download" },
              { icon: Printer, label: "Print" }
            ].map((action, index) => (
              <button 
                key={index}
                className="p-2 text-gray-600 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                <action.icon className="w-5 h-5" />
                <span className="hidden md:inline text-sm">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Trip Summary Cards - Modern floating cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Calendar, label: "Duration", value: itinerary.summary.duration },
            { icon: DollarSign, label: "Budget", value: itinerary.summary.budget },
            { icon: Sun, label: "Weather", value: itinerary.summary.weather },
            { icon: Clock, label: "Best Time", value: itinerary.summary.bestTime },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all duration-200">
              <item.icon className="w-5 h-5 text-amber-500 mb-3" />
              <div>
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-sm font-medium text-gray-900 line-clamp-2">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Tips Section - Modern gradient card */}
        <div className="bg-gradient-to-br from-amber-50 via-amber-50/50 to-white rounded-xl p-6 shadow-lg shadow-amber-100/50">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg shadow-amber-500/20">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">AI Travel Tips</h3>
              <ul className="grid gap-3 md:grid-cols-2">
                {itinerary.summary.travelTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2" />
                    <span className="text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Daily Itinerary - Modern card with smooth interactions */}
        <div className="bg-white rounded-xl shadow-lg shadow-gray-100/50 overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900">Daily Schedule</h3>
          </div>
          
          <div className="divide-y divide-gray-100">
            {itinerary.days.map((day) => (
              <div key={day.day} className="transition-all duration-200">
                <button
                  onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50/80 transition-colors"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-100 text-amber-500 font-bold">
                      {day.day}
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium text-gray-900 mb-0.5">{day.title}</h4>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Sun className="w-4 h-4" />
                        {day.weather}
                      </p>
                    </div>
                  </div>
                  {expandedDay === day.day ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {expandedDay === day.day && (
                  <div className="p-6 bg-gray-50/50 space-y-4">
                    {day.activities.map((activity, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="relative">
                          <div className="w-2 h-2 bg-amber-500 rounded-full absolute left-2.5 top-2" />
                          <div className="text-sm font-medium text-gray-500 w-14 md:w-16">
                            {activity.time}
                          </div>
                        </div>
                        <div className="flex-1 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-200">
                          <h5 className="font-medium text-gray-900 mb-2">
                            {activity.title}
                          </h5>
                          <p className="text-sm text-gray-600 mb-3">
                            {activity.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {activity.duration && (
                              <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600">
                                <Clock className="w-3 h-3" />
                                {activity.duration}
                              </span>
                            )}
                            {activity.cost && (
                              <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600">
                                <DollarSign className="w-3 h-3" />
                                {activity.cost}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Accommodation Section - Modern floating cards */}
        <div className="bg-white rounded-xl shadow-lg shadow-gray-100/50 overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900">Where to Stay</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="grid gap-4 md:grid-cols-2">
              {Object.values(itinerary.accommodation).map((hotel, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all duration-200 p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{hotel.name}</h4>
                      <p className="text-sm text-gray-500">{hotel.type}</p>
                    </div>
                    <span className="text-amber-500 font-medium">{hotel.price}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>{hotel.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {hotel.amenities.map((amenity, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-amber-500 text-white py-2.5 rounded-lg font-medium hover:bg-amber-600 transition-colors shadow-sm">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transportation Section - Modern cards */}
        <div className="bg-white rounded-xl shadow-lg shadow-gray-100/50 overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900">Getting Around</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-4">
              {itinerary.transportation.recommendations.map((transport, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-4">
                  <h4 className="font-medium text-gray-900 mb-3">{transport.type}</h4>
                  <div className="space-y-2">
                    {transport.options.map((option, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Car className="w-4 h-4" />
                        <span>{option}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 