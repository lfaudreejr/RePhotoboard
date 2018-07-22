import { user, boards } from '@/utils/api/index'
import {
  mapGetData,
  getNewObject,
  handleError,
  flatten,
  uniqueById,
  mapGetBoardPins
} from '@/utils/utils'

const setUser = (context, user) => {
  context.commit('USER_UPDATED', user)
}

const setUserBoards = (context, boards) => {
  context.commit('USER_BOARDS_UPDATED', boards)
}

const setUserPins = (context, pins) => {
  context.commit('USER_PINS_UPDATED', pins)
}

const getUser = ({commit, dispatch}) => {
  return user['getUserData']()
    .then(data => {
      const userData = getNewObject({
        _id: data._id,
        username: data.username,
        email: data.email,
        role: data.role
      })

      const userBoards = data.boards
      const userPins = data.pins

      dispatch('setUser', userData)
      dispatch('loadUserBoards', { boards: userBoards, pins: userPins })
    }).catch(handleError)
}

const loadUserBoards = ({commit, dispatch}, payload) => {
  if (Array.isArray(payload.boards)) {
    let promiseArray = payload.boards.map(board => {
      return boards['getUserBoards'](board._id, payload)
    })

    let retreivedBoards = Promise.all(promiseArray)

    retreivedBoards
      .then(mapGetData)
      .then(userBoards => {
        const boardPins = mapGetBoardPins(userBoards)
        const allPinsFlattened = flatten(boardPins.concat(payload.pins))
        const allUniq = uniqueById(allPinsFlattened)

        dispatch('setUserBoards', userBoards)
        dispatch('setUserPins', allUniq)
      }).catch(handleError)
  }
}

const createBoard = ({commit, dispatch}, payload) => {
  return boards['postBoard'](payload)
    .then((results) => {
      const board = results.data
      if (!board.board_pins) {
        board.board_pins = []
      }
      commit('UPDATE_BOARDS', board)
      // dispatch('getUser')
      return board
    })
}

const updateBoard = ({context, dispatch}, payload) => {
  return boards['putBoard'](payload)

    .then((results) => {
      dispatch('getUser')
      return results
    }).catch(handleError)
}

const deleteBoard = ({context, dispatch}, payload) => {
  return boards['delBoard'](payload._id)
    .then((data) => {
      dispatch('getUser')
    })
    .catch(handleError)
}

const removeUser = ({context, dispatch}) => {
  dispatch('setUser', '')
  dispatch('setUserBoards', [])
  dispatch('setUserPins', [])
}

export default {
  getUser,
  setUser,
  removeUser,
  setUserBoards,
  setUserPins,
  loadUserBoards,
  createBoard,
  updateBoard,
  deleteBoard
}
