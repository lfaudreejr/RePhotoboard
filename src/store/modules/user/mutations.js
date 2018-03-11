const USER_PINS_UPDATED = (state, pins) => {
  state.userPins = pins
}

const USER_UPDATED = (state, user) => {
  state.user = user
}

export default {
  USER_UPDATED,
  USER_PINS_UPDATED
}
