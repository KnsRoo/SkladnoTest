import qs from 'qs'
import api from '@/middleware/api'

export const state = () => ({
	user: {}
})

export const actions = {
	async FETCH_USER({commit}){
		let token = JSON.parse(localStorage.getItem("jwt"))
		if (!token) return;
		let header = `${token.token_type} ${token.access_token}`
		const response = await this.$axios.$post(api.check, {},{
			headers: {
				Authorization: header
			}
		})
		commit('SET_USER', response)
	},
	async REGISTRATION(context, params){
		const response = await this.$axios.$post(api.registration, qs.stringify(params))
		if (response.message != 'Successfully registration!'){
			return false
		} 
		return true
	},
	async LOGIN({dispatch, commit, state}, data){
		const response = await this.$axios.$post(api.login, 
			qs.stringify(data),{
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Accept: 'application/json'
			}
		})
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
		state.user = data
	},
	REM_USER(state, data){
		state.user = {}
	}
}

export const getters = {
	USER: s => s.user.name
}