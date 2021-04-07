import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    routes: [
        // every object is a route
        {
            path: '/',
            redirect: '/teams', // redirects to our teams route when no path is entered
        },
        {
            name: 'teams',
            path: '/teams', //ourdomain.com/teams => TeamsList
            meta: { needsAuth: true },
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            // alias: '/' // alias for /teams, this is an alternative to the redirect route

            // nested route
            children: [
                // note
                // if you have /teams/example
                // it must be put before the /:teamId route
                { // /teams/t1
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true,
                },
            ],
        },
        {
            path: '/users',
            components: { 
                default: UsersList,
                footer: UsersFooter,
            },
            beforeEnter(to, from, next) {
                // console.log(to, from);
                next();
            }
        },
        
        // how can we handle undefined routes?
        // catch all routes!
        {
            path: '/:notFound(.*)',
            redirect: '/teams',
        },
    ],
    linkActiveClass: 'active',
    // scrollBehavior(to, from, savedPosition) {
    //     console.log(to, from, savedPosition)

    //     // returns an object that describes where we should scroll to
    //     if(savedPosition) {
    //         return savedPosition;
    //     }
    //     return {
    //         left: 0,
    //         top: 0,
    //     }
    // },
    history: createWebHistory(),
});

router.beforeEach(function (to, from, next) {
    if(to.meta.needsAuth) {
        console.log('Needs auth!');
        next();
    } else {
        next();
    }
    //console.log('global beforeEach')
    // console.log(to,from);
    // if (to.name == 'team-members') {
    //     next();
    // } else {
    //     next({name: 'team-members', params: { teamId: 't2' } });
    // }
    next();
});

const app = createApp(App)

app.use(router);
app.mount('#app');
