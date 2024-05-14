<script setup>
import { computed, ref } from 'vue';

const title = ref('#4 Поиск товаров во Vue, v-model, computed');

const count = ref(0);

const message = ref('Страница загружена ' + new Date().toLocaleString());

const increment = () => { count.value++ };

const products = ref([
  { title: "бананы", price: 54.8 },
  { title: "яблоки", price: 34.8 },
  { title: "хлеб", price: 24.8 }
])

const qwery = ref("");
const qweryProducts = computed(() => {
  let p = products.value;
  let search = qwery.value;
  if (search) {
    p = p.filter((product) => {
      return product.title.indexOf(search) !== -1 || product.price.toString().indexOf(search) !== -1
    })
  };

  return p;
});


</script>

<template>
  <h2>{{ title }}</h2>
  <span 
    v-bind:title="message" 
    style="margin-bottom:20px;display: block;"
    >
    Наведи на меня курсор на пару секунд, чтобы увидеть динамически связанное значение title!
  </span>
  <button @click="increment">Count: <strong>{{ count }}</strong></button>
  <br>
  <div>
    <input 
      type="search" 
      placeholder="Поиск продуктов..." 
      v-model="qwery" 
      style="margin-bottom:20px;margin-top:45px;width: 300px;"
      >
  </div>
  {{ qwery }}
  <ul class="items-list">
    <li 
      v-for="product in qweryProducts" 
      :key="product.title"
      >
      {{ product.title }}=<sub>{{ product.price.toLocaleString() }}</sub>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.items-list {
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: auto;
  margin-left: auto;
  max-width: 300px;
  margin-top: 0;
}
</style>
