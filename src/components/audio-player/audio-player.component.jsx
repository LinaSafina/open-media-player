import React, { useState, useEffect, useContext, useRef } from 'react';

import { AudioContext } from '../../context/audio-context';

import './audio-player.styles.scss';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);

  const { audioSrc, setAudioSrc, setIsAudioSrcFieldTouched } =
    useContext(AudioContext);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const value = parseFloat(event.target.value);
    setVolume(value);
    audioRef.current.volume = value;
  };

  const handleProgressChange = (event) => {
    const value = parseFloat(event.target.value);
    setProgress(value);
    audioRef.current.currentTime = value;
  };

  const handleTimeUpdate = () => {
    setProgress(audioRef.current.currentTime);
  };

  const handleMovingBack = () => {
    setAudioSrc('');
    setIsAudioSrcFieldTouched(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  useEffect(() => {
    audioRef.current.volume = volume;
    audioRef.current.currentTime = progress;
  }, [audioSrc]);

  return (
    <div className='audio-player-container'>
      <button className='back-button' onClick={handleMovingBack}>
        ← Back
      </button>
      <div className='audio-player'>
        <audio
          ref={audioRef}
          src={audioSrc}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
        />
        <div className='audio-controls'>
          <div className='play-pause-container'>
            <button className='play-pause-button' onClick={togglePlay}>
              {isPlaying ? (
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect x='4' width='4' height='40' fill='white' />
                  <rect x='32' width='4' height='40' fill='white' />
                </svg>
              ) : (
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 40V0H4.34286L40 18.7952V20.9639L4.34286 40H0Z'
                    fill='white'
                  />
                </svg>
              )}
            </button>
          </div>
          <div className='progress-container'>
            <input
              className='progress-bar'
              type='range'
              min='0'
              max={audioRef.current ? audioRef.current.duration : '100'}
              step='0.01'
              value={progress}
              onChange={handleProgressChange}
            />
          </div>
          <div className='time-volume-container'>
            <div className='time-display'>{formatTime(progress)}</div>
            <input
              className='volume-slider'
              type='range'
              min='0'
              max='1'
              step='0.01'
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
