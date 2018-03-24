const USER_BOARDS_UPDATED = (state, boards) => {
  localStorage.setItem('user_boards', JSON.stringify(boards))
  state.boards = boards
}

const USER_PINS_UPDATED = (state, pins) => {
  localStorage.setItem('user_pins', JSON.stringify(pins))
  state.pins = pins
}

const USER_UPDATED = (state, user) => {
  localStorage.setItem('user', JSON.stringify(user))
  state.user = user
}

export default {
  USER_UPDATED,
  USER_PINS_UPDATED,
  USER_BOARDS_UPDATED
}
