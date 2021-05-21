<template>
  <div>
    <NavBarAdmin v-if = "loggedIn"/>
    <NavBar v-else/>
    <Nuxt />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import NavBarAdmin from '@/components/NavBarAdmin'

export default {
  components: {
    NavBar,
    NavBarAdmin
  },
  computed: {
    loggedIn(){
      return !!this.$store.getters['user/USER']
    }
  }
}
</script>
