<template>
<div class="container">
	<div class="album py-5 bg-light mt-5">
		<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
			<div class="col" v-for="item in NEWS">
				<NewsItem :item="item" :editable="false"/>
			</div>
			<div class="d-flex g-3">
				<button v-if="PREV" class="w-100 btn btn-lg btn-primary" @click="next" type="submit">Предыдущая</button>
				<button v-if="NEXT" class="w-100 btn btn-lg btn-primary" @click="prev" type="submit">Следующая</button>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import NewsItem from '@/components/NewsItem'
import { mapGetters } from 'vuex'

export default {
	async fetch({store, route}){
		let page = 1
		let limit = 6
		let link = 'http://test.local/app/api/news'
		if (route.query.page){
			page = parseInt(route.query.page)
			offset = (page-1)*limit
			link+=`?offset=${offset}&limit=${limit}`
			this.page = page
		}
		if (store.getters['news/NEWS'].length == 0){
			await store.dispatch('news/FETCH_NEWS',link)
		}
	},
	data(){
		return {
			page: 1
		}
	},
	components: {
		NewsItem
	},
	methods: {
		...mapActions('news', ['FETCH_NEWS']),
		async next(){
			await this.FETCH_NEWS(this.NEXT)
		},
		async prev(){
			await this.FETCH_NEWS(this.PREV)
		}
	},
	computed: {
		...mapGetters('news', ['NEWS', 'PREV', 'NEXT']),
	}
}
</script>

<style>
</style>
