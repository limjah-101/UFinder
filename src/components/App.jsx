import React, { Component } from 'react';

import Navbar from './NavBar';
import SearchBar from './SearchBar';
import utube from '../api/utube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends Component {
    
    state = { 
        videos: [],
        clickedVideo: null
    }

    onSearchSubmit = async searchTerm => {        
        const response = await utube.get('/search', {
            params: {
                q: searchTerm
            }
        });
        this.setState({ videos: response.data.items })
    };

    selectedVideo = video => {
        console.log(video);
        this.setState({ clickedVideo: video });
        window.scrollTo(0,0);
        
    }
    
    render() { 
        console.log(this.state.videos);
        return ( 
            <>
                <Navbar />
                <SearchBar onSearchSubmit={ this.onSearchSubmit }/>
                <VideoDetails selectedVideo={ this.state.clickedVideo }/>
                <VideoList 
                    videos={ this.state.videos } 
                    selectedVideo={ this.selectedVideo }
                />
            </>
        );
    }
}
 
export default App;