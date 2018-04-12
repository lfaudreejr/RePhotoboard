import {API} from './connections'

export default {
  getPinById (id) {
    return API({
      method: 'GET',
      url: '/pins/' + id
    })
  },

  getAllPins () {
    return API({
      method: 'GET',
      url: '/pins'
    })
  },

  createPin (payload, token) {
    return API({
      method: 'POST',
      url: '/pins',
      headers: { 'Authorization': `Bearer ${token}` },
      data: payload
    })
  },

  updatePin (payload, token) {
    return API({
      method: 'PUT',
      url: '/pins/' + payload._id,
      headers: { 'Authorization': `Bearer ${token}` },
      data: payload
    })
  },

  deletePinById (id, token) {
    return API({
      method: 'DELETE',
      url: '/pins/' + id,
      headers: { 'Authorization': `Bearer ${token}` }
    })
  }
}
