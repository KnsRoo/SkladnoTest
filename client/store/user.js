export const state = () => {
	user: undefined
}

export const actions = {
	async FETCH_USER({commit}){
		let token = localStorage.getItem("jwt")
		let header = `${token.token_type} ${token.access_token}`
		const response = await this.$axios.$post('http://test.local/app/api/auth/me', {
			headers: {
				Authorization: header
			}
		})
		commit('SET_USER', response)
	},
	async REGISTRATION(context, params){
		const response = await this.$axios.$post('http://test.local/app/api/auth/registration', params)
		console.log(response)
	},
	async LOGIN({dispatch, commit}, data){
		const response = await this.$axios.$post('http://test.local/app/api/auth/login', data)
		localStorage.setItem("jwt", response)
		await dispatch('FETCH_USER')
	},
	LOGOUT({commit}){
		localStorage.removeItem("jwt")
		commit('REM_USER')
	}
}

export const mutations = {
	SET_USER(state, data){
		state.user = data
	},
	REM_USER(state, data){
		state.user = undefined
	}
}

export const getters = {
	USER(){
		return state.user
	}
}