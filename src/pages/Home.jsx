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
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <main className="min-h-screen bg-white px-4 pt-20">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Where you wanna go?
        </h1>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text"
            placeholder="Search destinations..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-gray-100 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4 mb-8">
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
            <div className={`w-14 h-14 rounded-2xl ${action.color} ${i === 0 ? '' : 'border border-gray-200'} flex items-center justify-center shadow-sm`}>
              <action.icon className={`w-6 h-6 ${i === 0 ? 'text-white' : 'text-gray-600'}`} />
            </div>
            <span className="text-xs text-gray-600">{action.label}</span>
          </motion.button>
        ))}
      </div>

      {/* AI Features Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Smart Features</h2>
          <button className="text-amber-500 text-sm">See all</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Languages, title: 'Translate', desc: 'Real-time translation', color: 'bg-blue-500' },
            { icon: Calendar, title: 'Itinerary', desc: 'Smart planning', color: 'bg-amber-500' },
            { icon: MessageSquare, title: 'Local Chat', desc: 'AI assistance', color: 'bg-green-500' },
            { icon: Wallet, title: 'Budget', desc: 'Expense tracking', color: 'bg-purple-500' }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              <div className={`w-10 h-10 rounded-xl ${feature.color} flex items-center justify-center mb-3`}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-medium text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Popular Destinations</h2>
          <button className="text-amber-500 text-sm">See all</button>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {[
            { 
              name: 'Boracay',
              location: 'Philippines',
              image: '/destinations/boracay.jpg',
              rating: 4.9,
              price: '$150/night'
            },
            {
              name: 'Palawan',
              location: 'Philippines',
              image: '/destinations/palawan.jpg',
              rating: 4.8,
              price: '$120/night'
            }
          ].map((place, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[3/2] rounded-2xl overflow-hidden"
            >
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