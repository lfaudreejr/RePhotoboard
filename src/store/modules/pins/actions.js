import { API } from '@/utils/api'

const getPins = (context) => {
  return API.get('/pin').then(data => {
    return data.data
  }).then((response) => {
    context.commit('PINS_UPDATED', response)
  }).catch((err) => {
    console.error(err)
  })
}

const getPin = (context, id) => {
  return API.get('/pin/' + id).then(data => {
    return data.data
  }).then((response) => {
    context.commit('PIN_UPDATED', response)
  }).catch((err) => {
    console.error(err)
  })
}

export default {
  getPins,
  getPin
}
