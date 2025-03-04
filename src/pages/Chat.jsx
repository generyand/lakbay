import { useState, useRef, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    // Initialize with AI's greeting message
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

  // Message types can be: 'text', 'trip'
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
            : 'bg-white text-gray-800 rounded-2xl rounded-bl-none max-w-[80%]'
        } ${message.type === 'trip' ? 'w-full max-w-sm' : ''}`}
      >
        <div className={`${message.type === 'text' ? 'p-3' : ''}`}>
          {message.type === 'text' && <p>{message.content}</p>}
          {message.type === 'trip' && <TripCard trip={message.content} />}
        </div>
      </div>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    setMessages([...messages, { type: 'text', content: inputMessage, isUser: true }]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      if (inputMessage.toLowerCase().includes('boracay')) {
        setMessages(prev => [...prev, {
          type: 'trip',
          content: {
            title: '2-Day Boracay Beach Getaway',
            image: '/path/to/boracay-image.jpg',
            hotel: 'Gracias Inn Boracay',
            hotelLink: '#',
            description: 'This cozy spot is perfect for you with a solid rating of 8.4 and a great location to soak up the sun and enjoy the beach vibes.',
            activities: 'Get ready for some thrilling water adventures! You\'ll be flying high with a parasailing experience that offers breathtaking views of Boracay\'s coastline.'
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
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="max-w-2xl mx-auto">
          {messages.map((message, index) => (
            <MessageBubble
              key={index}
              message={message}
              isUser={message.isUser}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Container */}
      <div className="border-t bg-white">
        <div className="max-w-2xl mx-auto px-4 py-2">
          <form onSubmit={handleSubmit} className="flex gap-2 items-center">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat; 