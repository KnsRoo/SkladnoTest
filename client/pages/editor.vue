<template>
	<div class="container mt-60">
		<h1 class="h3 mb-3 fw-normal center">{{maintitle}}</h1>
		<div class = "form-group">
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
		  <img v-if = "picturePath" width = "500" class = "bd-placeholder-img card-img-top" :src = "picturePath"/>
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
			  <input :disabled="visible != 2" id = "ondate" placeholder="YYYY-MM-DD HH:MM" type="text" v-model="publicationDate">
			</div>
		</div>
		<div class = "d-flex mt-5 gap">
			<button @click="onSubmit" class="w-100 btn btn-lg btn-primary">Сохранить</button>
    		<button @click="cancel" class="w-100 btn btn-lg btn-danger">Отменить</button>
		</div>
	</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import api from '@/utils/api'

export default {
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
		...mapGetters('user', ['USER']),
		maintitle(){
			return (this.mode === 'new') ? 'Добавление новости' : 'Редактирование новости'
		}
	},
	methods: {
		...mapActions('user', ['FETCH_USER']),
		async onSubmit(){
			let data = {
				'title': this.title,
				'text': this.text,
				'file': this.file,
				'visible': parseInt(this.visible),
				'publicationDate' : this.publicationDate
			}
			if (this.editableId && this.mode == 'edit'){
				data['id'] = this.editableId
			}
			data.link = api.all
			await this.$store.dispatch('news/PATCH_NEW', data)
			this.$router.push('/admin')
		},
		cancel(){
			this.$router.push('/admin')
		},
		handleFileUpload(){
			this.file = this.$refs.file.files[0];
		}
	},
	async created(){
		this.mode = this.$route.query.edit ? 'edit' : 'new'
		if (process.client){
			if (!this.USER){
				await this.FETCH_USER()
			}
			if (!this.USER){
				this.$router.push('/signin')
			}
		}
		let id = this.$route.query.edit
		if (!id) return;
		const response = await this.$axios.$get(api.get(id))
		this.editableId = response.id,
		this.mode = 'edit',
		this.title = response.title,
		this.text = response.text,
		this.visible = response.visible,
		this.picturePath = response.picturePath,
		this.publicationDate = response.publicationDate
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