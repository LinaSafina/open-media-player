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

  function togglePlay() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  function handleVolumeChange(event) {
    const value = parseFloat(event.target.value);
    setVolume(value);
    audioRef.current.volume = value;
  }

  function handleProgressChange(event) {
    const value = parseFloat(event.target.value);
    setProgress(value);
    audioRef.current.currentTime = value;
  }

  function handleTimeUpdate() {
    setProgress(audioRef.current.currentTime);
  }

  function handleMovingBack() {
    setAudioSrc('');
    setIsAudioSrcFieldTouched(false);
  }

  useEffect(() => {
    audioRef.current.volume = volume;
    audioRef.current.currentTime = progress;
  }, [audioSrc]);

  return (
    <>
      <button className='back-button' onClick={handleMovingBack}>
        ← Back
      </button>
      <div className='audio-player'>
        <audio
          ref={audioRef}
          src={'../../assets/town-10169.mp3'}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
        />
        <div className='audio-controls'>
          <div className='play-pause-container'>
            <button className='play-pause-button' onClick={togglePlay}>
              {isPlaying ? (
                <img src='../../assets/Pause.svg' />
              ) : (
                <img src='../../assets/Play.svg' />
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
    </>
  );
};

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

export default AudioPlayer;
