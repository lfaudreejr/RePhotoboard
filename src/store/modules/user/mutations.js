const USER_BOARDS_UPDATED = (state, boards) => {
  localStorage.setItem('rpb_user_boards', JSON.stringify(boards))
  state.boards = boards
}

const USER_PINS_UPDATED = (state, pins) => {
  localStorage.setItem('rpb_user_pins', JSON.stringify(pins))
  state.pins = pins
}

const USER_UPDATED = (state, user) => {
  localStorage.setItem('rpb_user', JSON.stringify(user))
  state.user = user
}

const UPDATE_BOARDS = (state, board) => {
  const newBoards = state.boards.map(x => x)
  newBoards.push(board)
  state.boards = newBoards
}

export default {
  USER_UPDATED,
  USER_PINS_UPDATED,
  USER_BOARDS_UPDATED,
  UPDATE_BOARDS
}
