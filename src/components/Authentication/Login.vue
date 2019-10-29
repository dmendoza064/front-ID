<template>
<v-app>
    <v-card width="400"
        class="mx-auto mt-5">
         <v-card-title>
          <v-img :src= '("../img/pp.jpg")'>
          </v-img>
        </v-card-title>
        <v-form @submit.prevent="$emit('login')">
            <v-text-field
              id="email"
              description="Los datos son privados"
              label="Nombre del Usuario"
              prepend-icon="account_circle"
              autocomplete="off"
                v-model="user.email"
                v-validate="'required|email'"
                :state="validateState('email')"
                name="email"
                placeholder="Introduce el email admin@mmnetwork.com" />
                <center>{{ errors.first('email') }}</center>
            <v-text-field
              :type="showPassword ? 'text' : 'password'" 
              label="Password"
              prepend-icon="lock" 
              :append-icon="showPassword ? 'visibility' : 'visibility_off'"
              @click:append="showPassword = !showPassword"
                autocomplete="off"
                v-model="user.password"
                v-validate="'required|min:6'"
                :state="validateState('password')"
                name="password"
                placeholder="Introduce el password @Password1"/>
                {{ errors.first('password') }}
                <!-- inicia alerta de error -->
                <v-row justify="center">
                  <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="primary"  
                        type="submit">Iniciar Sesión</v-btn>
                    </template>
                    <v-card color="white" dark align="center" class="mx-auto mt-1" width="300">
                      <v-card-title >
                        <center><v-icon x-large color="red">cancel</v-icon></center>
                      </v-card-title>
                      <v-card-title>
                        <span class="headline" style="color: red" align="center" ><center><small> Error de seguridad</small></center></span>
                      </v-card-title>
                      <v-card-text>
                        <big style="color: blue">¡El correo o contraseña no son validos o se encuentran inactivos!      
                          Favor de consultar a tu administrador o vuelva a intentar abrir la sesión
                        </big>
                      </v-card-text>
                      <v-card-actions>
                        <div class="flex-grow-1"></div>
                        <v-btn color="blue" text @click="dialog = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
        </v-form>
      </v-card>
    </v-app>
</template>
<script>
    import validateMixin from '@/mixins/validation'
    export default {
      mixins: [validateMixin],
      props: {
        user: {
          type: Object,
          required: true,
          validator: user => {
            if ( ! user.hasOwnProperty('email') || ! user.hasOwnProperty('password')) {
              console.warn('Usuario no válido')
              return false
            }
            return true
          }
        }
      },
      data () {
          return {
              showPassword:  false,
              notifications: false,
              dialog: false,       
          }
      }
    }
</script>