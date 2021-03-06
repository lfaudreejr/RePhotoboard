import { pins } from '@/utils/api/index'
import { getJWT, handleError, getData } from '@/utils/utils'

const getPins = ({commit, dispatch}) => {
  dispatch('loaders/toggleLoading', true, {root: true})
  return pins['getAllPins']()
    .then(getData)
    .then((response) => {
      dispatch('loaders/toggleLoading', false, {root: true})
      commit('PINS_UPDATED', response)
    }).catch(handleError)
}

const getPin = (context, id) => {
  return pins['getPinById'](id)
    .then(getData)
    .then((response) => {
      context.commit('PIN_UPDATED', response)
    }).catch(handleError)
}

const createPin = ({context, dispatch}, payload) => {
  const jwt = getJWT()

  return pins['createPin'](payload, jwt)
    .then(getData)
    .then(pin => {
      dispatch('user/getUser', jwt, {root: true})
      return pin
    })
    .catch(handleError)
}

const editPin = ({context, dispatch}, payload) => {
  const jwt = getJWT()

  return pins['updatePin'](payload, jwt)
    .then(getData)
    .then(pin => {
      dispatch('user/getUser', jwt, {root: true})
    })
    .catch(handleError)
}

const deletePin = ({context, dispatch}, payload) => {
  const jwt = getJWT()

  return pins['deletePinById'](payload._id, jwt)
    .then(getData)
    .then(pin => {
      dispatch('user/getUser', jwt, {root: true})
    })
    .catch(handleError)
}

export default {
  getPins,
  getPin,
  createPin,
  editPin,
  deletePin
}
