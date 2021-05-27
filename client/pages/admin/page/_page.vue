<template>
<div class="container">
	<div class="album py-5 bg-light mt-5">
		<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
			<div v-if="page == 1" class="col">
				<div @click="add" class="card shadow-sm cp">
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
		<button v-if = "PREV" class="w-100 btn btn-lg btn-primary" @click="prev">Предыдущая</button>
		<button v-if = "NEXT" class="w-100 btn btn-lg btn-primary" @click="next">Следующая</button>
	</div>
</div>
</template>

<script>
import NewsItem from '@/components/NewsItem'
import api from '@/utils/api'
import { mapActions, mapGetters } from 'vuex'
import qs from 'qs'

export default {
	async asyncData({store, route}){
		let limit = 6
		let link = api.all
		let page = parseInt(route.params.page)
		let queryParams = {
			limit,
			offset: (page-1)*limit
		}
		link+='?'+qs.stringify(queryParams)
		await store.dispatch("news/FETCH_NEWS",link)
		return { page }
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
		...mapActions('user', ['FETCH_USER']),
		...mapActions('news', ['FETCH_NEWS']),
		add(){
			this.$router.push('/editor')
		},
		next(){
			//await this.FETCH_NEWS(this.NEXT)
			this.page+=1
			this.$router.push(`/admin/page/${this.page}`)
			//return `/admin/page/${this.page}`
		},
		prev(){
			//await this.FETCH_NEWS(this.PREV)
			this.page-=1
			this.$router.push(`/admin/page/${this.page}`)
			//return `/admin/page/${this.page}`
		}
	},
	computed: {
		...mapGetters('user', ['USER']),
		...mapGetters('news', ['NEWS', 'PREV', 'NEXT']),
	},
	async created(){
		//this.page = this.$router.params.page
		if (process.client){
			if (!this.USER){
				await this.FETCH_USER()
			}
			if (!this.USER){
				this.$router.push('/signin')
			}
		}
	}
}
</script>

<style>
.cp {
	cursor: pointer;
}
</style>