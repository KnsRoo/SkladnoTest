<template>
	<div class="container mt-60">
		<form @submit.prevent = "onSubmit" class = "form-group">
		<h1 class="h3 mb-3 fw-normal center">{{title}}</h1>
		<div class="form-floating p-3">
			<p class = "title">Заголовок</p>
      		<input type="text" class="form-control" v-model="title">
    	</div>
 		<div class="form-floating p-3">
			<p class = "title">Текст</p>
      		<textarea class="form-control" v-model="text"></textarea>
    	</div>
		<div class="mb-3">
		  <label for="formFile" class="form-label">Изображение</label>
		  <input class="form-control" type="file" id = "formFile">
		</div>
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
		<div class = "d-flex mt-5 gap">
			<button class="w-100 btn btn-lg btn-primary" type="submit">Сохранить</button>
    		<button class="w-100 btn btn-lg btn-danger">Отменить</button>
		</div>
	</form>
	</div>
</template>

<script>
export default {
	data(){
		return {
			mode: 'new',
			title: '',
			text: '',
			file: null,
			visible: '1',
			publicationDate: null
		}
	},
	computed: {
		title(){
			return this.mode == 'new' ? 'Добавление новости' : 'Редактирование новости'
		}
	},
	created(){
		let now = new Date();
		let month = now.getMonth()+1
		let day =  now.getDate()
		month = (month < 10) ? '0'+month : month
		day = (day < 10) ? '0'+day : day
		let date = `${now.getFullYear()}-${month}-${day}`
		date+=`T${now.getHours()}:${now.getMinutes()}`
		this.publicationDate = date
	},
	async fetch(){

	}
}
</script>

<style>
.mt-60 {
	margin-top: 60px;
}
.gap {
	gap: 10px;
}
</style>