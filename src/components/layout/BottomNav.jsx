import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home,
  Compass,
  MessageSquare,
  Languages,
  User
} from 'lucide-react';

function BottomNav() {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Explore', href: '/explore', icon: Compass },
    { name: 'Chat', href: '/chat', icon: MessageSquare },
    { name: 'Translate', href: '/translation', icon: Languages },
    { name: 'Profile', href: '/profile', icon: User }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe md:hidden z-50">
      <div className="flex items-center justify-around">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className="relative py-2 px-3"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center"
              >
                <div className={`p-1.5 rounded-xl ${
                  isActive ? 'bg-amber-50' : ''
                }`}>
                  <item.icon 
                    className={`w-6 h-6 ${
                      isActive ? 'text-amber-500' : 'text-gray-500'
                    }`}
                  />
                </div>
                <span className={`text-xs mt-1 ${
                  isActive ? 'text-amber-500 font-medium' : 'text-gray-500'
                }`}>
                  {item.name}
                </span>
              </motion.div>
              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500"
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BottomNav; 