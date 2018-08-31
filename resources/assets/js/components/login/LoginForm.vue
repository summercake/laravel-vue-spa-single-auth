<template>
	<div>
		<form class="form-horizontal" @submit.prevent="login">
			<div class="form-group" :class="{'has-error':errors.has('email')}">
				<label for="email" class="col-md-3 control-label">E-Mail Address</label>
				<div class="col-md-7">
					<input v-model="email" v-validate="{rules: {required:true, email:true}}" id="email" type="email" class="form-control" name="email" required>
					<span class="help-block" v-show="errors.has('name')">{{errors.first('email')}}</span>
				</div>
			</div>
			<div class="form-group" :class="{'has-error':errors.has('password') || bag.has('password-auth')}">
				<label for="password" class="col-md-3 control-label">Password</label>
				<div class="col-md-7">
					<input v-model="password" v-validate="{rules: {required:true, min:6}}" id="password" type="password" class="form-control" name="password" required>
					<span class="help-block" v-show="errors.has('password')">{{errors.first('password')}}</span>
					<span class="help-block" v-if="mismatchError">{{bag.first('password-auth')}}</span>
				</div>
			</div>
			<div class="form-group">
				<div class="col-md-6 col-md-offset-4">
					<button type="submit" class="btn btn-primary">
						Login
					</button>
				</div>
			</div>
		</form>
	</div>
</template>
<script>
  import { ErrorBag } from 'vee-validate'

  export default {
    data () {
      return {
        email: '',
        password: '',
        bag: new ErrorBag(),
      }
    },
    computed:{
      mismatchError(){
        return this.bag.has('password-auth') && !this.errors.has('password')
      }
    },
    methods: {
      login () {
        // when form has error, it will not submit data
        this.$validator.validateAll().then(result => {
          if (result) {
            let formData = {
              email: this.email,
              password: this.password,
            }
            this.$store.dispatch('loginRequest', formData).then(response => {
              this.$router.push({name: 'profile'})
            }).catch(error => {
              if (error.response.status === 421) {
                this.bag.add({field: 'password-auth',msg: 'Email and Password does not match'});
              }
              console.log(error.response)
            })
          }
        })
      },
    },
  }
</script>
<style scoped>
</style>
