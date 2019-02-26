import React, { Component } from 'react';
import SongItem from './SongItem';

const SongList = (props) => {
  if(!props.songs) {
    return <p>Waiting for loading...</p>
  }

  const songItems = props.songs.map((song, index) => {
    return (
    <SongItem song={song} key={index}/>
  );
});
    return (
    <div>
    <ul>{songItems}</ul>
    </div>
  );
  }

export default SongList;
