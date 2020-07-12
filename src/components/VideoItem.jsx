import React from 'react'
import './Videoitem.css'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <p className="header">{video.snippet.title}</p>
      </div>
    </div>
  )
}

export default VideoItem
