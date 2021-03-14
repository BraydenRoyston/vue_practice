const app = Vue.createApp({
    data() {
        return{
            tasks: [],
            inputtedTask: '',
            showList: true,
            buttonText: 'Hide List',
        };
    },
    computed: {

    },
    methods: {
        addTask() {
            this.tasks.push(this.inputtedTask);
            this.inputtedTask = '';
        },
        toggleList() {
            this.showList = !this.showList;
            if (this.showList) {
                this.buttonText = 'Hide List';
            } else {
                this.buttonText = 'Show List';
            }
        }
    }
});

app.mount('#assignment')