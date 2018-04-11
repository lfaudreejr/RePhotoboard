import {USER} from './connections'

export default {
  getUserData (jwt) {
    return USER({
      method: 'GET',
      url: '/me',
      headers: { 'Authorization': `Bearer ${jwt}` }
    })
      .then(data => data.data)
  }
}
