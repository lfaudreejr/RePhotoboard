// import { fetchBoards } from '@/api'
import axios from 'axios'

const getUserBoards = (context, userId) => {
  axios.get(`/api/user/${userId}/boards`).then(data => {
    return data.data
  }).then((response) => {
    context.commit('BOARDS_UPDATED', response)
  }).catch((err) => {
    console.error(err)
  })
}

export default {
  getUserBoards
}
