import React, { Component } from 'react';

const SongItem = (props) => {
  if(!props.song) {
    return <p>Waiting for loading...</p>
  }

  return (
    <div>
    <h3>{props.song.feed.entry[0]['im:name'].label}</h3>
    <h3>{props.song.feed.entry[0].title.lable}</h3>
    </div>
  )

}

export default SongItem;
