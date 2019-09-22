import React from 'react';
import SearchBar from './SearchBar';
import youtube, { baseParams } from '../apis/youtube';


class App extends React.Component {
  state = { videos:  []};

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />  
        I have {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;