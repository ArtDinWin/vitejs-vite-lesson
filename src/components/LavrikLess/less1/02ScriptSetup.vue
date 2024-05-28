<script setup>
// нет export default
// нет data() вместо этого ref и reactive
// отсутствует setup() 
// нет methods это обычные функции
// computed через import
// хуки через import onMounted

import { ref, computed, onMounted  } from 'vue'

const title = ref("02 Script setup");
const name = ref("");
const count = ref(0);

function increment() {
  count.value++
    }

const doubledCount = computed(() => count.value * 2);

 onMounted (() => {
    console.log(`компонент 02ScriptSetup теперь примонтирован.`)
  }   ) 
</script>

<template>
<div class="section">
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
</div>
</template>

<style scoped lang="scss">
.description-list {
    text-align: left;
}

</style>