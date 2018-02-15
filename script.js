new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		link: 'http://google.com',
		label: 'Input',
		finishedLink: '<a href="https://github.com" target="_blank">Github</a>'
	},
	methods: {
		changeTitle: function(event) {
			this.label = event.target.value;
		},
		sayHello: function() {
			this.title = 'Hello';
			return this.title;
		}
	}
});