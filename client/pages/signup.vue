<template>
  <div class="form-center">
  <div class="form-signin mt-5">
  <form @submit.prevent="signUp">
    <h1 class="h3 mb-3 fw-normal center">Регистрация</h1>

    <div class="form-floating p-3">
      <input type="email" class="form-control" id="floatingInput" v-model="email" placeholder="E-mail">
    </div>
    <div class="form-floating p-3">
      <input type="text" class="form-control" id="floatingInput" v-model="name" placeholder="Имя">
    </div>
    <div class="form-floating p-3">
      <input type="password" class="form-control" id="floatingPassword" v-model="password" placeholder="Пароль">
    </div>
    <div class="form-floating p-3">
      <input type="password" class="form-control" id="floatingPassword" v-model="password_confirm" placeholder="Подтвердите пароль">
    </div>
    <buttonclass="w-100 btn btn-lg btn-primary" type="submit">Зарегистрироваться</button>
  </form>
</div>
</div>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      name: '',
      password: '',
      password_confirm: ''
    }
  }
  methods: {
    async signUp(){
      await this.$store.dispatch('user/REGISTRATION', {name: this.name email: this.email, password: this.password})
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