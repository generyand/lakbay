import { 
  Search,
  Building2, // for Hotels/Accommodations
  Plane,
  MapPin,
  UtensilsCrossed,
  Navigation,
  Languages,
  MessageSquare,
  Calendar,
  Wallet,
  Star,
  Trophy,
  Medal,
  Target,
  Map
} from 'lucide-react';
import { motion } from 'framer-motion';

function Home() {
  // Mock user achievements data
  const userProgress = {
    level: 12,
    title: "Island Explorer",
    progress: 75,
    achievements: 8,
    visited: 15
  };

  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* User Progress Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-amber-500 to-orange-500 pt-20 pb-6 px-4"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-white font-medium">Level {userProgress.level}</h2>
              <p className="text-white/80 text-sm">{userProgress.title}</p>
            </div>
          </div>
          <button className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-xl text-white text-sm">
            View Badges
          </button>
        </div>
        {/* Progress Bar */}
        <div className="bg-white/10 rounded-full h-2 mb-4">
          <div 
            className="bg-white rounded-full h-2 transition-all duration-500"
            style={{ width: `${userProgress.progress}%` }}
          />
        </div>
        <div className="flex justify-between text-white/80 text-xs">
          <span>{userProgress.progress}% to Level {userProgress.level + 1}</span>
          <span>{100 - userProgress.progress}% remaining</span>
        </div>
      </motion.div>

      {/* Achievement Stats */}
      <div className="px-4 -mt-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8"
        >
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mx-auto mb-2">
                <Medal className="w-5 h-5 text-amber-500" />
              </div>
              <div className="font-semibold text-gray-900">{userProgress.achievements}</div>
              <div className="text-xs text-gray-500">Badges</div>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-2">
                <Map className="w-5 h-5 text-blue-500" />
              </div>
              <div className="font-semibold text-gray-900">{userProgress.visited}</div>
              <div className="text-xs text-gray-500">Places Visited</div>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mx-auto mb-2">
                <Target className="w-5 h-5 text-green-500" />
              </div>
              <div className="font-semibold text-gray-900">3</div>
              <div className="text-xs text-gray-500">Goals Set</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Search Section - Enhanced */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Where to next?
          </h1>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="text-amber-500 text-sm font-medium"
          >
            View Map
          </motion.button>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text"
            placeholder="Search destinations..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 shadow-sm"
          />
        </div>
      </div>

      {/* Quick Actions - Refined */}
      <div className="px-4 mb-8">
        <div className="grid grid-cols-4 gap-4">
          {[
            { icon: Building2, label: 'Hotels', color: 'bg-blue-500' },
            { icon: Plane, label: 'Flights', color: 'bg-white' },
            { icon: MapPin, label: 'Places', color: 'bg-white' },
            { icon: UtensilsCrossed, label: 'Food', color: 'bg-white' }
          ].map((action, i) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2"
            >
              <motion.div 
                whileHover={{ y: -2 }}
                className={`w-14 h-14 rounded-2xl ${action.color} ${i === 0 ? '' : 'border border-gray-200'} flex items-center justify-center shadow-sm`}
              >
                <action.icon className={`w-6 h-6 ${i === 0 ? 'text-white' : 'text-gray-600'}`} />
              </motion.div>
              <span className="text-xs text-gray-600">{action.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* AI Features Section - Enhanced */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Smart Travel</h2>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="text-amber-500 text-sm font-medium"
          >
            See all
          </motion.button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Languages, title: 'Translate', desc: 'Real-time translation', color: 'bg-blue-500', new: true },
            { icon: Calendar, title: 'Itinerary', desc: 'Smart planning', color: 'bg-amber-500' },
            { icon: MessageSquare, title: 'Local Chat', desc: 'AI assistance', color: 'bg-green-500' },
            { icon: Wallet, title: 'Budget', desc: 'Expense tracking', color: 'bg-purple-500' }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="relative p-4 rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              {feature.new && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">New</span>
              )}
              <div className={`w-10 h-10 rounded-xl ${feature.color} flex items-center justify-center mb-3`}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-medium text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popular Destinations - Enhanced */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Trending Places</h2>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="text-amber-500 text-sm font-medium"
          >
            Explore all
          </motion.button>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {[
            { 
              name: 'Boracay',
              location: 'Philippines',
              image: '/destinations/boracay.jpg',
              rating: 4.9,
              price: '$150/night',
              badge: 'Popular'
            },
            {
              name: 'Palawan',
              location: 'Philippines',
              image: '/destinations/palawan.jpg',
              rating: 4.8,
              price: '$120/night',
              badge: 'Must Visit'
            }
          ].map((place, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-sm"
            >
              {place.badge && (
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-amber-500">{place.badge}</span>
                </div>
              )}
              <img 
                src={place.image} 
                alt={place.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-semibold text-white mb-1">{place.name}</h3>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white/80" />
                  <span className="text-sm text-white/80">{place.location}</span>
                  <div className="flex items-center gap-1 ml-2">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm text-white">{place.rating}</span>
                  </div>
                </div>
                <div className="mt-2 text-white font-medium">{place.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home; 