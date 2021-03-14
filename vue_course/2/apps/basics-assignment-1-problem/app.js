const app = Vue.createApp({
    data() {
        return{
            name: 'Brayden Royston',
            age: 19,
            url: 'https://www.allaboutbirds.org/guide/assets/photo/59953191-480px.jpg',
        }
    },
    methods: {
        add5Years() {
            return (this.age + 5);
        },
        randomNumber() {
            return Math.random();
        }
    },
});

app.mount('#assignment');