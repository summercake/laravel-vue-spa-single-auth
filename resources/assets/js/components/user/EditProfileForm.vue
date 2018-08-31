<template>
	<div>
		<form @submit.prevent="updateProfile">
			<div class="form-group" :class="{'has-error':errors.has('name')}">
				<label for="name" class="col-md-3 control-label">Name</label>
				<input v-model="name" v-validate="{rules: {required:true}}" id="name" type="text" class="form-control" name="name" required>
				<span class="help-block" v-show="errors.has('name')">{{errors.first('name')}}</span>
			</div>
			<div class="form-group" :class="{'has-error':errors.has('email')}">
				<label for="email" class="col-md-3 control-label">Email</label>
				<input v-model="email" v-validate="{rules: {required:true, min:6}}" id="email" type="email" class="form-control" name="email" required>
				<span class="help-block" v-show="errors.has('email')">{{errors.first('email')}}</span>
			</div>
			<div class="form-group">
				<div class="col-md-6 col-md-offset-4">
					<button type="submit" class="btn btn-primary">
						Change Profile
					</button>
				</div>
			</div>
		</form>
	</div>
</template>
<script>
  import JwtToken from '../../helpers/jwt'
  import { ErrorBag } from 'vee-validate'
  import * as types from '../../store/mutation-type'

  export default {
    created () {
      this.$store.dispatch('setAuthUser')
    },
    computed: {
      name: {
        get () {
          return this.$store.state.AuthUser.name
        },
        set (value) {
          this.$store.commit({
			type:types.UPDATE_PROFILE_NAME,
            value: value
          })
        },
      },
      email: {
        get () {
          return this.$store.state.AuthUser.email
        },
        set (value) {
          this.$store.commit({
            type:types.UPDATE_PROFILE_EMAIL,
            value: value
          })
        },
      },
    },
    methods: {
      updateProfile () {
        const formData = {
          name: this.name,
          email: this.email,
        }
        this.$store.dispatch('updateProfileRequest', formData).then(response => {
          this.$router.push({name: 'profile'})
        }).catch(error => {

        })
      },
    },
  }
</script>
<style scoped>
</style>