<script>
export default {
	middleware({redirect}){
		return redirect("301","/admin/page/1")
	}
}
</script>