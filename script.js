new Vue({
	el: '#app',
	data: {
		title: 'CANVAS',
		link: 'http://google.com',
		label: 'Input',
		finishedLink: '<a href="https://github.com" target="_blank">Github</a>',
		counter: 0
	},
	methods: {
		changeTitle: function(event) {
			this.label = event.target.value;
		},
		sayHello: function() {
			this.title = 'Hello';
			return this.title;
		},
		increaseCounter: function() {
			this.counter++;
		}
	}
});