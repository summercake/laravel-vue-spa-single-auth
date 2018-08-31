<template>
	<div>
		<div class="panel panel-default">
			<ul class="list-group">
				<li class="list-group-item">
					Username
					<br>
					<h4>{{user.name}}</h4>
				</li>
				<li class="list-group-item">
					Email
					<br>
					<h4>{{user.email}}</h4>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    created(){
		this.$store.dispatch('setAuthUser')
    },
    computed: {
      ...mapState({
        user: state => state.AuthUser,
      }),
    }
  }
</script>
