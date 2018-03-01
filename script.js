new Vue({
	el: '#app',
	data: {
		title: 'CANVAS',
		link: 'http://google.com',
		label: 'Input',
		finishedLink: '<a href="https://github.com" target="_blank">Github</a>',
		counter: 0,
		name: 'Dante',
		x: 0,
		y: 0,
		attachRed: false,
		attachGreen: false,
		attachBlue: false
	},
	methods: {
		changeTitle: function(event) {
			this.label = event.target.value;
		},
		sayHello: function() {
			this.title = 'Hello';
			return this.title;
		},
		increaseCounter: function(step, event) {
			this.counter += step;
		},
		updateCoordinates: function(event) {
			this.x = event.clientX;
			this.y = event.clientY;
		},
		alertMe: function() {
			alert('Alert!');
		}
	},
	computed: {
		output: function() {
			return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
		}
	},
	watch: {
		counter: function(value) {
			var vm = this;
			setTimeout(function() {
				vm.counter = 0;
			}, 2000);
		}
	}
});