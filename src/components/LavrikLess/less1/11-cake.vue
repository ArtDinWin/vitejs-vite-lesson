<script>

export default {
  data(){
				return {
                    title: "11-cake",
                    layers: [],
					layersTypes: {
						biscuit: {
							price1sm: 50,
							label: 'Бисквит'
						},
						beze: {
							price1sm: 100,
							label: 'Безе'
						},
						curd: {
							price1sm: 60,
							label: 'Творожный'
						}
					},
					defaultLayer: 'biscuit',
					defaultHeight: 5
				}
			},
			computed: {
				hasLayers(){
					return this.layers.length > 0;
				},
				price(){
					let sum = 0;

					for(let i = 0; i < this.layers.length; i++){
						let layer = this.layers[i];
						let ltype = this.layersTypes[layer.type];
						
						sum += layer.height * ltype.price1sm;
					}

					return sum;
				}
			},
			methods: {
				addLayer(){
					this.layers.push({ 
						type: this.defaultLayer, 
						height: this.defaultHeight 
					});
				},
				removeLayer(i){
					this.layers.splice(i, 1);
				}
			}
}

</script>

<template>
    <div class="section">
    <h3>{{ title }}</h3>
    <ul class="description-list">
      <li class="description-item">Пример по слоям из вебинара Слои Торта</li>
      <li class="description-item">Общее понимание взаимодействий VUE, данных, директив, вывода информации</li>
    </ul>
    <hr>
	<div class="container mt-3">
		<div class="sample">
			<h2>Cake builder</h2>
			<hr>
			<button type="button" class="btn btn-primary" @click="addLayer">Add layer</button>
			<hr>
			<div class="row">
				<div class="col col-sm-6">
					<div class="cake" v-for="layer,i in layers">
						<div class="layer"
							:class="'layer-' + layer.type"
							:style="{ height: layer.height * 10 + 'px' }"
							@click="layer.height++"
							@contextmenu.prevent="layer.height = layer.height > 1 ? layer.height - 1 : layer.height"
						></div>
					</div>
				</div>
				<div class="col col-sm-6">
					<table class="table table-bordered" v-show="hasLayers">
						<tr>
							<th>Type</th>
							<th>Height</th>
							<th>Actions</th>
						</tr>
						<tr v-for="(layer, i) in layers">
							<td>
								<select v-model="layer.type">
									<option v-for="(info, type) in layersTypes"  :value="type">
										{{ info.label }}
									</option>
								</select>
							</td>
							<td>
								<input type="text" class="form-control" v-model.number="layer.height">
							</td>
							<td>
								<button type="button" class="btn btn-danger" @click="removeLayer(i)">X</button>
							</td>
						</tr>
					</table>
				</div>
			</div>
			<hr>
			<div class="alert alert-success price" v-show="hasLayers">
				<span class="price">{{ price }} руб.</span>
				<button type="button" class="btn btn-warning">Order now!</button>
			</div>
		</div>
	</div>
</div>
</template>

<style scoped lang="scss">
.description-list {
    text-align: left;
}
.layer{
	transition: height 0.5s;
}

.layer-biscuit{
	background: url(/src/assets/img/biscuit.jpg);
}

.layer-beze{
	background: url(/src/assets/img/beze.jpg);
}

.layer-curd{
	background: url(/src/assets/img/curd.jpg);
}

.price{
	font-size: 26px;
	margin-right: 40px;
}

.layer-enter-active{
	animation: layerIn 0.5s;
}

@keyframes layerIn{
	from{transform: translateY(50px);}
	to{transform: translateY(0);}
}
</style>