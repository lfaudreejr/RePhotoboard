import { pins } from '@/utils/api/index'
import { getJWT, handleError } from '@/utils/utils'

const getPins = (context) => {
  return pins['getAllPins']()
    .then((response) => {
      context.commit('PINS_UPDATED', response)
    }).catch(handleError)
}

const getPin = (context, id) => {
  return pins['getPinById'](id)
    .then((response) => {
      context.commit('PIN_UPDATED', response)
    }).catch(handleError)
}

const createPin = ({context, dispatch}, payload) => {
  const jwt = getJWT()

  return pins['postPin'](payload, jwt)
    .then(pin => {
      dispatch('user/getUser', jwt, {root: true})
      return pin
    })
    .catch(handleError)
}

export default {
  getPins,
  getPin,
  createPin
}
