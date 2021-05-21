<template>
<div class="container">
	<div class="album py-5 bg-light mt-5">
		<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
			<div class="col" v-for="item in NEWS">
				<NewsItem :item="item" :editable="false"/>
			</div>

		</div>
	</div>
</div>
</template>

<script>
import NewsItem from '@/components/NewsItem'
import { mapGetters } from 'vuex'

export default {
	async fetch({store}){
		if (store.getters['news/NEWS'].length == 0){
			await store.dispatch('news/FETCH_NEWS','published')
		}
	},
	data(){
		return {
		}
	},
	components: {
		NewsItem
	},
	computed: {
		...mapGetters('news', ['NEWS']),
	}
}
</script>

<style>
</style>
