<script setup>
import { ref, reactive, computed } from 'vue';
const title = ref('Полный курс Vue 3 | #5 Форма отзыва с фото во Vue');

const review = reactive({
  author: '',
  stars: null,
  text: '',
  photos: [],
  isRecomended: true
})

</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style scoped lang="scss">
h1 {
  font-size: 25px;
}
.read-the-docs {
  color: #888;
}
</style>
