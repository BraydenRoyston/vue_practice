const app = Vue.createApp({
  data() {
    return {
        userInput: '',
        userInput2: '',
        confirmedInput: '',      
    };
  },
  methods: {
      onAlert() {
          alert('hello!');
      },
      updateUserInput(event) {
          this.userInput = event.target.value;
      },
      updateUserInput2(event) {
          this.userInput2 = event.target.value;
      },
      confirmInput() {
        this.confirmedInput = this.userInput2;
      },
  },
});

app.mount("#assignment");
