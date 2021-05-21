export const state = () => {
	news: []
}

export const actions = {
	async FETCH_NEWS({commit}, target){
		let postfix = (target === 'all') ? '/all' : '' 
		const response = await this.$axios.$get(`http://test.local/app/api/news/${postfix}`)
		let data = response._embedded.items
		commit('SET_NEWS', data)
	},
	async PATCH_NEW(context, data){
		let formData = new FormData()
		formData.append('title', data.title)
		formData.append('text', data.text)
		formData.append('visible', (data.visible == 0) ? false : true)
		if (data.file)
			formData.append('file', data.file)
		if (data.visible == 2)
			formData.append('publicationDate', data.publicationDate)
		let link = 'http://test.local/app/api/news/create'
		if (data.id){
			link = `http://test.local/app/api/news/update/${data.id}`
		}
		const response = await this.$axios.$post($link,
		  	formData,{
			    headers: {
			        'Content-Type': 'multipart/form-data'
			}
		 })
	},
	async DEL_NEW(context, id){
		const response = await this.$axios.$delete(`http://test.local/app/api/news/delete/${id}`)
	}
}

export const mutations = {
	SET_NEWS(state, data){
		state.news = data
	}
}

export const getters = {
	NEWS(){
		return state.news
	}
}