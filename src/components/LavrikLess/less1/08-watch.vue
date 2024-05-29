<script>
export default {
	data(){
				return {
					title: "08-watch",
					promo: '',
					price: 1000,
					sale: 0
				}
			},
			computed: {
				hasSale(){
					return this.sale > 0;
				},
				total(){
					return this.price * (1 - this.sale / 100);
				}
			},
			watch: {
				promo(){
					this.getSale(this.promo, sale => {
						this.sale = sale;
					});
				}
			},
			methods: {
				// checkSale(){
				// 	this.getSale(this.promo, sale => {
				// 		this.sale = sale;
						// callback setTimeout его контекст объект windows
						// поэтому без стрелочной функции this.sale будет ссылаться на неправильный объект
						// стрелочная функция решает проблему фиксирует контекст где вызвана
				// 	});
				// },
				getSale(promo, fn){
					setTimeout(function(){
						let codes = {
							some: 10,
							other: 20
						};

						let sale = codes.hasOwnProperty(promo) ? codes[promo] : 0;
						fn(sale);
					}, 500);
				}
			} ,
  mounted() {

  }
}
		/*
		function getSale(promo, fn){
			setTimeout(() => {
				let codes = {
					some: 10,
					other: 20
				};

				let sale = codes.hasOwnProperty(promo) ? codes[promo] : 0;
				fn(sale);
			}, 500);
		}

		getSale('promo', function(sale){
			console.log(sale);
		})

		*/
</script>

<template>
<div class="section">
<h3>{{ title }}</h3>
<ul class="description-list">
<li class="description-item">
	Скидка расчитываемая от промокода - функция getSale(promo) methods
	<br>
	Корректный промокод 'some' / 'other' + Enter (убрать фокус) из-за v-model.lazy
	<br>{{ '<input type="text" v-model.trim.lazy="promo">' }}
</li>
<li>
	computed Бесполезны когда функция обращается к серверу за данными Ассинхронные  computed
<br>
Два способа получить ответ 1) Promise (asyn await синтаксический сахар используемый Promice) 2) callback функции
</li>
<li>перепишим на watch (метод watch подход VUE заменяет @change="checkSale" )</li>
<li>Убрали checkSale() вызвали внутри watch</li>
<li>
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