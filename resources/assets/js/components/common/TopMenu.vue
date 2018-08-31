<template>
	<nav class="navbar navbar-default navbar-static-top" role="navigation">
		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<router-link to="/" class="navbar-brand">Laravel-SPA</router-link>
			</div>
			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav navbar-right">
					<router-link v-if="!user.authenticated" to="/register" tag="li">
						<a>Register</a>
					</router-link>
					<router-link v-if="!user.authenticated" to="/login" tag="li">
						<a>Login</a>
					</router-link>
					<router-link v-if="user.authenticated" to="/profile" tag="li">
						<a>Profile</a>
					</router-link>
					<li  v-if="user.authenticated">
						<a @click.prevent="logout" href="#">Logout</a>
					</li>
				</ul>
			</div><!-- /.navbar-collapse -->
		</div>
	</nav>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        user: state => state.AuthUser,
      }),
    },
    methods:{
      logout(){
        this.$store.dispatch('logoutRequest').then(response => {
          this.$router.push({name: 'home'})
        })
      }
    }
  }
</script>
<style scoped>
</style>
