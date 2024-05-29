<script>
export default {
  data(){
				return {
					showAlert: false,
          title: "06-ComputedSale",
		  promo: '',
		price: 1000
				}
			},
			computed: {
				sale(){
					return this.getSale(this.promo);
				},
				hasSale(){
					return this.sale > 0;
				},
				total(){
					return this.price * (1 - this.sale / 100);
				}
			},
			methods: {
				getSale(promo){
					let codes = {
						some: 10,
						other: 20
					};

					return codes.hasOwnProperty(promo) ? codes[promo] : 0;
				}
			} ,
  mounted() {

  }
}

</script>

<template>
<div class="section">
<h3>{{ title }}</h3>
<ul class="description-list">
  <li class="description-item">
	Скидка расчитываемая от промокода - функция getSale(promo) methods
	<br>
	Корректный промокод 'some' / 'other' + Enter (убрать фокус) из-за v-model.lazy
	<br>
	{{ '<input type="text" v-model.trim.lazy="promo">' }}
	<br>
	<b>Итог:</b><br> - разбиваем computed на мелкие, чтобы переиспользовать в шаблоне (пример со скидкой по промокоду) <br>- computed могут зависить от data() могут от других computed каскадно
  </li>
</ul>
<hr>
<div class="wrapper">
		<div class="sample">
			<input type="text" v-model.trim.lazy="promo"><br>
			<hr>
			{{ price }}
			<div v-if="hasSale">
				<div class="alert alert-danger">- {{ sale }}%</div>
				{{ total }}
			</div>			
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