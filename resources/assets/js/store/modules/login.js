import JwtToken from '../../helpers/jwt'
import * as types from '../mutation-type'

export default {
  actions: {
    loginRequest ({dispatch}, formData) {
      return axios.post('/api/login', formData).then(response => {
        //console.log(response.data)
        dispatch('loginSuccess', response.data)
      })
    },
    loginSuccess ({dispatch}, tokenResponse) {
      JwtToken.setToken(tokenResponse.token)
      JwtToken.setAuthId(tokenResponse.auth_id)
      dispatch('setAuthUser')
    },
    logoutRequest ({commit, dispatch}) {
      return axios.post('/api/logout').then(response => {
        JwtToken.removeToken()
        dispatch('unsetAuthUser')
      })
    },
  },
}