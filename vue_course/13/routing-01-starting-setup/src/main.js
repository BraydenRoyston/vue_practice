import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
    routes: [
        // every object is a route
        {
            path: '/teams', //ourdomain.com/teams => TeamsList
            component: TeamsList
        },
        {
            path: '/users',
            component: UsersList
        },
        // note
        // if you have /teams/example
        // it must be put before the /:teamId route
        {
            path: '/teams/:teamId',
            component: TeamMembers,
            props: true,
        }
    ],
    linkActiveClass: 'active',
    history: createWebHistory(),
});

const app = createApp(App)

app.use(router);
app.mount('#app');
