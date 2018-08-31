<template>
	<div class="container">
		<div class="row">
			<div class="col-md-3">
				<div class="list-group">
					<router-link :to="{name:'profile'}" class="list-group-item" activeClass="active" exact>Personal Info</router-link>
					<router-link :to="{name:'profile.editProfile'}" class="list-group-item" activeClass="active" exact>Edit Info</router-link>
					<router-link :to="{name:'profile.editPassword'}" class="list-group-item" activeClass="active" exact>Change Password</router-link>
				</div>
			</div>
			<div class="col-md-9">
				<transition name="fade" mode="out-in">
					<router-view></router-view>
				</transition>
			</div>
		</div>
	</div>
</template>
<script>
  export default {
    name: 'ProfileWrapper',
  }
</script>
<style scoped>
</style>