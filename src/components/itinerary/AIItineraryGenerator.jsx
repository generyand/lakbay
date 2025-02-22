import { useState } from 'react';
import {
  Calendar,
  Users,
  Wallet,
  Sparkles,
  Heart,
  Plane,
  Utensils,
  Hotel,
  Map,
  Camera,
  Activity,
  Sun,
  Umbrella,
  ChevronDown,
  Loader
} from 'lucide-react';
import AIGeneratedItinerary from './AIGeneratedItinerary';

function AIItineraryGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    startDate: '',
    duration: '3',
    travelers: '2',
    budget: 'medium',
    interests: [],
    pace: 'moderate',
    accommodation: 'mid-range',
    transportation: 'public',
    dietaryRestrictions: [],
    specialRequests: ''
  });
  const [showGenerated, setShowGenerated] = useState(true);

  const interests = [
    { id: 'beaches', label: 'Beaches', icon: Umbrella },
    { id: 'culture', label: 'Culture & Heritage', icon: Map },
    { id: 'food', label: 'Food & Dining', icon: Utensils },
    { id: 'adventure', label: 'Adventure', icon: Activity },
    { id: 'nature', label: 'Nature', icon: Sun },
    { id: 'photography', label: 'Photography', icon: Camera }
  ];

  const handleInterestToggle = (interestId) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsGenerating(false);
      setShowGenerated(true);
    }, 3000);
  };

  if (showGenerated) {
    return <AIGeneratedItinerary formData={formData} />;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <h2 className="text-xl font-semibold text-gray-900">AI Itinerary Generator</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Trip Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Days
              </label>
              <select
                value={formData.duration}
                onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              >
                {[3, 5, 7, 10, 14].map(days => (
                  <option key={days} value={days}>{days} Days</option>
                ))}
              </select>
            </div>
          </div>

          {/* Travelers and Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Travelers
              </label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  min="1"
                  value={formData.travelers}
                  onChange={(e) => setFormData(prev => ({ ...prev, travelers: e.target.value }))}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Level
              </label>
              <div className="relative">
                <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                >
                  <option value="budget">Budget Friendly</option>
                  <option value="medium">Mid-Range</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              What interests you? (Select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {interests.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleInterestToggle(id)}
                  className={`flex items-center gap-2 p-3 rounded-xl border ${
                    formData.interests.includes(id)
                      ? 'border-amber-500 bg-amber-50 text-amber-600'
                      : 'border-gray-200 hover:border-amber-500 hover:bg-amber-50'
                  } transition-colors`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Travel Preferences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Travel Pace
              </label>
              <select
                value={formData.pace}
                onChange={(e) => setFormData(prev => ({ ...prev, pace: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              >
                <option value="relaxed">Relaxed</option>
                <option value="moderate">Moderate</option>
                <option value="intensive">Intensive</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Accommodation
              </label>
              <select
                value={formData.accommodation}
                onChange={(e) => setFormData(prev => ({ ...prev, accommodation: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              >
                <option value="budget">Budget/Hostel</option>
                <option value="mid-range">Mid-Range Hotels</option>
                <option value="luxury">Luxury Resorts</option>
              </select>
            </div>
          </div>

          {/* Special Requirements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Any special requests or requirements?
            </label>
            <textarea
              value={formData.specialRequests}
              onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
              placeholder="E.g., accessibility needs, dietary restrictions, specific activities you'd like to include..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 h-32"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isGenerating}
            className="w-full bg-amber-500 text-white py-4 rounded-xl font-medium hover:bg-amber-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Generating Your Perfect Itinerary...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate AI Itinerary
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AIItineraryGenerator; 