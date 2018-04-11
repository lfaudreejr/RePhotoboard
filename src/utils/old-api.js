import axios from 'axios'

// const getHost = () => {
//   const protocol = window.location.protocol
//   const host = window.location.host
//   return `${protocol}//${host}`
// }

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

export const getUserData = (jwt) => {
  return USER({
    method: 'GET',
    url: '/me',
    headers: { 'Authorization': `Bearer ${jwt}` }
  })
    .then(data => data.data)
}

export const getUserBoards = (id, jwt) => {
  return API({
    method: 'GET',
    url: `/boards/${id}`,
    headers: { 'Authorization': `Bearer ${jwt}` }
  })
}

export const postBoard = (payload, jwt) => {
  return API({
    method: 'POST',
    url: '/boards',
    headers: { 'Authorization': `Bearer ${jwt}` },
    data: payload
  })
}

export const putBoard = (payload, jwt) => {
  return API({
    method: 'PUT',
    url: '/boards/' + payload._id,
    headers: { 'Authorization': `Bearer ${jwt}` },
    data: payload
  })
}

export const delBoard = (id, jwt) => {
  return API({
    method: 'DELETE',
    url: '/boards/' + id,
    headers: { 'Authorization': `Bearer ${jwt}` }
  })
}
