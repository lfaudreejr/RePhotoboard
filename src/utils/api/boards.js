import {API} from './connections'
import {getJWT} from '@/utils/utils'

export default {
  getUserBoards (id) {
    const jwt = getJWT()
    return API({
      method: 'GET',
      url: `/boards/${id}`,
      headers: { 'Authorization': `Bearer ${jwt}` }
    })
  },

  postBoard (payload) {
    const jwt = getJWT()
    return API({
      method: 'POST',
      url: '/boards',
      headers: { 'Authorization': `Bearer ${jwt}` },
      data: payload
    })
  },

  putBoard (payload) {
    const jwt = getJWT()
    return API({
      method: 'PUT',
      url: '/boards/' + payload._id,
      headers: { 'Authorization': `Bearer ${jwt}` },
      data: payload
    })
  },

  delBoard (id) {
    const jwt = getJWT()
    return API({
      method: 'DELETE',
      url: '/boards/' + id,
      headers: { 'Authorization': `Bearer ${jwt}` }
    })
  }
}
