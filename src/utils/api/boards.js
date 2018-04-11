import {API} from './connections'

export default {
  getUserBoards (id, jwt) {
    return API({
      method: 'GET',
      url: `/boards/${id}`,
      headers: { 'Authorization': `Bearer ${jwt}` }
    })
  },

  postBoard (payload, jwt) {
    return API({
      method: 'POST',
      url: '/boards',
      headers: { 'Authorization': `Bearer ${jwt}` },
      data: payload
    })
  },

  putBoard (payload, jwt) {
    return API({
      method: 'PUT',
      url: '/boards/' + payload._id,
      headers: { 'Authorization': `Bearer ${jwt}` },
      data: payload
    })
  },

  delBoard (id, jwt) {
    return API({
      method: 'DELETE',
      url: '/boards/' + id,
      headers: { 'Authorization': `Bearer ${jwt}` }
    })
  }
}
