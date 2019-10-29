<template v-slot:activator="{ on }">
    <div>
        <h3 class="text-center text-muted mt-4">
           Iniciar sesión 
        </h3>
        
        <b-alert v-if="error" dark v-on="on" @dialog="true" show variant="danger">
            {{ errorMessage }}
        </b-alert>
            
        <login-form :user="user" @login="submit"></login-form>
    </div>
</template>

<script>
    import LoginForm from '@/components/Authentication/Login'
    import {mapState, mapActions} from 'vuex'
    export default {
      components: {
        LoginForm
      },
      data () {
        return {
          user: {
            email: '',
            password: ''
          }
        }
      },
      computed: {
        ...mapState('auth', ['error', 'errorMessage'])
      },
      methods: {
        ...mapActions('auth', ['signIn']),
        async submit () {
          const validate = await this.$validator.validateAll() //&& this.$validator.user.email
          if ( ! validate) {
            return false
          }
          console.log(this.user.email)
          await this.signIn(this.user)
          this.$router.push('/secret')
        }
      }
    }
</script>