import Vue from 'vue'

export async function signIn (context, user) {
  try {
    context.commit('setLoading', true, {root: true})
    await Vue.axios({
      method: 'POST',
      url: '/api/auth/signin',
      data: {
        password: user.password,
        usernameOrEmail: user.email
      }
    })
    context.commit('setUser', user)
  } catch (e) {
    context.commit('authError', e.message)
  } finally {
    context.commit('setLoading', false, {root: true})
  }
}