// import { fetchPins } from '@/api'
import axios from 'axios'

const getPins = (context) => {
  axios.get('/api/pin').then(data => data.data.pins).then((response) => {
    context.commit('PINS_UPDATED', response)
  }).catch((err) => {
    console.error(err)
  })
}

export default {
  getPins
}
