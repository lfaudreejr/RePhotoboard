import { fetchPins } from '@/api/fake.js'

const getPins = (context) => {
  fetchPins.then((response) => {
    context.commit('PINS_UPDATED', response)
  }).catch((err) => {
    console.error(err)
  })
}

export default {
  getPins
}
