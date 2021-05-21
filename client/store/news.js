export const state = () => {
	news: []
}

export const actions = {
	async ADD_FORM(context, data){
		let formData = new FormData()
		formData.append('title', data.title)
		formData.append('text', data.text)
		formData.append('visible', !!data.visible)
		if (data.file)
			formData.append('file', data.file)
		if (data.visible == 2)
			formData.append('publicationdate', data.publicationDate)
		const response = await this.$axios.$post('http://test.local/app/api/news/create',
		  	formData,{
			    headers: {
			        'Content-Type': 'multipart/form-data'
			    }
		 	})
		}
}

export const mutations = {
	
}

export const getters = {
	
}