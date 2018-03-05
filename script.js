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
		attachBlue: false,
		color: 'magenta',
		width: 100
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
		},
		divClasses: function() {
			return {
				red: this.attachRed,
				blue: !this.attachRed
			}
		},
		myStyle: function() {
			return {
				backgroundColor: this.color,
				width: this.width + 'px'
			}
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