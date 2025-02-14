import { useState } from 'react';
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
  X
} from 'lucide-react';

function Translation() {
  const [mode, setMode] = useState('voice'); // 'voice' or 'camera'
  const [isListening, setIsListening] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [fromLanguage, setFromLanguage] = useState('English');
  const [toLanguage, setToLanguage] = useState('Filipino');

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

      {/* Mode Toggle */}
      <div className="bg-gray-100 p-1 rounded-xl mb-6 flex w-full sm:w-fit">
        <button
          onClick={() => setMode('voice')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            mode === 'voice'
              ? 'bg-white shadow-sm text-amber-500'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Mic className="w-5 h-5" />
          <span className="font-medium">Voice</span>
        </button>
        <button
          onClick={() => setMode('camera')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            mode === 'camera'
              ? 'bg-white shadow-sm text-amber-500'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Camera className="w-5 h-5" />
          <span className="font-medium">Camera</span>
        </button>
      </div>

      {/* Language Selection */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
          <div className="relative">
            <select
              value={fromLanguage}
              onChange={(e) => setFromLanguage(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-200 rounded-xl py-3 px-4 pr-10 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
            >
              <option>English</option>
              <option>Filipino</option>
              <option>Cebuano</option>
              <option>Ilocano</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
          <div className="relative">
            <select
              value={toLanguage}
              onChange={(e) => setToLanguage(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-200 rounded-xl py-3 px-4 pr-10 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
            >
              <option>Filipino</option>
              <option>English</option>
              <option>Cebuano</option>
              <option>Ilocano</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {mode === 'voice' ? (
        /* Voice Translation Interface */
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
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

          {/* Original Text */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Original Text</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <Copy className="w-5 h-5" />
              </button>
            </div>
            <div className="min-h-[100px] bg-gray-50 rounded-xl p-4">
              {isListening ? (
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  {/* Voice Waveform Animation */}
                  <div className="flex items-center gap-1 h-8">
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
                  <p className="text-gray-600">Listening to your voice...</p>
                </div>
              ) : (
                <p className="text-gray-600">Press the microphone button to start speaking</p>
              )}
            </div>
          </div>

          {/* Translation Result */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Translation</h3>
              <div className="flex items-center gap-3">
                <button className="text-gray-400 hover:text-gray-600">
                  <Volume2 className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="min-h-[100px] bg-gray-50 rounded-xl p-4">
              <p className="text-gray-600">Translation will appear here...</p>
            </div>
          </div>
        </div>
      ) : (
        /* Camera Translation Interface */
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          {isCameraActive ? (
            <div className="relative aspect-[4/3] bg-gray-900">
              {/* Camera Preview would go here */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white">Camera Preview</p>
              </div>
              {/* Camera Controls */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setIsCameraActive(false)}
                    className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <button className="bg-white text-amber-500 px-4 py-2 rounded-lg font-medium">
                    Translate
                  </button>
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

      {/* Action Button */}
      {mode === 'voice' && (
        <div className="flex justify-center">
          <div className="relative">
            <button
              onClick={() => setIsListening(!isListening)}
              className={`p-6 rounded-full ${
                isListening
                  ? 'bg-red-500 text-white'
                  : 'bg-amber-500 text-white'
              } shadow-lg hover:shadow-xl transition-shadow`}
            >
              <Mic className="w-8 h-8" />
            </button>
            {/* Pulsing Ring Animation */}
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