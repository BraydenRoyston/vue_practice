import { createStore } from 'vuex';

import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

import counterModule from './counter/index.js'

const store = createStore({
    modules: {
        numbers: counterModule, // numbers is the namespace for counterModule!!
    },
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations: rootMutations,
    getters: rootGetters,
    actions: rootActions
});

export default store;