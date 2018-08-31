<template>
	<div>
		<div class="panel panel-default">
			<div class="panel-body">
				<edit-password-form></edit-password-form>
			</div>
		</div>
	</div>
</template>
<script>
  import EditPasswordForm from './EditPasswordForm'

  export default {
    components: {
      EditPasswordForm,
    },
  }
</script>
<style scoped>
</style>