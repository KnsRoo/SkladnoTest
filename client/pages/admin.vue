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
      <div class="col" v-for="item in news">
        <NewsItem :item="item" :editable="true"/>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import NewsItem from '@/components/NewsItem'

export default {
  async asyncData({$axios, store, redirect}){
    if (!store.getters.USER){
      return redirect(302, '/signin')
    }
    const response = await $axios.$get('http://test.local/app/api/news/all')
    let news = response._embedded.items
    return {news}
  },
  data(){
    return {
      news: []
    }
  },
  components: {
    NewsItem
  },
  methods: {
    add(){
      this.$router.push('/editor')
    }
  },
  mounted(){
  }
}
</script>

<style>
.cp {
  cursor: pointer;
}
</style>