<template>
  <div class="form-center">
  <div class="form-signin mt-5">
  <form>
    <h1 class="h3 mb-3 fw-normal center">{{title}}</h1>

    <div class="form-floating p-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="E-mail">
    </div>
    <div class="form-floating p-3">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Пароль">
    </div>
    <div v-if = "mode == 'signup'" class="form-floating p-3">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Подтвердите пароль">
    </div>
    <button v-if="mode == 'signin'" class="w-100 btn btn-lg btn-primary" type="submit">Войти</button>
    <button v-else class="w-100 btn btn-lg btn-primary" type="submit">Зарегистрироваться</button>
  </form>
</div>
</div>
</template>

<script>
export default {
  data(){
    return {
      mode: 'signin',
    }
  },
  computed: {
    title(){
      return (this.mode == 'signin') ? 'Вход' : 'Регистрация'
    }
  },
  mounted(){
    this.mode = this.$route.query.mode
  }
}
</script>

<style>
.form-center {
  width: 400px;
  margin: 100px auto;
}
</style>