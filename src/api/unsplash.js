import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID iVZvsxvLxQwTvEOttRo3YtwmqYcoDrpjHGj6lI3ruIo',
  },
})
