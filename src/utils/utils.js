import _ from 'lodash'
// import fp from 'lodash/fp'

export const get = _.curry((prop, obj) => obj[prop])
export const map = _.curry((fn, el) => _.map(el, fn))
export const flatten = _.curry((arr) => _.flatten(arr))
export const getNewObject = (obj) => _.create({}, obj)

export const extractJWT = get('jwt')
export const getData = get('data')
export const mapGetData = map(getData)

export const getBoardPins = get('board_pins')
export const mapGetBoardPins = map(getBoardPins)

export const uniqueBy = (el, by) => _.uniqBy(el, by)
export const uniqueById = (el) => uniqueBy(el, '_id')

export const getJWT = () => {
  if (localStorage && localStorage.getItem('rpbtoken')) {
    return JSON.parse(localStorage.getItem('rpbtoken'))
  }
  return null
}
export const setJWT = (jwt) => localStorage.setItem('rpbtoken', JSON.stringify(jwt))
export const handleError = (err) => console.error(err)
