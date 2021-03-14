const app = Vue.createApp({
    data() {
        return {
            val: 0,
        }
    },
    watch: {
        val() {
            const that = this;
            setTimeout(() => {
            that.val = 0;
            }, 5000);
        }
    },
    computed: {
        displayVal() {
            if (this.val === 0) {
                return "Zero. Start Clicking!"
            }
            else if (this.val < 37) {
                return "Not there yet";
            }
            else if (this.val === 37) {
                return this.val;
            }
            else {
                return "Too much!";
            }
        }
    },
    methods: {
        increase(num) {
            this.val += num;
        },
        decrease(num) {
            this.val += num;
        }
    }
});

app.mount('#assignment');