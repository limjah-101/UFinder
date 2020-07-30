import axios from 'axios';

const KEY = 'AIzaSyDjzSmv_mTmjCjaLS4zeLMrpHu8USYAUQk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    } 
});