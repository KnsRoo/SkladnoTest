<template>
	<div class="container mt-60">
		<h1 class="h3 mb-3 fw-normal center">{{maintitle}}</h1>
		<form @submit.prevent = "onSubmit" class = "form-group">
		<div class="form-floating">
			<p class = "title">Заголовок</p>
      		<input type="text" class="form-control" v-model="title">
    	</div>
 		<div class="form-floating">
			<p class = "title">Текст</p>
      		<textarea class="form-control" v-model="text"></textarea>
    	</div>
		<div class="mb-3">
		  <label for="formFile" class="form-label">Изображение</label>
		  <img v-if = "picturePath" class = "bd-placeholder-img card-img-top" :src = "picturePath"/>
		  <input class="form-control" type="file" @change="handleFileUpload" ref = "file" id = "formFile">
		</div>
		<div class="form-floating">
			<p class = "title">Видимость</p>
			<div class="form-check">
			  <input class="form-check-input" type="radio" v-model="visible" name = "dateGroup" id="unvisible" value = "0">
			  <label class="form-check-label" for="unvisible">
			    Скрыта
			  </label>
			</div>
			<div class="form-check">
			  <input class="form-check-input" type="radio" v-model="visible" name = "dateGroup" id="visible" value = "1" checked>
			  <label class="form-check-label" for="visible">
			    Опубликована
			  </label>
			</div>
			<div class="form-check">
			  <input class="form-check-input" type="radio" v-model="visible" name = "dateGroup" id = "ondate" value = "2" checked>
			  <label class="form-check-label" for="ondate">
			    Опубликовать ко времени
			  </label>
			  <input :disabled="visible != 2" type="datetime-local" v-model="publicationDate">
			</div>
		</div>
		<div class = "d-flex mt-5 gap">
			<button class="w-100 btn btn-lg btn-primary" type="submit">Сохранить</button>
    		<button @click="cancel" class="w-100 btn btn-lg btn-danger">Отменить</button>
		</div>
	</form>
	</div>
</template>

<script>
export default {
	async asyncData({query, $axios }){
		let id = query.edit
		if (!id) return {};
		const response = await $axios.$get(`http://test.local/app/api/news/get/${id}`)
		return {
			editableId: response.id,
			mode: 'edit',
			title: response.title,
			text: response.text,
			visible: response.visible,
			picturePath: response.picturePath,
			publicationDate: response.publicationDate
		}
	},
	//middleware: ['auth'],
	data(){
		return {
			mode: 'new',
			editableId: null,
			title: '',
			text: '',
			file: null,
			visible: '1',
			publicationDate: null,
			picturePath: null
		}
	},
	computed: {
		maintitle(){
			return (this.mode === 'new') ? 'Добавление новости' : 'Редактирование новости'
		}
	},
	methods: {
		async onSubmit(){
			let data = {
				'title': this.title,
				'text': this.text,
				'file': this.file,
				'visible': parseInt(this.visible),
				'publicationDate' : this.publicationDate
			}
			if (this.editableId && mode == 'edit'){
				data['id'] = this.editableId
			}
			await this.$store.dispatch('news/PATCH_NEW', data)
		},
		cancel(){
			this.$router.push('/admin')
		},
		handleFileUpload(){
			this.file = this.$refs.file.files[0];
		}
	},
	async created(){
		let now = new Date();
		let month = now.getMonth()+1
		let day =  now.getDate()
		month = (month < 10) ? '0'+month : month
		day = (day < 10) ? '0'+day : day
		let date = `${now.getFullYear()}-${month}-${day}`
		date+=`T${now.getHours()}:${now.getMinutes()}`
		this.publicationDate = date
		this.mode = this.$route.query.edit ? 'edit' : 'new'
		await this.FETCH_USER()
		if (!this.USER){
			this.$router.push('/signin')
		}
	}
}
</script>

<style>
.mt-60 {
	margin-top: 100px;
}
.gap {
	gap: 10px;
}
</style>