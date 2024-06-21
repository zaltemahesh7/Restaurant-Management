import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MusicPlayer = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  

  const fetchSongs = async (query) => {
    try {
      const response = await axios.get('https://genius-song-lyrics1.p.rapidapi.com/search/', {
        params: { q: query, per_page: 10, page: 1 },
        headers: {
          'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
          'X-RapidAPI-Key': 'e4af5615afmshac8177f1c16887ep1e0d2ajsn399266519a6c'
        }
      });
      setSongs(response.data.hits);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  useEffect(() => {
    fetchSongs( 'Taylor Swift' );
  }, []);

  const playSong = (song) => {
    console.log(song);
    console.log(currentSong);
    setCurrentSong(song);
  };


  return (
    <div className="music-player">
      <h1>Music Player</h1>
      <div className="song-list">
        {songs.map((song) => (
          <div key={song.result.id} className="song-item">
            <img src={song.result.song_art_image_thumbnail_url} alt={song.result.full_title} />
            <h3>{song.result.full_title}</h3>
            <button onClick={() => playSong(song)}>Play</button>
          </div>
        ))}
      </div>
      {currentSong ? (
        <div className="current-song">
          <h2>Now Playing: {currentSong.result.full_title}</h2>
          <audio controls>
            <source src={currentSong.result.media[0]?.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ): <h1>Head</h1>}
    </div>
  );
};

export default MusicPlayer;
