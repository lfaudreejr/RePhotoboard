import axios from 'axios'

const apiConnections = (url) => {
  return axios.create({
    // baseURL: `${getHost()}/${url}`
    baseURL: `https://rephotoboardstrapi.herokuapp.com/${url}`
  })
}

export const API = apiConnections('api')
export const USER = apiConnections('user')
export const AUTH = apiConnections('auth')
export const CONNECT = apiConnections('connect')
