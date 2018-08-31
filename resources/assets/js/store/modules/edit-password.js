export default {
  actions: {
    updatePasswordRequest ({dispatch}, formData) {
      return axios.post('/api/user/password/update', formData).then(response => {
        dispatch('showNotification', {level: 'success', msg: 'Update Success!'})

      }).catch(error=>{
        dispatch('showNotification', {level: 'error', msg: 'Update Failed!'})
      })
    },
  },
}