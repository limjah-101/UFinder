import React from 'react';

const VideoItem = ({ video, selectedVideo }) => {
    return ( 
        <div className="card" onClick={ () => selectedVideo(video) }>
            <img src={ video.snippet.thumbnails.medium.url } alt=""/>
            <div className="card-body">                
                <h3>{ video.snippet.title }</h3>
                <p>{ video.snippet.description }</p>
            <i className="fas fa-play-circle icon"></i>
            </div>            
        </div>
    );
}
 
export default VideoItem;