import React, { Component } from 'react';
import Request from '../helpers/request';
import Header from '../components/Header';
import SongList from '../components/SongList';

class SongContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json#/';

    const request = new Request();
    request.get(url).then((data) =>
    this.setState({songs: data}))
  }

  render(){
    if(!this.state.songs){
      return <p>Loading data...</p>
    }
    return (
      <div className='song-container'>
        <Header title='UK Top 20 Song Chart'/>
        <SongList songs={this.state.songs}/>
        </div>
    );
  }
}

export default SongContainer;
