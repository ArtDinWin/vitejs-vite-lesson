<script>
// У script setup будет отсутствовать components:
import SampleLess from './less1/01SampleLess.vue'
import CompositionApi from './less1/02CompositionApi.vue'
import ScriptSetup from './less1/02ScriptSetup.vue'
import MethodsLess from './less1/03Methods.vue'
import MethodsSoSo from './less1/04-methods-so-so.vue'
import ComputedSale from './less1/06-computed-sale.vue'
import ComputedAsync from './less1/07-computed-async.vue'
import WatchVue from './less1/08-watch.vue'

export default {
  data() {
    return {
      title: "Начало работа с Vue"
    }
  },
  components: {
    SampleLess,
    CompositionApi, 
    ScriptSetup,
    MethodsLess,
    MethodsSoSo,
    ComputedSale,
    ComputedAsync,
    WatchVue   
  }
}
</script>

<template>

<h3>{{ title }}</h3>
<ul class="description-list">
<li class="description-item">01-simple</li>
<li class="description-item">02-directive</li>
<li class="description-item">03-methods</li>
<li class="description-item">04-methods-so-so</li>
<li class="description-item">05-computed</li>
<li class="description-item">06-computed-sale</li>
<li class="description-item">07-computed-async</li>
<li class="description-item">08-watch</li>
<li class="description-item">09-for</li>
<li class="description-item">10-home-work</li>
<li class="description-item">11-cake</li>
</ul>
<hr>
<SampleLess></SampleLess>
<CompositionApi></CompositionApi>
<ScriptSetup></ScriptSetup>
<MethodsLess></MethodsLess>
<MethodsSoSo></MethodsSoSo>
<ComputedSale></ComputedSale>
<ComputedAsync></ComputedAsync>
<WatchVue></WatchVue>

</template>

<style scoped lang="scss">
.description-list {
    text-align: left;
}
</style>