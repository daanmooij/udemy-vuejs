const app = Vue.createApp({
  data() {
    return {
      name: 'Daan',
      age: 30,
      imageUrl: 'https://vuejs.org/images/logo.png',
    };
  },
  methods: {
    agePlusFive() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
