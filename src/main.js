import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// первый способ обращения к компонентам это импорт SearchItemInit в main.js и регистрация app.component("SearchItemInit" , SearchItems)
// второй способ обращения к компонентам FormReport и ComponentsSlots импорт в компоненте
import SearchItems from './components/SearchItems.vue'

const app = createApp(App);
// или если не импортировать createApp можно написать  const app = Vue.createApp(App);
app.component("SearchItemInit" , SearchItems)


app.mount('#app');

// в одну строку
// createApp(App).mount('#app')
