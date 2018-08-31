
export default {
  actions: {
    updateProfileRequest ({dispatch}, formData) {
      return axios.post('/api/user/profile/update', formData).then(response => {
        console.log('123')
        dispatch('showNotification', {level: 'success', msg: 'Update Success!'})
        console.log('456')
      }).catch(error => {
        dispatch('showNotification', {level: 'error', msg: 'Update Failed!'})
      })
    },
  },
}