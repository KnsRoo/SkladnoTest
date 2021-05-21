<template>
  <div class="container">
<div class="album py-5 bg-light mt-5">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
        <div @click = "add" class="card shadow-sm cp">
          <img class = "bd-placeholder-img card-img-top" src="/add.png"/>
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div class="card-text">Добавить новость</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col" v-for="item in NEWS">
        <NewsItem :item="item" :editable="true"/>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import NewsItem from '@/components/NewsItem'

import { mapActions, mapGetters } from 'vuex'

export default {
  async fetch({store}){
    if (store.getters['news/NEWS'].length == 0){
      await store.dispatch('news/FETCH_NEWS','all')
    }
  },
  //middleware: ['auth'],
  data(){
    return {
    }
  },
  components: {
    NewsItem
  },
  methods: {
    ...mapActions('user', ['FETCH_USER']),
    add(){
      this.$router.push('/editor')
    }
  },
  computed: {
    ...mapGetters('user', ['USER']),
    ...mapGetters('news', ['NEWS']),
  },
  async created(){
    this.FETCH_USER()
    console.log(this.USER)
  }
}
</script>

<style>
.cp {
  cursor: pointer;
}
</style>