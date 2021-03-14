const app = Vue.createApp({
    data() {
        return {
            textOne: '',
            confirmedTextOne: '',
            sight: 'visible',
            color: '',
        };
    },
    computed: {
        classOne() {
            return [this.confirmedTextOne, this.sight];
        },
        classTwo() {
            text = "backgroundColor: ";
            text += this.color;
            return [text];
        }
    },
    methods: {
        addTextOne(event) {
            this.textOne = event.target.value;
        },
        confirmTextOne() {
            this.confirmedTextOne = this.textOne;
        },
        toggleVisibility() {
            if (this.sight === 'visible') {
                this.sight = 'hidden';
            } else {
                this.sight = 'visible';
            }
        },
        addColor(event) {
            this.color = event.target.value;
            console.log(this.color);
        }
    },
});

app.mount('#assignment');