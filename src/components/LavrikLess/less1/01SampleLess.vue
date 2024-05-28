<script>
// есть export default
// есть data() нужен для него return / нет  ref и reactive
// нет setup()
// отдельно methods: / computed: / mounted() - хуки
// хуки через mounted() без импорта

export default {
  data() {
    return {
      title: "01-simple / 02-directive",
      name: "",
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  computed: {
    printCount: function() {
      return 'Счетчик: ' + this.count
    }
    },
  mounted() {
    console.log(`компонент 01SimpleLess теперь примонтирован.`);
  }
}
		/*
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
			<!-- <input type="text" v-model="name"> -->
      <h5>Hello, {{ name }}</h5>
      <input type="text" :value="name" @input="name = $event.target.value">				
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