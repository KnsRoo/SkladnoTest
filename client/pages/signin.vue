<template>
  <div class="form-center">
  <div class="form-signin mt-5">
  <form @submit.prevent="signIn">
    <h1 class="h3 mb-3 fw-normal center">Вход</h1>

    <div class="form-floating p-3">
      <input type="email" class="form-control" id="floatingInput" v-model="login" placeholder="E-mail">
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
export default {
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async signIn(){
      await this.$store.dispatch('user/LOGIN', {email: this.email, password: this.password})
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