import { API } from '@/utils/api'
import { getData, getJWT, handleError } from '@/utils/utils'

const getPins = (context) => {
  return API.get('/pins')
    .then(getData)
    .then((response) => {
      context.commit('PINS_UPDATED', response)
    }).catch(handleError)
}

const getPin = (context, id) => {
  return API.get('/pins/' + id)
    .then(getData)
    .then((response) => {
      context.commit('PIN_UPDATED', response)
    }).catch(handleError)
}

const createPin = ({context, dispatch}, payload) => {
  const token = getJWT()

  return API({
    method: 'POST',
    url: '/pins',
    headers: { 'Authorization': `Bearer ${token}` },
    data: payload
  })
    .then(getData)
    .then(pin => {
      dispatch('user/getUser', token, {root: true})
      return pin
    })
    .catch(handleError)
}

export default {
  getPins,
  getPin,
  createPin
}
