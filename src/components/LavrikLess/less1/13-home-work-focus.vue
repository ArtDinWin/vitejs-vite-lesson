<script>

export default {
  data(){
				return {
                    title: "13-Home-work", 
					user: {
					email: '',
					phone: '',
					firstName: '',
					lastName: ''
				},
				guests: [],
				formDone: false
				}
			},
			computed: {
				fullName(){
					return (this.user.firstName + ' ' + this.user.lastName).trim();
				},
				formReady(){
					return Object.values(this.user).every(val => val.length > 0);
				}
			},
			methods: {
				addGuest(){
					this.guests.push({ value: '' });

					this.$nextTick(() => {
						let guests = this.$refs.guests;
						guests[guests.length - 1].focus();
					});
				},
				removeGuest(i){
					this.guests.splice(i, 1);
				},
				sendForm(){
					if(this.formReady){
						this.formDone = true;
						this.guests = this.guests.filter(g => g.value.length > 0);
					}
				}
			},
			mounted(){
				this.$refs.firstInp.focus();
			}
}

</script>

<template>
    <div class="section">
    <h3>{{ title }}</h3>
    <ul class="description-list">
      <li class="description-item">Домашняя работа с валидацией формы простой пример</li>
      <li class="description-item">Общее понимание взаимодействий VUE, данных, директив, вывода информации</li>
	  <li class="description-item">Жизненный цикл / $nextTick</li>
    </ul>
    <hr>	
	<div class="wrapper">
		<div class="sample">
			<form v-if="!formDone" @submit.prevent="sendForm">
				<div class="form-group">
					<label>Email</label>
					<input v-model.trim="user.email" type="text" class="form-control" ref="firstInp">
				</div>
				<div class="form-group">
					<label>Phone</label>
					<input v-model.trim="user.phone" type="text" class="form-control">
				</div>
				<div class="form-group">
					<label>First Name</label>
					<input v-model.trim="user.firstName" type="text" class="form-control">
				</div>
				<div class="form-group">
					<label>Last Name</label>
					<input v-model.trim="user.lastName" type="text" class="form-control">
				</div>
				<div class="form-group">
					<label>Guests</label>
					<input  @click="addGuest" type="button" class="btn btn-primary" value="+">
				</div>
				<div>
					<div class="form-group" v-for="guest,i in guests">
						<label @dblclick="removeGuest(i)">Guest {{ i + 1 }}</label>
						<input v-model.trim="guest.value" type="text" class="form-control" ref="guests">
					</div>
				</div>
				<hr>
				<button class="btn btn-success" :disabled="!formReady">Send Data</button>
			</form>
			<div v-else>
				<h2>All done!</h2>
				<table class="table table-bordered">
					<tr>
						<td>Email</td>
						<td>{{ user.email }}</td>
					</tr>
					<tr>
						<td>Phone</td>
						<td>{{ user.phone }}</td>
					</tr>
					<tr>
						<td>Full Name</td>
						<td>{{ fullName }}</td>
					</tr>
					<tr>
						<td>Guests</td>
						<td>
							<ul class="list-group">
								<li class="list-group-item" v-for="guest in guests">
									{{ guest.value }}
								</li>
							</ul>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</div>
</template>

<style scoped lang="scss">
.description-list {
    text-align: left;
}
</style>