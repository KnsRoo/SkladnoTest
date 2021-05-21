<template>
  <div class="container">
<div class="album py-5 bg-light mt-5">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

      <div class="col" v-for="item in news">
        <div class="card shadow-sm">
          <img v-if = "item.picturePath" class = "bd-placeholder-img card-img-top" :src = "item.picturePath"/>
          <img v-else class = "bd-placeholder-img card-img-top" src = "/placeholder-image.png"/>
          <div class="card-body">
            <h3>{{item.title}}</h3>
            <p class="card-text">{{item.text}}</p>
            <div class="d-flex justify-content-between align-items-center">
              <small class="text-muted">{{item.publicationDate}}</small>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>

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
  }
}
</script>

<style>
</style>
