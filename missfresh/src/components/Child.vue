<template>
	<ul>
		<li v-for="(item,index) in categoryList">
			{{item.name}}
		</li>
	</ul>
</template>
<script>
	export default{
		name:"Child",
		props:["categoryList"]
	}
</script>
<style>
	
</style>