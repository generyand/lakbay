import { useState, useEffect } from 'react';
import { 
  Mic, 
  Camera, 
  Languages, 
  Volume2,
  Copy, 
  RotateCcw,
  ChevronDown,
  Sparkles,
  Camera as CameraIcon,
  X,
  Check
} from 'lucide-react';

function Translation() {
  const [mode, setMode] = useState('voice');
  const [isListening, setIsListening] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isManualMode, setIsManualMode] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState(null);
  const [targetLanguage, setTargetLanguage] = useState('English');
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [displayMode, setDisplayMode] = useState('bubble'); // 'bubble' or 'subtitle'

  // Simulate real-time translation
  useEffect(() => {
    if (isListening) {
      const words = [
        "Hello, how are you?",
        "I need directions to the beach",
        "Where is the nearest restaurant?",
        "Salamat sa pagtabang"
      ];
      let wordIndex = 0;
      
      const interval = setInterval(() => {
        if (wordIndex < words.length) {
          setOriginalText(words[wordIndex]);
          setIsTranslating(true);
          
          // Simulate translation delay
          setTimeout(() => {
            const translations = [
              "Kumusta ka?",
              "Kailangan ko ng direksyon papuntang beach",
              "Nasaan ang pinakamalapit na restaurant?",
              "Salamat sa tulong mo"
            ];
            setTranslatedText(translations[wordIndex]);
            setIsTranslating(false);
          }, 800);
          
          wordIndex++;
        }
      }, 2000);

      return () => clearInterval(interval);
    } else {
      setOriginalText('');
      setTranslatedText('');
    }
  }, [isListening]);

  // Simulate language detection
  useEffect(() => {
    if (isListening || isCameraActive) {
      setTimeout(() => {
        setDetectedLanguage('Cebuano');
      }, 1000);
    } else {
      setDetectedLanguage(null);
    }
  }, [isListening, isCameraActive]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleModeSwitch = (newMode) => {
    if (newMode !== mode) {
      // Reset states when switching modes
      setIsListening(false);
      setIsCameraActive(false);
      setOriginalText('');
      setTranslatedText('');
      
      // Smooth transition
      setTimeout(() => setMode(newMode), 150);
    }
  };

  return (
    <main className="max-w-7xl mx-auto pt-24 px-4 pb-20">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm font-medium">
            <span className="flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              AI Translation
            </span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Real-time Translation</h1>
        <p className="text-gray-600">Instantly translate voice and text in any language</p>
      </div>

      {/* Enhanced Mode Toggle */}
      <div className="bg-gray-100 p-1 rounded-xl mb-6 flex w-full sm:w-fit">
        <button
          onClick={() => handleModeSwitch('voice')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
            mode === 'voice'
              ? 'bg-white shadow-sm text-amber-500 scale-105'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Mic className="w-5 h-5" />
          <span className="font-medium">Voice</span>
        </button>
        <button
          onClick={() => handleModeSwitch('camera')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
            mode === 'camera'
              ? 'bg-white shadow-sm text-amber-500 scale-105'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Camera className="w-5 h-5" />
          <span className="font-medium">Camera</span>
        </button>
      </div>

      {/* New Language Detection Info & Manual Toggle */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {detectedLanguage && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-600 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Detected: {detectedLanguage}</span>
              </div>
            )}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full">
              <Languages className="w-4 h-4" />
              <span className="text-sm font-medium">To: {targetLanguage}</span>
            </div>
          </div>
          <button
            onClick={() => setIsManualMode(!isManualMode)}
            className={`text-sm font-medium transition-colors ${
              isManualMode ? 'text-amber-600' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {isManualMode ? 'Use Auto Detection' : 'Select Languages Manually'}
          </button>
        </div>

        {/* Manual Language Selection */}
        {isManualMode && (
          <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Source Language</label>
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-white border border-gray-200 rounded-xl py-2.5 px-4 pr-10 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  >
                    <option>Auto Detect</option>
                    <option>English</option>
                    <option>Filipino</option>
                    <option>Cebuano</option>
                    <option>Ilocano</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Language</label>
                <div className="relative">
                  <select
                    value={targetLanguage}
                    onChange={(e) => setTargetLanguage(e.target.value)}
                    className="w-full appearance-none bg-white border border-gray-200 rounded-xl py-2.5 px-4 pr-10 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  >
                    <option>English</option>
                    <option>Filipino</option>
                    <option>Cebuano</option>
                    <option>Ilocano</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Note: Manual selection might be helpful for specific dialects or when auto-detection is not accurate.
            </p>
          </div>
        )}
      </div>

      {mode === 'voice' ? (
        /* Enhanced Voice Translation Interface */
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 transition-all duration-300">
          {/* Recording Indicator */}
          {isListening && (
            <div className="mb-6 flex items-center justify-center">
              <div className="flex items-center gap-3 px-4 py-2 bg-red-50 rounded-full">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </div>
                <span className="text-red-600 font-medium">Recording...</span>
              </div>
            </div>
          )}

          {/* Enhanced Original Text */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Original Text</h3>
              {originalText && (
                <button 
                  onClick={() => handleCopy(originalText)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {isCopied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </button>
              )}
            </div>
            <div className="min-h-[100px] bg-gray-50 rounded-xl p-4 transition-all duration-300">
              {isListening ? (
                <div className="space-y-4">
                  {/* Voice Waveform Animation */}
                  <div className="flex items-center gap-1 h-8 justify-center">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-amber-500 rounded-full animate-sound-wave"
                        style={{
                          height: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                  <p className="text-gray-900 text-center">
                    {originalText || "Listening to your voice..."}
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-600">Press the microphone button to start speaking</p>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Translation Result */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Translation</h3>
              <div className="flex items-center gap-3">
                {translatedText && (
                  <>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Volume2 className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleCopy(translatedText)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {isCopied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="min-h-[100px] bg-gray-50 rounded-xl p-4 transition-all duration-300">
              {isTranslating ? (
                <div className="flex items-center justify-center h-full">
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              ) : (
                <p className={`text-gray-900 transition-opacity duration-300 ${translatedText ? 'opacity-100' : 'opacity-50'}`}>
                  {translatedText || "Translation will appear here..."}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Camera Translation Interface */
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          {isCameraActive ? (
            <div className="relative">
              {/* Camera Preview Container */}
              <div className="relative aspect-[4/3] bg-gray-900">
                {/* Sample Image - Replace with actual camera feed */}
                <img 
                  src="/sample-sign.jpg" 
                  alt="Camera Preview" 
                  className="w-full h-full object-cover"
                />

                {/* Real-time Overlay */}
                <div className="absolute inset-0">
                  {/* Detected Text Highlight */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="border-2 border-amber-500 rounded-lg p-2 bg-amber-500/10 backdrop-blur-sm">
                      <p className="text-amber-500 font-medium text-sm">Detected Text</p>
                    </div>
                  </div>

                  {/* Translation Display Toggle */}
                  <div className="flex items-center gap-2 bg-black/30 rounded-lg p-1.5">
                    <button 
                      onClick={() => setDisplayMode('bubble')}
                      className={`p-1.5 rounded text-white transition-colors ${
                        displayMode === 'bubble' ? 'bg-white/20' : 'hover:bg-white/10'
                      }`}
                    >
                      Bubble
                    </button>
                    <button 
                      onClick={() => setDisplayMode('subtitle')}
                      className={`p-1.5 rounded text-white transition-colors ${
                        displayMode === 'subtitle' ? 'bg-white/20' : 'hover:bg-white/10'
                      }`}
                    >
                      Subtitle
                    </button>
                  </div>

                  {/* Translation Bubble */}
                  {displayMode === 'bubble' && (
                    <div className="absolute top-4 right-4 max-w-xs bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-gray-200">
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <p className="text-sm text-gray-600 mb-1">Detected (Cebuano):</p>
                          <p className="text-sm font-medium mb-2">
                            "Palihug ayaw paglabay og basura"
                          </p>
                          <p className="text-sm text-gray-600 mb-1">Translation (English):</p>
                          <p className="text-sm font-medium text-amber-600">
                            "Please do not throw trash here"
                          </p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Subtitle Style Translation */}
                  {displayMode === 'subtitle' && (
                    <div className="absolute bottom-16 inset-x-0 px-4">
                      <div className="bg-black/75 backdrop-blur-sm rounded-xl p-4 mx-auto max-w-lg">
                        <div className="text-center">
                          <p className="text-white/80 text-sm mb-1">
                            "Palihug ayaw paglabay og basura"
                          </p>
                          <p className="text-white font-medium">
                            "Please do not throw trash here"
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Camera Controls */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsCameraActive(false)}
                        className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                      {/* Translation Display Toggle */}
                      <div className="flex items-center gap-2 bg-black/30 rounded-lg p-1.5">
                        <button 
                          onClick={() => setDisplayMode('bubble')}
                          className={`p-1.5 rounded text-white transition-colors ${
                            displayMode === 'bubble' ? 'bg-white/20' : 'hover:bg-white/10'
                          }`}
                        >
                          Bubble
                        </button>
                        <button 
                          onClick={() => setDisplayMode('subtitle')}
                          className={`p-1.5 rounded text-white transition-colors ${
                            displayMode === 'subtitle' ? 'bg-white/20' : 'hover:bg-white/10'
                          }`}
                        >
                          Subtitle
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="bg-white/10 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-white/20">
                        Copy
                      </button>
                      <button className="bg-white text-amber-500 px-3 py-1.5 rounded-lg font-medium hover:bg-white/90">
                        Translate
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Updated Translation History Panel */}
              <div className="border-t">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Recent Translations</h3>
                    <button className="text-amber-500 text-sm font-medium">
                      Clear All
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-600 mb-1">Cebuano:</p>
                      <p className="text-sm font-medium mb-2">
                        "Palihug ayaw paglabay og basura"
                      </p>
                      <p className="text-sm text-gray-600 mb-1">English:</p>
                      <p className="text-sm font-medium text-amber-600">
                        "Please do not throw trash here"
                      </p>
                    </div>
                    {/* Additional history item */}
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-600 mb-1">Cebuano:</p>
                      <p className="text-sm font-medium mb-2">
                        "Salamat sa pagtabang"
                      </p>
                      <p className="text-sm text-gray-600 mb-1">English:</p>
                      <p className="text-sm font-medium text-amber-600">
                        "Thank you for helping"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6">
              <button
                onClick={() => setIsCameraActive(true)}
                className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 hover:text-amber-500 hover:border-amber-500 transition-colors"
              >
                <CameraIcon className="w-6 h-6" />
                <span>Tap to activate camera</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Enhanced Action Button */}
      {mode === 'voice' && (
        <div className="flex justify-center transition-transform duration-300">
          <div className="relative">
            <button
              onClick={() => setIsListening(!isListening)}
              className={`p-6 rounded-full transition-all duration-300 ${
                isListening
                  ? 'bg-red-500 text-white scale-110'
                  : 'bg-amber-500 text-white hover:scale-105'
              } shadow-lg hover:shadow-xl`}
            >
              <Mic className="w-8 h-8" />
            </button>
            {isListening && (
              <div className="absolute inset-0 rounded-full animate-ping-slow bg-red-500 opacity-20"></div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default Translation; 