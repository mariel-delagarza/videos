import axios from 'axios';

const KEY = 'AIzaSyBf3I2PZslF_TNPzOrOVOvqfrkGVPqUowI'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY 
  }
});
