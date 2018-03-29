import _ from 'lodash'

export const get = _.curry((prop, obj) => obj[prop])
export const map = _.curry((fn, value) => value.map(fn))

export const getData = get('data')
