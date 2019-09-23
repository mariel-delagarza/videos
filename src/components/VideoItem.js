import React from 'react';

const VideoItem = ({ video }) => {
  return (
  <div className="item">
    <img src={video.snippet.thumbnails.medium.url} className="ui image" />
    <div className="content">
      <div className="header">{video.snippet.title}</div>
    </div>
    
  </div>
  );
};

export default VideoItem;