import { useState } from 'react';
import bohol from '../assets/bohol.webp';
import { 
  Search, 
  Map, 
  Calendar, 
  SlidersHorizontal, 
  Languages, 
  Thermometer, 
  Compass,
  ChevronRight,
  MapPin,
  Filter,
  Grid,
  List,
  X,
  Sparkles
} from 'lucide-react';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);

  const categories = [
    { id: 'all', label: 'All Destinations', icon: '🌎' },
    { id: 'trending', label: 'Trending Now', icon: '🔥' },
    { id: 'beaches', label: 'Beaches', icon: '🏖️' },
    { id: 'mountains', label: 'Mountains', icon: '⛰️' },
    { id: 'cultural', label: 'Cultural', icon: '🏛️' },
    { id: 'food', label: 'Food Spots', icon: '🍜' },
  ];

  // Example destination data
  const destinations = [
    {
      id: 1,
      name: 'Chocolate Hills, Bohol',
      image: bohol,
      category: 'trending',
      rating: 4.8,
      priceRange: '₱₱',
      weatherInfo: 'Sunny, 30°C',
      localTime: '10:30 AM',
      description: 'Famous geological formation consisting of symmetrical hills',
      activities: ['Sightseeing', 'Photography', 'Hiking'],
      language: 'Filipino, English',
      bestTime: 'Nov-Apr',
    },
    // Add more destinations...
  ];

  const DestinationCard = ({ destination, viewMode }) => (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-bold text-xl text-white mb-2">{destination.name}</h3>
          <div className="flex items-center gap-3 text-white/90 text-sm">
            <span className="flex items-center gap-1">
              <Thermometer className="w-4 h-4" />
              {destination.weatherInfo}
            </span>
            <span className="flex items-center gap-1">
              <Languages className="w-4 h-4" />
              {destination.language}
            </span>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white/95 px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          ⭐ {destination.rating}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-amber-500 font-medium">{destination.priceRange}</span>
          <span className="text-sm text-gray-500">Best time: {destination.bestTime}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{destination.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {destination.activities.map((activity, index) => (
            <span 
              key={index}
              className="bg-amber-50 text-amber-700 text-xs px-3 py-1 rounded-full flex items-center gap-1"
            >
              <Compass className="w-3 h-3" />
              {activity}
            </span>
          ))}
        </div>
        <button className="w-full bg-amber-500 text-white py-2.5 px-4 rounded-lg hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 font-medium">
          Explore More
        </button>
      </div>
    </div>
  );

  const handleSearchClear = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-[64px] md:pt-[80px] pb-[76px]">
      {/* Compact Header */}
      <div className="bg-white border-b sticky top-[64px] md:top-[80px] z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Enhanced Search Bar */}
            <div className="flex-1 relative w-full rounded-xl">
              <div className={`
                relative flex items-center transition-all duration-200 
              `}>
                <div className="absolute left-3 flex items-center gap-2 text-gray-400">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search destinations, activities, or places..."
                  className="w-full pl-11 pr-16 py-3 rounded-xl border-2 border-gray-100 
                    focus:border-amber-500 focus:outline-none bg-gray-50 focus:bg-white
                    transition-all duration-200"
                />
                <div className="absolute right-3 flex items-center gap-2">
                  {searchQuery && (
                    <button
                      onClick={handleSearchClear}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  )}
                  <div className="h-8 w-[1px] bg-gray-200"></div>
                  <button 
                    className="flex items-center gap-1 px-2 py-1 text-amber-600 hover:bg-amber-50 rounded-lg text-sm font-medium transition-colors"
                    title="AI Suggestions"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span className="hidden sm:inline">AI</span>
                  </button>
                </div>
              </div>

              {/* Search Suggestions - Show when focused and has query */}
              {isSearchFocused && searchQuery && (
                <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-20">
                  <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase">
                    Popular Searches
                  </div>
                  {['Boracay Beach', 'Chocolate Hills', 'Palawan Islands'].map((suggestion, index) => (
                    <button
                      key={index}
                      className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                    >
                      <Search className="w-4 h-4 text-gray-400" />
                      <span>{suggestion}</span>
                    </button>
                  ))}
                  <div className="px-3 py-2 mt-1 text-xs font-medium text-gray-500 uppercase border-t">
                    Categories
                  </div>
                  {['Beaches 🏖️', 'Mountains ⛰️', 'Cultural Sites 🏛️'].map((category, index) => (
                    <button
                      key={index}
                      className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                    >
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{category}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              {/* Primary Actions Group */}
              <div className="flex items-center gap-2 flex-1 md:flex-none">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 transition-colors flex-1 md:flex-none
                    ${showFilters 
                      ? 'border-amber-500 text-amber-500 bg-amber-50' 
                      : 'border-gray-200 text-gray-600 hover:border-amber-500 hover:text-amber-500'
                    }
                  `}
                >
                  <Filter className="w-4 h-4" />
                  <span className="font-medium">Filters</span>
                  {/* Optional: Add filter count badge */}
                  {activeFiltersCount > 0 && (
                    <span className="ml-1 px-2 py-0.5 text-xs bg-amber-500 text-white rounded-full">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>

                <button 
                  onClick={() => setShowMap(!showMap)}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 transition-colors whitespace-nowrap
                    ${showMap 
                      ? 'border-amber-500 text-amber-500 bg-amber-50' 
                      : 'border-gray-200 text-gray-600 hover:border-amber-500 hover:text-amber-500'
                    }
                  `}
                >
                  <Map className="w-4 h-4" />
                  <span className="font-medium hidden sm:inline">View Map</span>
                </button>
              </div>

              {/* View Toggle Group */}
              <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden bg-white">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`
                    p-2.5 transition-colors
                    ${viewMode === 'grid' 
                      ? 'bg-amber-50 text-amber-500' 
                      : 'text-gray-500 hover:bg-gray-50'
                    }
                  `}
                  title="Grid View"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <div className="w-[1px] h-6 bg-gray-200"></div>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`
                    p-2.5 transition-colors
                    ${viewMode === 'list' 
                      ? 'bg-amber-50 text-amber-500' 
                      : 'text-gray-500 hover:bg-gray-50'
                    }
                  `}
                  title="List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Sort Dropdown - Optional */}
              <select className="hidden md:block px-4 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 hover:border-amber-500 transition-colors cursor-pointer">
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Filter Panel - Slides down when showFilters is true */}
          {showFilters && (
            <div className="py-4 border-t mt-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Price Range</label>
                  <select className="px-3 py-2 rounded-lg border border-gray-200">
                    <option>Any Price</option>
                    <option>₱ Budget</option>
                    <option>₱₱ Mid-Range</option>
                    <option>₱₱₱ Luxury</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Rating</label>
                  <select className="px-3 py-2 rounded-lg border border-gray-200">
                    <option>Any Rating</option>
                    <option>4.5+</option>
                    <option>4.0+</option>
                    <option>3.5+</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Activities</label>
                  <select className="px-3 py-2 rounded-lg border border-gray-200">
                    <option>All Activities</option>
                    <option>Beach</option>
                    <option>Hiking</option>
                    <option>Cultural</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-2 transition-colors ${
                activeFilter === category.id
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Results Count & Sort */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            <span className="font-medium">123</span> destinations found
          </p>
          <select className="px-3 py-2 rounded-lg border border-gray-200 text-sm">
            <option>Most Popular</option>
            <option>Highest Rated</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* Destinations Grid/List */}
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "flex flex-col gap-6"
        }>
          {destinations.map((destination) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination}
              viewMode={viewMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore; 