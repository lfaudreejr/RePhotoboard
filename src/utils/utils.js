import _ from 'lodash'
// import fp from 'lodash/fp'

export const get = _.curry((prop, obj) => obj[prop])
// export const map = _.curry((fn, value) => value.map(fn))
export const map = _.curry((fn, el) => _.map(el, fn))

export const getData = get('data')
export const mapGetData = map(getData)
