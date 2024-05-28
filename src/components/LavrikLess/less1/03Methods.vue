<script>
export default {
  data() {
    return {
      title: "03-methods",
      name: ""
    }
  },
  methods: {
    onInput(e) {
      this.name = e.target.value;  
    }
  },
  mounted() {

  }
}

</script>

<template>

<h3>{{ title }}</h3>
<ul class="description-list">
  <li class="description-item">Методы</li>
</ul>
<hr>
<div class="wrapper">
		<div class="sample">
			<!-- <input type="text" v-model="name"> -->
      <h5>Hello, {{ name }}</h5>
      <input type="text" :value="name" @input="onInput">				
		</div>
	</div>
  <hr>

</template>

<style scoped lang="scss">
.description-list {
    text-align: left;
}
</style>