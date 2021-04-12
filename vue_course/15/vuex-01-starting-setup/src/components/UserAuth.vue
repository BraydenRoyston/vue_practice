<template>
    <button @click="login" v-if="!isAuth">Log In</button>
    <button @click="logout" v-else>Logout</button>
</template>

<script>
export default {
    methods: {
        login() {
            this.$store.dispatch('login');
            console.log(this.$store.getters.userIsAuthenticated)
        },
        logout() {
            this.$store.dispatch('logout');
        },
    },
    computed: {
        isAuth() {
            return this.$store.getters.userIsAuthenticated;
        }
    }
}
</script>