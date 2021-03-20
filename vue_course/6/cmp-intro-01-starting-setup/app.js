const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '1234567890',
                    email: 'manual@gmail.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '124335125235',
                    email: 'julie@gmail.com',
                }
            ],
        };
    },
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '1234567890',
                email: 'manual@gmail.com',
            },
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },

});

app.mount('#app');