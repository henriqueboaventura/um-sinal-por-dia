import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import { getRandomVideo } from './utils/VideoUtils';
import { VIDEO_BASE_URL } from './constants';

const App = () => {
  const [videoInfo, setVideoInfo] = useState({ word: '', description: '', video: '' });
  const { word, description, video } = videoInfo;

  const loadNewSign = () => setVideoInfo({ ...getRandomVideo() });

  useEffect(() => loadNewSign(), []);

  return (
    <div className="App">
      <header>
        <h1>1 sinal por dia!</h1>
      </header>
      <section>
        <h2>Palavra: <strong>{word}</strong></h2>
        <p className="description">{description}</p>
        <Video className="videoContainer" url={video} />
      </section>
      <button onClick={loadNewSign} className="button">Próxima Palavra</button>
      <footer>
        <p>Baseado nas informações disponibilizadas em <a href={VIDEO_BASE_URL}>Acessibilidade Brasil.</a></p>
      </footer>
    </div>
  );
}

export default App;
