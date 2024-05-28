<script>
// есть export default
// нет data() вместо этого ref и reactive
// есть setup()
// нужно все через return (переменные, функции, computed)
// нет methods через функции потом return
// computed через import потом return
// хуки через mounted() без импорта отдельно


import { ref, computed  } from 'vue'

export default {
setup() {
const title = ref("02 CompositionApi");
const name = ref("");
const count = ref(0);

function increment() {
      // .value необходимо в JavaScript
      count.value++
    }
  const fullTitle = computed(() => {
    return `Заголовок: ${name.value}`;
  });
    return {
      title,
      name, 
      fullTitle,
      increment
    }
  },
  
  mounted() {
    console.log(`компонент 02CompositionApi теперь примонтирован.`)
  }
}

</script>

<template>

<h3>{{ title }}</h3>
<ul class="description-list">
  <li class="description-item">Composition API</li>
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

</template>

<style scoped lang="scss">
.description-list {
    text-align: left;
}
</style>