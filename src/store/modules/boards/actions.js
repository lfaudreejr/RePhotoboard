// import { fetchBoards } from '@/api'
import axios from 'axios'

const getBoards = (context) => {
  axios.get('/api/board').then(data => data.data.boards).then((response) => {
    context.commit('BOARDS_UPDATED', response)
  }).catch((err) => {
    console.error(err)
  })
}

export default {
  getBoards
}
