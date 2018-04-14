import {USER} from './connections'
import {getData, handleError} from '@/utils/utils'

export default {
  getUserData (jwt) {
    return USER({
      method: 'GET',
      url: '/me',
      headers: { 'Authorization': `Bearer ${jwt}` }
    })
      .then(getData)
      .catch(handleError)
  }
}
