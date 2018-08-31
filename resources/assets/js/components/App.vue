<template>
	<div>
		<top-menu></top-menu>
		<notification></notification>
		<transition name="fade" modd="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
  import TopMenu from './common/TopMenu'
  import Notification from './common/Notification'
  import JwtToken from '../helpers/jwt'
  import Cookie from 'js-cookie'

  export default {
    // check auth for every page
    created () {
      if (JwtToken.getToken()) {
        this.$store.dispatch('setAuthUser')
      } else if (Cookie.get('auth_id')) {
        this.$store.dispatch('refreshToken')
      }
    },
    components: {
      TopMenu,
      Notification,
    },
  }
</script>
<style scoped>
</style>
