import React, { createContext, useState } from 'react';

export const AudioContext = createContext();

const AudioProvider = (props) => {
  const [audioSrc, setAudioSrc] = useState('');
  const [isAudioSrcValid, setIsAudioSrcValid] = useState(false);
  const [isAudioSrcFieldTouched, setIsAudioSrcFieldTouched] = useState(false);

  const checkIsLinkValid = (link) => {
    const urlRegex =
      /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
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
