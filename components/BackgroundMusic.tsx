'use client'

import { useState, useRef, useEffect } from 'react'

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 border-2 border-primary">
        <button
          onClick={togglePlay}
          className="bg-primary hover:bg-primary-dark text-white w-12 h-12 rounded-full flex items-center justify-center transition transform hover:scale-110"
        >
          {isPlaying ? (
            <i className="fas fa-pause text-xl"></i>
          ) : (
            <i className="fas fa-play text-xl ml-1"></i>
          )}
        </button>
        
        <div className="flex items-center gap-2">
          <i className="fas fa-volume-down text-primary"></i>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 accent-primary"
          />
          <i className="fas fa-volume-up text-primary"></i>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <i className="fas fa-music text-primary"></i>
          <span className="font-semibold">Background Music</span>
        </div>
      </div>

      <audio
        ref={audioRef}
        loop
        src="/music/Goliath - Masih Disini Masih Denganmu (Alternative Pop Cover).mp3"
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
