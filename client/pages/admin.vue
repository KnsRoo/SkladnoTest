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
	<div class="d-flex g-3">
		<button v-if = "PREV" class="w-100 btn btn-lg btn-primary" @click="prev" type="submit">Предыдущая</button>
		<button v-if = "NEXT" class="w-100 btn btn-lg btn-primary" @click="next" type="submit">Следующая</button>
	</div>
</div>
</template>

<script>
import NewsItem from '@/components/NewsItem'

import { mapActions, mapGetters } from 'vuex'

export default {
	async fetch({store, query}){
		let page = 1
		let limit = 6
		let link = 'http://test.local/app/api/news/all'
		if (query.page){
			page = parseInt(query.page)
			let offset = (page-1)*limit
			link+=`?offset=${offset}&limit=${limit}`
			this.page = page
		}
		if (store.getters['news/NEWS'].length == 0){
			await store.dispatch('news/FETCH_NEWS',link)
		}
	},
	//middleware: ['auth'],
	data(){
		return {
			page: 1
		}
	},
	components: {
		NewsItem
	},
	methods: {
		...mapActions('user', ['FETCH_USER']),
		...mapActions('news', ['FETCH_NEWS']),
		add(){
			this.$router.push('/editor')
		},
		async next(){
			await this.FETCH_NEWS(this.NEXT)
			this.page+=1
			this.$router.push(`?page=${this.page}`)
		},
		async prev(){
			await this.FETCH_NEWS(this.PREV)
			this.page-=1
			this.$router.push(`?page=${this.page}`)
		}
	},
	computed: {
		...mapGetters('user', ['USER']),
		...mapGetters('news', ['NEWS', 'PREV', 'NEXT']),
	},
	async created(){
		// if (process.client){
		// 	if (!this.USER){
		// 		await this.FETCH_USER()
		// 	}
		// 	if (!this.USER){
		// 		this.$router.push('/signin')
		// 	}
		// }
	}
}
</script>

<style>
.cp {
	cursor: pointer;
}
</style>