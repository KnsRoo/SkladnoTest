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
    <button class="w-100 btn btn-lg btn-primary" :disabled="!valid" type="submit">Зарегистрироваться</button>
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
      name: '',
      password: '',
      password_confirm: ''
    }
  },
  computed: {
    valid(){
      let isEqual = ((this.password_confirm == this.password) && (this.password.length != 0))
      let isEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email)
      let isName = this.name.length > 1
      return isEqual && isEmail && isName
    }
  },
  methods: {
    ...mapActions('user', ['REGISTRATION']),
    async signUp(){
      let result = await this.REGISTRATION({name: this.name, email: this.email, password: this.password})
      if (result){
        this.$router.push('/signin')
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