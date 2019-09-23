import React from 'react';
import SearchBar from './SearchBar';
import youtube, { baseParams } from '../apis/youtube';
import VideoList from './VideoList'


class App extends React.Component {
  state = { videos:  [], selectedVideo: null};

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video});
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />  
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;