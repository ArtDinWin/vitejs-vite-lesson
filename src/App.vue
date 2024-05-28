<script setup>
import {computed, ref } from 'vue';
import {reactive} from 'vue';
// import HelloWorld from './components/HelloWorld.vue'

// первый способ обращения к компонентам это импорт SearchItemInit в main.js и регистрация app.component("SearchItemInit" , SearchItems)
// второй способ обращения к компонентам FormReport и ComponentsSlots импорт в компоненте
import FormReport from './components/FormReport.vue'
import LavrikLess1 from './components/LavrikLess1.vue'

const title = ref('Полный курс Vue 3 | youtube lessons');


const activeTabs = reactive([
  {
    id: 1,
    name: "#1 Поиск товаров",
    active : false,
    component: "SearchItemInit"
  },
  {
    id: 2,
    name: "#2 Форма отзыва с фото",
    active : false, 
    component: FormReport
  },
  {
    id:3,
    name: "#3 Lavrik, less1",
    active : true,
    component: LavrikLess1
  }
] );

const renderTab = (valueTab) => {
// for(key in activeTabs){
//   console.log(key);
//   console.log(activeTabs[key]);
  // if(key === value) {
  //   activeTabs[key].active = true;  
  // } else {
  //   activeTabs[key].active = false; 
  // }
// }
activeTabs.forEach(function(value, key) {
  if(value.id === valueTab) {
    activeTabs[key].active = true;  
    console.log(activeTabs[key]);
  } else {
    activeTabs[key].active = false; 
    console.log(activeTabs[key]);
  }
}) ;
};

function ready() {
// Функция определения touchscreen устройств
  const isTouchDevice = () => {  
  // Условие определения touchscreen устройств
    const resultIsTouchDevice = ('ontouchstart' in window) ||  
      (navigator.maxTouchPoints > 0) ||  
      (navigator.msMaxTouchPoints > 0);
    if(resultIsTouchDevice){
      console.log("isTouchDevice=>", resultIsTouchDevice);
      document.querySelector("body").classList.add("dev-touch");
      document.querySelector("body").classList.remove("dev-no-touch");
    } else {
      console.log("isTouchDevice=>", resultIsTouchDevice);
      document.querySelector("body").classList.add("dev-no-touch");
      document.querySelector("body").classList.remove("dev-touch");
    }

    return resultIsTouchDevice;  
  } 

// вызываем функцию определения touchscreen устройств
  isTouchDevice();

  
const resizeObserver = new ResizeObserver((entries, observer) => {
    for(let entry of entries){
      isTouchDevice();
    }
});

// отслеживаем изменение размеров body для вызова функции isTouchDevice()
resizeObserver.observe(document.querySelector('html'));
// при html {  width: 100vw;}

}

document.addEventListener("DOMContentLoaded", ready);
</script>

<template>
<h1>{{ title }}</h1>
<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">  
    <button 
      v-for="activeTab in activeTabs" 
      :key="activeTab.id" 
      :class="{ active: activeTab.active, 'nav-link': true }" 
      :id="`nav-${activeTab.id}-tab`" 
      data-bs-toggle="tab" 
      :data-bs-target="'#nav-' + activeTab.id" 
      type="button" 
      role="tab" 
      :aria-controls="`nav-${activeTab.id}`" 
      :aria-selected="activeTab.active" 
      @click="renderTab(activeTab.id)" 
      >
        {{ activeTab.name }}
    </button>
    <!-- <button class="nav-link active" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" type="button" role="tab" aria-controls="nav-1" aria-selected="true" @click="renderTab(1)" >#1 Поиск товаров</button>
    <button class="nav-link" id="nav-2-tab" data-bs-toggle="tab" data-bs-target="#nav-2" type="button" role="tab" aria-controls="nav-2" aria-selected="false" @click="renderTab(2)">#2 Форма отзыва с фото</button>
    <button class="nav-link" id="nav-3-tab" data-bs-toggle="tab" data-bs-target="#nav-3" type="button" role="tab" aria-controls="nav-3" aria-selected="false" @click="renderTab(3)">#3 Компоненты, слоты</button> -->
  </div>
</nav>
<div class="tab-content" id="nav-tabContent"> 

  <div 
    v-for="activeTab in activeTabs" 
    :key="activeTab.id" 
    :class="{ show: activeTab.active, active: activeTab.active, 'tab-pane': true, 'fade': true  }" 
    :id="`nav-${activeTab.id}`" 
    role="tabpanel" 
    :aria-labelledby="`nav-${activeTab.id}-tab`"
    >
    
      <div 
        class="wrapp" 
        v-if="activeTab.active"
        >
          <component :is="activeTab.component" />
      </div>
  </div>

  <!-- <div class="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
    <div class="wrapp" v-if="activeTabs[0].active">
       <SearchItems/> -->
      <!--<component :is="SearchItems" />
    </div>
  </div>
  <div class="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab">
    <div class="wrapp" v-if="activeTabs[1].active"><FormReport/></div>
  </div>
  <div class="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-3-tab">
    <div class="wrapp" v-if="activeTabs[2].active"><ComponentsSlots/></div>
  </div> -->

</div>

<!-- <SearchItems/> -->


</template>

<style lang="scss">
h1 {
  font-size: 2em !important;
  line-height: 1.1;
  margin: 40px 0 30px 0 !important;
}
h2 {
  font-size: 1.5em !important;
  line-height: 1.1;
  margin: 40px 0 30px 0 !important;
}
.wrapp {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.button-counter {
  margin-top: 45px;
}
.nav-tabs button.nav-link.active {
  background-color: #f7f7f7;
  border: var(--bs-nav-tabs-border-width) solid #d9d9d9;
}
.nav-tabs button.nav-link {
  border: var(--bs-nav-tabs-border-width) solid #d9d9d9;
}
.nav-tabs button.nav-link:hover {
  background-color: #f7f7f7;
  border: var(--bs-nav-tabs-border-width) solid #d9d9d9;
}
</style>
