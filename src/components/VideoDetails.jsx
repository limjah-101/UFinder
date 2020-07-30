import React from 'react';

const VideoDetails = ({ selectedVideo }) => {
    return ( 
        <>
            { selectedVideo ?
            <div className="video-details">
                <div className="video-player">
                    <iframe 
                        src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} 
                        frameBorder="0" 
                        title={selectedVideo.id.videoId}></iframe>
                </div>
                <div className="video-thumbnails">
                    <h4>{ selectedVideo.snippet.title }</h4>
                    <p>{ selectedVideo.snippet.description }</p>                    
                </div>
            </div>
            : null
            }
        </>
    );
}
 
export default VideoDetails;