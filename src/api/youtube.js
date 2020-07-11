import axios from 'axios'

const KEY = 'AIzaSyD74h13G_l89rubKIuTVvuGMtmWaJfPBVU'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
})
