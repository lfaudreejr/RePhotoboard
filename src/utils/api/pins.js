import {API} from './connections'

export default {
  getPinById (id) {
    return API.get('/pins/' + id).then(data => data.data)
  },

  getAllPins () { return API.get('/pins').then(data => data.data) },

  createPin (payload, token) {
    return API({
      method: 'POST',
      url: '/pins',
      headers: { 'Authorization': `Bearer ${token}` },
      data: payload
    })
      .then(data => data.data)
  }
}
