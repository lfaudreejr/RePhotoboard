import {USER} from './connections'
import {getData, handleError, getJWT} from '@/utils/utils'

export default {
  getUserData () {
    const jwt = getJWT()

    return USER({
      method: 'GET',
      url: '/me',
      headers: { 'Authorization': `Bearer ${jwt}` }
    })
      .then(getData)
      .catch(handleError)
  }
}
