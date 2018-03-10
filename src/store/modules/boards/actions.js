import { fetchBoards } from '@/api/fake.js'

const getBoards = (context) => {
  fetchBoards.then((response) => {
    context.commit('BOARDS_UPDATED', response)
  }).catch((err) => {
    console.error(err)
  })
}

export default {
  getBoards
}
