<template>
  <div class="container">
<div class="album py-5 bg-light mt-5">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

      <div class="col" v-for="item in news">
        <NewsItem :item="item" :editable="false"/>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import NewsItem from '@/components/NewsItem'

export default {
  async asyncData({$axios}){
    const response = await $axios.$get('http://test.local/app/api/news')
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
  }
}
</script>

<style>
</style>
