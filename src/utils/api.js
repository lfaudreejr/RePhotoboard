import axios from 'axios'

// const getHost = () => {
//   const protocol = window.location.protocol
//   const host = window.location.host
//   return `${protocol}//${host}`
// }

const apiConnections = (url) => {
  return axios.create({
    // baseURL: `${getHost()}/${url}`
    baseURL: `http://localhost:1337/${url}`
  })
}

export const API = apiConnections('api')
export const USER = apiConnections('user')
export const AUTH = apiConnections('auth')
export const CONNECT = apiConnections('connect')
