<script>

export default {
  data(){
				return {
          title: "09-for",
					numbers: []
				}
			},
			methods: {
				add(){
					this.numbers.push(Math.random());
				},
				double(i){
					this.numbers[i] *= 2;
				}
			}
}
		/*
Особенность директивы v-for во VUE 
- синтаксис v-for="num,i in numbers"
- способно адекватно обрабатывать и передавать индекс i из дерективы например в @mouseenter="double(i)"



    Директивы
			v-bind = @			:value="some"
			v-on = :				v-on:click.prevent.once		@click=""
			v-if
			v-else-if
			v-else
			v-show
			v-model				v-on:click.lazy.number
			v-for
			e t.c.

      v-module - синтаксический сахар
		*/
</script>

<template>
<div class="section">
<h3>{{ title }}</h3>
<ul class="description-list">
  <li class="description-item">Директивы v-bind / v-on / v-modul</li>
</ul>
<hr>
<div class="wrapper">
		<div class="sample">
			<button type="button" class="btn btn-primary" @click="add">Add number</button>
			<hr>
			<ul class="list-group">
				<li v-for="(num,i) in numbers" class="list-group-item" @mouseenter="double(i)">
					#{{ i }} / {{ num }}
				</li>
			</ul>
		</div>
	</div>
  <hr>
</div>
</template>

<style scoped lang="scss">
.description-list {
    text-align: left;
}
</style>