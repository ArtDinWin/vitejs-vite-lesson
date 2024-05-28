<script setup>
import {computed, ref} from 'vue';
import LavrikLess01 from './LavrikLess/LavrikLess01.vue'

const title = ref('#01 Начало, работа с Vue');
</script>

<template>

<h2>{{ title }}</h2>
<ul class="description-list">
<li class="description-item">Вывод данных в теги и в атрибуты</li>
<li class="description-item">Упрощённая структура экземпляра Vue</li>
<li class="description-item">el, data, computed, methods, watch</li>
<li class="description-item">Основные директивы</li>
<li class="description-item">Тонкости работы с событиями</li>
</ul>
<hr>
<LavrikLess01></LavrikLess01>

</template>

<style scoped lang="scss">
.description-list {
    text-align: left;
}
</style>
