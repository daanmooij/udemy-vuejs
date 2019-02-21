new Vue({
	el: '#exercise',
	data: {
		name: 'Daan Mooij',
		age: 26,
		image: 'https://vuejs.org/images/logo.png'
	},
	methods: {
		ageTimesThree: function() {
			return this.age * 3;
		}
	}
});
