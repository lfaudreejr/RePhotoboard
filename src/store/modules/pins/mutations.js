const PINS_UPDATED = (state, pins) => {
  state.pins = pins
}

const PIN_UPDATED = (state, pin) => {
  state.pin = pin
}

export default {
  PINS_UPDATED,
  PIN_UPDATED
}
