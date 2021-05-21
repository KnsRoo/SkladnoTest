<template>
  <div class="form-center">
  <div class="form-signin mt-5">
  <form @submit.prevent="signIn">
    <h1 class="h3 mb-3 fw-normal center">Вход</h1>

    <div class="form-floating p-3">
      <input type="email" class="form-control" id="floatingInput" v-model="email" placeholder="E-mail">
    </div>
    <div class="form-floating p-3">
      <input type="password" class="form-control" id="floatingPassword" v-model="password" placeholder="Пароль">
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Войти</button>
  </form>
</div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('user', ['LOGIN']),
    async signIn(){
      let result = await this.LOGIN({email: this.email, password: this.password})
      if (result){
        console.log('toAdmin')
        this.$router.push('/admin')
      }
    }
  }
}
</script>

<style>
.form-center {
  width: 400px;
  margin: 100px auto;
}
</style>