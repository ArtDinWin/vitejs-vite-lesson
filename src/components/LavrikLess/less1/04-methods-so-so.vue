<script>
export default {
  data(){
				return {
					showAlert: false,
          title: "04-methods-so-so",
					firstName: '',
					lastName: '',
          name: ""
				}
			},
      methods: {
				fullNameMethods(){
					console.log('here');
					return (this.firstName + ' ' + this.lastName).trim();
				},
        // some bad, на грани или за гранью философии vue...
				toUpper(str){
					return str.toUpperCase().split('').reverse().join('');
				}
			},
      computed: {
				fullNameComputed(){
					console.log('here2');
					return (this.firstName + ' ' + this.lastName).trim();
				}
			}
      ,
  mounted() {

  }
}

</script>

<template>
<div class="section">
<h3>{{ title }}</h3>
<ul class="description-list">
  <li class="description-item">Не удачное использование 
    (Проблема - вызывается при любом изменении
  если мы вызываем через methods, оно пересчитывается всегда даже при изменении 
  name которое не учавствует в  fullName. Решение это computed - вычисляемое свойство.
  Вызов через Methods  fullNameMethods() круглые скобки, 
  Вызов через Computed   fullNameComputed без круглых скобок - нельзя передать аргумент (создается новый Computed)
  </li>
</ul>
<hr>
<div class="wrapper">
		<div class="sample">
			FN: <input type="text" v-model.trim="firstName"><br>
			LN: <input type="text" v-model.trim="lastName"><br>
			<hr>
			<h5>Methods: Hello, {{ fullNameMethods() }}</h5>
      <h5>Computed: Hello, {{ fullNameComputed }}</h5>
			<hr>
			<button @click="showAlert = !showAlert" class="btn btn-success" type="button">Toggle alert</button>
			<div class="alert alert-danger mt-3" v-show="showAlert">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt porro iste incidunt optio maxime eos vero cupiditate delectus in velit quae neque aliquid facilis nobis repellendus, quidem eveniet! Nihil, cum.
			</div>
		</div>
	</div>
  <div class="wrapper">
		<div class="sample">
			<!-- <input type="text" v-model="name"> -->
      <h5>Hello, {{ name }}</h5>
      <input type="text" v-model="name">				
		</div>
	</div>
  {{ toUpper(firstName) }}
			{{ toUpper(lastName) }}
  <hr>
</div>
</template>

<style scoped lang="scss">
.description-list {
    text-align: left;
}
</style>