export default function ({store, redirect}){
	if (!store.getters['user/USER']){
		redirect('/signin')
	}
}