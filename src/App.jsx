import React, { useContext } from 'react';

import { AudioContext } from './context/audio-context';
import AudioPlayer from './components/audio-player/audio-player.component';
import LinkForm from './components/link-form/link-form.component';

const App = () => {
  const audioCtx = useContext(AudioContext);
  const { isAudioSrcValid, isAudioSrcFieldTouched } = audioCtx;

  return (
    <>
      {isAudioSrcValid && isAudioSrcFieldTouched ? (
        <AudioPlayer />
      ) : (
        <LinkForm />
      )}
    </>
  );
};

export default App;
