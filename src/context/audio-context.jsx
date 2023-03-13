import React, { createContext, useState } from 'react';

export const AudioContext = createContext();

function AudioProvider(props) {
  const [audioSrc, setAudioSrc] = useState('');
  const [isAudioSrcValid, setIsAudioSrcValid] = useState(false);
  const [isAudioSrcFieldTouched, setIsAudioSrcFieldTouched] = useState(false);

  // const [audioDuration, setAudioDuration] = useState(0);
  // const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  // const [audioVolume, setAudioVolume] = useState(1);
  // const [isPlaying, setIsPlaying] = useState(false);

  // function handleAudioLoad() {
  //   setAudioDuration(Math.floor(audioRef.current.duration));
  // }

  // function handleAudioTimeUpdate() {
  //   setAudioCurrentTime(Math.floor(audioRef.current.currentTime));
  // }

  // function handleAudioEnded() {
  //   setIsPlaying(false);
  //   setAudioCurrentTime(0);
  // }

  function checkIsLinkValid(link) {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    setIsAudioSrcValid(urlRegex.test(link));
  }

  const audioContextValue = {
    audioSrc,
    isAudioSrcValid,
    setAudioSrc,
    isAudioSrcFieldTouched,
    setIsAudioSrcFieldTouched,
    // audioDuration,
    // setAudioDuration,
    // audioCurrentTime,
    // setAudioCurrentTime,
    checkIsLinkValid,
    // audioVolume,
    // setAudioVolume,
    // isPlaying,
    // setIsPlaying,
    // handleAudioLoad,
    // handleAudioTimeUpdate,
    // handleAudioEnded,
  };

  return (
    <AudioContext.Provider value={audioContextValue}>
      {props.children}
    </AudioContext.Provider>
  );
}

export default AudioProvider;
