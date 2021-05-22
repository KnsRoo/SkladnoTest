export const state = () => ({
	news: [],
	prev: null,
	next: null
})

export const actions = {
	async FETCH_NEWS({commit}, link){
		const response = await this.$axios.$get(link)
		commit('SET_NEWS', response)
	},
	async PATCH_NEW({dispatch}, data){
		let formData = new FormData()
		formData.append('title', data.title)
		formData.append('text', data.text)
		formData.append('visible', (data.visible == 0) ? 0 : 1)
		if (data.file)
			formData.append('file', data.file)
		if (data.visible == 2)
			formData.append('publicationDate', data.publicationDate)
		let link = 'http://test.local/app/api/news/create'
		if (data.id){
			link = `http://test.local/app/api/news/update/${data.id}`
		}
		const response = await this.$axios.$post(link,
		  	formData,{
			    headers: {
			        'Content-Type': 'multipart/form-data'
			}
		 })
		await dispatch('FETCH_NEWS',data.link)
	},
	async DEL_NEW(context, data){
		const response = await this.$axios.$delete(`http://test.local/app/api/news/delete/${data.id}`)
		await dispatch("FETCH_NEWS", data.link)
	}
}

export const mutations = {
	SET_NEWS(state, data){
		if (data._links.prev){
			state.prev = data._links.prev
		} else {
			state.prev = null
		}
		if (data._links.next){
			state.next = data._links.next
		} else {
			state.prev = null
		}
		state.news = data._embedded.items
	}
}

export const getters = {
	NEWS: s => s.news,
	PREV: s => s.prev,
	NEXT: s => s.next
}