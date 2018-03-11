import axios from 'axios'

const getUserBoards = (context) => {
  axios.get('/api/board/all/').then(data => data.data.pins).then((response) => {
    context.commit('USER_PINS_UPDATED', response)
  }).catch((err) => {
    console.error(err)
  })
}

const setUser = (context, user) => {
  context.commit('USER_UPDATED', user)
}

export default {
  getUserBoards,
  setUser
}
