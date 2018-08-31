<template>
	<div>
		<form @submit.prevent="updatePassword">
			<div class="form-group" :class="{'has-error':errors.has('password')}">
				<label for="password" class="col-md-3 control-label">Password</label>
				<input v-model="password" v-validate="{rules: {required:true, min:6}}" id="password" type="password" class="form-control" name="password" required>
				<span class="help-block" v-show="errors.has('password')">{{errors.first('password')}}</span>
			</div>
			<div class="form-group" :class="{'has-error':errors.has('password_confirmation')}">
				<label for="password-confirm" class="col-md-3 control-label">Confirm Password</label>
				<input id="password-confirm" v-validate="{rules: {required:true, min:6, confirmed:password}}" type="password" class="form-control" name="password_confirmation" required>
				<span class="help-block" v-show="errors.has('password_confirmation')">{{errors.first('password_confirmation')}}</span>
			</div>
			<div class="form-group">
				<div class="col-md-6 col-md-offset-4">
					<button type="submit" class="btn btn-primary">
						Change Password
					</button>
				</div>
			</div>
		</form>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        password: '',
        password_confirmation: ''
      }
    },
    methods: {
      updatePassword () {
        this.$validator.validateAll().then(result => {
          if (result) {
            let formData = {
              password: this.password,
            }
            this.$store.dispatch('updatePasswordRequest', formData).then(response => {
              // this.$router.push({name: 'profile'})
              console.log('Success!');
            }).catch(error => {
              //
            })
          }
        })
      },
    },
  }
</script>
<style scoped>
</style>
