import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, selectedVideo }) => {

    const renderedList = videos.map( (video, i) => {
        return <VideoItem 
                    key={ i } 
                    video={ video }
                    selectedVideo={ selectedVideo }
                />
    });

    return ( 
        <div className="card-container">
            {/* <div className="header">
                {videos.length === 0 ? <span className="header">Enter your research</span> : <span className="header">{videos.length} videos Found</span>}
            </div> */}
            { renderedList }
        </div>
    );
}
 
export default VideoList;