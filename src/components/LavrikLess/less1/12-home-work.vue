<script>

export default {
  data(){
				return {
                    title: "12-Home-work", 
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
					this.guests.push('');
					/* this.guests.push({ value: '' }); // next */
				},
				removeGuest(i){
					this.guests.splice(i, 1);
				},
				sendForm(){
					if(this.formReady){
						this.formDone = true;
						console.log(this.guests);
						this.guests = this.guests.filter(g => g.length > 0);
					}
				}
			}
}

</script>

<template>
    <div class="section">
    <h3>{{ title }}</h3>
    <ul class="description-list">
      <li class="description-item">Домашняя работа с валидацией формы простой пример</li>
      <li class="description-item">Общее понимание взаимодействий VUE, данных, директив, вывода информации</li>
    </ul>
    <hr>	
	<div class="wrapper">
		<div class="sample">
			<form v-if="!formDone" @submit.prevent="sendForm">
				<div class="form-group">
					<label>Email</label>
					<input v-model.trim="user.email" type="text" class="form-control">
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
					<input @click="addGuest" type="button" class="btn btn-primary" value="+">
				</div>
				<div>
					<div class="form-group" v-for=",i in guests">
						<label @dblclick="removeGuest(i)">Guest {{ i + 1 }}</label>
						<input v-model.trim="guests[i]" type="text" class="form-control">
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
									{{ guest }}
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