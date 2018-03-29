import { API } from '@/utils/api'
import { getData } from '@/utils/utils'

const getPins = (context) => {
  return API.get('/pins')
    .then(getData)
    .then((response) => {
      context.commit('PINS_UPDATED', response)
    }).catch((err) => {
      console.error(err)
    })
}

const getPin = (context, id) => {
  return API.get('/pins/' + id)
    .then(getData)
    .then((response) => {
      context.commit('PIN_UPDATED', response)
    }).catch((err) => {
      console.error(err)
    })
}

const createPin = ({context, dispatch}, payload) => {
  const token = localStorage.getItem('rpbtoken')

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
    .catch(err => {
      console.error(err)
    })
}

export default {
  getPins,
  getPin,
  createPin
}
