<template>
<div class="container">
	<div class="album py-5 bg-light mt-5">
		<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
			<div class="col" v-for="item in NEWS">
				<NewsItem :item="item" :editable="false"/>
			</div>
		</div>
	</div>
	<div class="d-flex g-3">
		<button v-if="PREV" class="w-100 btn btn-lg btn-primary" @click="prev">Предыдущая</button>
		<button v-if="NEXT" class="w-100 btn btn-lg btn-primary" @click="next">Следующая</button>
	</div>
</div>
</template>

<script>
import NewsItem from '@/components/NewsItem'
import { mapActions, mapGetters } from 'vuex'
import api from '@/utils/api'
import qs from 'qs'

export default {
	data(){
		return {
			page: 1
		}
	},
	components: {
		NewsItem
	},
	computed: {
		...mapGetters('news', ['NEWS', 'PREV', 'NEXT']),
	},
	methods: {
		...mapActions('news', ['FETCH_NEWS']),
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
	async created(){
		let limit = 6
		let link = api.published
		if (this.$route.query.page){
			let page = parseInt(this.$route.query.page)
			let params = {
				limit,
				offset: (page-1)*limit
			}
			link+='?'+qs.stringify(params)
			this.page = page
		}
		await this.FETCH_NEWS(link)
	},
}
</script>

<style>
</style>
