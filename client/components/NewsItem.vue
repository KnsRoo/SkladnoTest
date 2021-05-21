<template>
	<div class="card shadow-sm">
		<img v-if = "item.picturePath" class = "bd-placeholder-img card-img-top" :src = "item.picturePath"/>
		<img v-else class = "bd-placeholder-img card-img-top" src = "/placeholder-image.png"/>
		<div class="card-body">
			<h3>{{item.title}}</h3>
			<p class="card-text">{{item.text}}</p>
			<div class="d-flex justify-content-between align-items-center">
				<div v-if="editable" class="btn-group">
                  <button type="button" @click="edit" class="btn btn-sm btn-outline-secondary">Редактировать</button>
                  <button type="button" @click="remove" class="btn btn-sm btn-outline-secondary">Удалить</button>
                </div>
				<small class="text-muted">{{item.publicationDate}}</small>
			</div>
	  </div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default{
	props: {
		item: Object,
		editable: Boolean
	},
	methods: {
		...mapActions('news', ['DEL_NEW']),
		edit(){
			this.$router.push({ path: '/editor', query: { edit: this.$props.item.id } })
		},
		remove(){
			this.DEL_NEW(this.$props.item.id)
		}
	}
}
</script>