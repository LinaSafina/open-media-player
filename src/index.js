import React from 'react';
import ReactDOM from 'react-dom/client';

import AudioProvider, { AudioContext } from './context/audio-context';
import App from './App';

ReactDOM.createRoot(document.getElementById('audio-player')).render(
  <React.StrictMode>
    <AudioProvider value={AudioContext}>
      <App />
    </AudioProvider>
  </React.StrictMode>
);
