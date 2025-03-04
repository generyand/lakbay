import { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Smile } from 'lucide-react';
import boracay from '../assets/boracay.jpg';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'text', content: 'How can I help you plan your perfect trip?', isUser: false }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add TripCard component
  const TripCard = ({ trip }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full">
      <img 
        src={trip.image} 
        alt={trip.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{trip.title}</h3>
        {trip.hotel && (
          <p className="text-sm">
            <span className="font-semibold">Hotel: </span>
            <a href={trip.hotelLink} className="text-amber-500 hover:underline">
              {trip.hotel}
            </a>
          </p>
        )}
        {trip.description && (
          <p className="text-sm mt-2 text-gray-600">{trip.description}</p>
        )}
        {trip.activities && (
          <p className="text-sm mt-2 text-gray-600">
            <span className="font-semibold">Activities: </span>
            {trip.activities}
          </p>
        )}
        <button 
          className="mt-4 w-full bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors"
        >
          Open
        </button>
      </div>
    </div>
  );

  const MessageBubble = ({ message, isUser }) => (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`${
          isUser
            ? 'bg-amber-500 text-white rounded-2xl rounded-br-none max-w-[80%]'
            : 'bg-white text-gray-800 rounded-2xl rounded-bl-none max-w-[80%] shadow-sm'
        } ${message.type === 'trip' ? 'w-full max-w-sm' : ''}`}
      >
        <div className={`${message.type === 'text' ? 'p-4' : ''}`}>
          {message.type === 'text' && <p>{message.content}</p>}
          {message.type === 'trip' && <TripCard trip={message.content} />}
        </div>
      </div>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages([...messages, { type: 'text', content: inputMessage, isUser: true }]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      if (inputMessage.toLowerCase().includes('boracay')) {
        setMessages(prev => [...prev, {
          type: 'trip',
          content: {
            title: '2-Day Boracay Beach Getaway',
            image: boracay,
            hotel: 'Gracias Inn Boracay',
            hotelLink: '#',
            description: 'This cozy spot is perfect for you with a solid rating of 8.4 and a great location to soak up the sun and enjoy the beach vibes.',
            activities: 'Get ready for some thrilling water adventures!'
          },
          isUser: false
        }]);
      } else {
        setMessages(prev => [...prev, {
          type: 'text',
          content: 'How can I help you plan your perfect trip?',
          isUser: false
        }]);
      }
    }, 1000);
  };

  return (
    <>
      {/* Chat Window */}
      <div 
        className={`fixed inset-x-0 bottom-0 top-0 md:inset-auto md:bottom-24 md:right-6 md:w-[400px] md:h-[600px] bg-gray-50 
          md:rounded-2xl shadow-2xl transition-all duration-300 transform z-[100] flex flex-col
          ${isOpen 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-full md:translate-y-8 opacity-0 pointer-events-none'
          }`}
      >
        {/* Chat Header */}
        <div className="bg-white px-4 md:px-6 py-4 md:rounded-t-2xl shadow-sm flex items-center justify-between flex-shrink-0">
          <div>
            <h3 className="font-semibold text-gray-800">GORA</h3>
            <p className="text-sm text-gray-500">Ask me anything about travel</p>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="md:hidden p-2 text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50/50">
          {messages.map((message, index) => (
            <MessageBubble
              key={index}
              message={message}
              isUser={message.isUser}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Container */}
        <div className="bg-white px-4 py-3 shadow-sm md:rounded-b-2xl flex-shrink-0">
          <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-amber-500 transition-colors"
            >
              <Smile className="w-5 h-5" />
            </button>
            
            <div className="relative flex-1">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Message AI Travel Assistant..."
                className="w-full px-4 py-3 bg-gray-50/50 rounded-xl focus:outline-none focus:ring-0 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] focus:shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all text-gray-700 placeholder:text-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2 text-white bg-amber-500 rounded-xl hover:bg-amber-600 disabled:opacity-50 disabled:hover:bg-amber-500 transition-all"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Floating Button - Updated z-index to match */}
      {!isOpen && (
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-amber-500 rounded-full shadow-lg hover:bg-amber-600 transition-all duration-200 flex items-center justify-center z-[100]"
      >
        
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>
      )}

      {/* Close Button - Moved outside chat window */}
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="fixed top-4 right-4 p-2 bg-gray-800/10 hover:bg-gray-800/20 rounded-full backdrop-blur-sm transition-all md:hidden z-50"
        >
          <X className="w-6 h-6 text-gray-800" />
        </button>
      )}
    </>
  );
};

export default FloatingChat; 