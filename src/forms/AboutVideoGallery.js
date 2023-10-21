import React from 'react';

const videos = require.context('../images/videos', true);
const videoList = videos.keys().map(video => videos(video));

function VideoGallery() {
  return (
    <div className="video-gallery-container">
      {videoList.map((video, index) => (
        <div className="video-item" key={index}>
          <video className="video-preview" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
}

export default VideoGallery;