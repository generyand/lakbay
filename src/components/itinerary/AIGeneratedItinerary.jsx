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
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative h-48 md:h-64 mb-6 rounded-2xl overflow-hidden">
        <img
          src={Cebu}
          alt={itinerary.summary.destination}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {itinerary.summary.destination}
          </h1>
          <p className="text-white/90">{itinerary.summary.duration}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header Actions */}
        <div className="p-4 md:p-6 flex items-center justify-end gap-2 border-b">
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <Share2 className="w-4 h-4" />
            <span className="hidden md:inline">Share</span>
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <Download className="w-4 h-4" />
            <span className="hidden md:inline">Download</span>
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <Printer className="w-4 h-4" />
            <span className="hidden md:inline">Print</span>
          </button>
        </div>

        {/* Trip Summary Cards */}
        <div className="p-4 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Calendar, label: "Duration", value: itinerary.summary.duration },
            { icon: DollarSign, label: "Budget", value: itinerary.summary.budget },
            { icon: Sun, label: "Weather", value: itinerary.summary.weather },
            { icon: Clock, label: "Best Time", value: itinerary.summary.bestTime },
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-xl">
              <item.icon className="w-5 h-5 text-amber-500 mb-2" />
              <div className="space-y-1">
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="font-medium text-gray-900">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Tips Section */}
        <div className="p-4 md:p-6 bg-gradient-to-r from-amber-50 to-amber-100/30">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-amber-100 rounded-lg shrink-0">
              <AlertCircle className="w-5 h-5 text-amber-600" />
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">AI Travel Tips</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

        {/* Daily Itinerary */}
        <div className="p-4 md:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Schedule</h3>
          <div className="space-y-4">
            {itinerary.days.map((day) => (
              <div key={day.day} className="border rounded-xl overflow-hidden transition-all duration-200 hover:border-amber-200">
                <button
                  onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                  className="w-full flex items-center justify-between p-4 hover:bg-amber-50/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-500 font-bold">
                      {day.day}
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium text-gray-900">{day.title}</h4>
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

                {/* Activity Timeline */}
                {expandedDay === day.day && (
                  <div className="p-4 border-t bg-gray-50">
                    <div className="space-y-6">
                      {day.activities.map((activity, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="relative">
                            <div className="w-2 h-2 bg-amber-500 rounded-full absolute left-3 top-2" />
                            <div className="text-sm font-medium text-gray-500 w-16">
                              {activity.time}
                            </div>
                          </div>
                          <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                            <h5 className="font-medium text-gray-900 mb-2">
                              {activity.title}
                            </h5>
                            <p className="text-gray-600 text-sm mb-3">
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
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Accommodation Section */}
        <div className="p-6 border-t">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Accommodations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(itinerary.accommodation).map((hotel, index) => (
              <div key={index} className="border rounded-xl p-4">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.map((amenity, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-amber-500 text-white py-2 rounded-lg font-medium hover:bg-amber-600 transition-colors">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Transportation Section */}
        <div className="p-6 border-t">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Transportation Guide</h3>
          <div className="space-y-4">
            {itinerary.transportation.recommendations.map((transport, index) => (
              <div key={index} className="border rounded-xl p-4">
                <h4 className="font-medium text-gray-900 mb-3">{transport.type}</h4>
                <div className="space-y-2">
                  {transport.options.map((option, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
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
  );
} 