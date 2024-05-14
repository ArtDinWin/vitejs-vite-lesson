<script setup>
import { ref, reactive, computed } from 'vue';
import axios from "axios";
const title = ref('#5 Форма отзыва с фото во Vue');
const review = reactive({
  author: 'Артур',
  stars: "1",
  text: '',
  photo: null,
  isRecomended: true
});
const previewFilePath = computed(()=>{
  if(review.photo){
    const srcPhoto = URL.createObjectURL(review.photo);
    console.log("Фото добавлено! ", srcPhoto);
    return srcPhoto;
  }
  return "#";
})
const stars = [1,2,3,4,5];
const submit = () => {
  console.log("Отправленно!");
  axios.post('/api/review', review, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log("Ошибка! ", err);
  })
  .finally(()=>{
    console.log("Попытка отправки завершена! Конец!");
  });
}
const uploadPhoto = (e) => {  
  const [file] = e.target.files; // чтобы не e.target.files[0]
  review.photo = file;
}
</script>
<template>
  <h2>{{ title }}</h2>
  <p>
    Автор: {{ review.author }}
  </p>
  <form 
    class="container"
    @submit.prevent.stop="submit">
    <input 
      type="text"
      v-model="review.author"
      placeholder="Как вас зовут?"
      class="form-control">
      <textarea 
        rows="3"
        class="form-control mt-3 mb-3"
        v-model="review.text"
        placeholder="Что понравилось, что нет?"
        >
      </textarea>
      <h4>Оценка</h4>
      <div 
        class="form-check"
        v-for="star in stars"
        :key="star">
        <input 
          class="form-check-input" 
          type="radio" 
          name="flexRadioDefault"
          v-model="review.stars"
          :value="star"
          :id="`flexRadio-${ star }`">
        <label class="form-check-label" :for="`flexRadio-${ star }`">
          {{ star }}
        </label>
        </div>
        <div class="form-group mt-3">
          <label for="formFile" class="form-label">Фото для загрузки</label>
          <input 
            class="form-control"
            @change="uploadPhoto"
            type="file" 
            id="formFile">
        </div>
        <img 
          :src="previewFilePath" 
          alt=""
          class="image-preview">
        <div class="form-check mt-3">
          <input 
            class="form-check-input" 
            type="checkbox"
            v-model="review.isRecomended" 
            :true-value="true"
            :false-value="false" 
            id="advanced">
          <label class="form-check-label" for="advanced">
            Советую
          </label>
        </div>
        <br>
        <!-- /.form-group -->
        <button class="mt-3 btn btn-primary" type="submit">Отправить</button>
      </form>
  <!-- /.container -->
</template>
<style scoped lang="scss">
h1 {
  font-size: 25px;
}
.read-the-docs {
  color: #888;
}
.form-check {
  text-align: left;
  display: inline-block;
  margin-right: 20px;
}
.image-preview {
  width: 150px;
  height: auto;
  object-fit: contain;
  display: block;
  margin-top: 20px;
}
</style>