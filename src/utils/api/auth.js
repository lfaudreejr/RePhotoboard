import {AUTH} from './connections'

const registerUser = (user) => {
  return AUTH.post('local/register', user)
}

const loginUser = (user) => {
  return AUTH({
    method: 'POST',
    url: '/local',
    data: { identifier: user.email, password: user.password }
  })
}

const loginOAuth = (payload) => {
  return AUTH({
    method: 'GET',
    url: `${payload.provider}/callback${payload.query}`
  })
}

export default {
  registerUser,
  loginUser,
  loginOAuth
}
