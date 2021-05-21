import qs from 'qs'

export const state = () => ({
	user: {}
})

export const actions = {
	async FETCH_USER({commit}){
		let token = JSON.parse(localStorage.getItem("jwt"))
		let header = `${token.token_type} ${token.access_token}`
		const response = await this.$axios.$post('http://test.local/app/api/auth/me', {},{
			headers: {
				Authorization: header
			}
		})
		commit('SET_USER', response)
	},
	async REGISTRATION(context, params){
		const response = await this.$axios.$post('http://test.local/app/api/auth/registration', {params})
		if (response.message != 'Successfully registration!'){
			return false
		} 
		return true
	},
	async LOGIN({dispatch, commit, state}, data){
		const response = await this.$axios.$post('http://test.local/app/api/auth/login', 
			qs.stringify(data),{
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Accept: 'application/json'
			}
		})
		console.log(response)
		localStorage.setItem("jwt", JSON.stringify(response))
		await dispatch('FETCH_USER')
		if (!state.user.name){
			return false
		} 
		return true
	},
	LOGOUT({commit}){
		localStorage.removeItem("jwt")
		commit('REM_USER')
	}
}

export const mutations = {
	SET_USER(state, data){
		console.log("setting user", data)
		state.user = data
		console.log("user setted", state.user)
	},
	REM_USER(state, data){
		state.user = undefined
	}
}

export const getters = {
	USER: s => s.user.name
}