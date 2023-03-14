import React, { createContext, useState } from 'react';

export const AudioContext = createContext();

const AudioProvider = (props) => {
  const [audioSrc, setAudioSrc] = useState('');
  const [isAudioSrcValid, setIsAudioSrcValid] = useState(false);
  const [isAudioSrcFieldTouched, setIsAudioSrcFieldTouched] = useState(false);

  const checkIsLinkValid = (link) => {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    setIsAudioSrcValid(urlRegex.test(link));
  };

  const audioContextValue = {
    audioSrc,
    isAudioSrcValid,
    setAudioSrc,
    isAudioSrcFieldTouched,
    setIsAudioSrcFieldTouched,
    checkIsLinkValid,
  };

  return (
    <AudioContext.Provider value={audioContextValue}>
      {props.children}
    </AudioContext.Provider>
  );
};

export default AudioProvider;
