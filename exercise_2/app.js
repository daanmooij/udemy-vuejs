new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
        	showAlert: function() {
        		alert('Hello');
        	},
        	storeValue: function(event) {
        		this.value = event.target.value;
        	}
        }
    });