<template>
    <form @submit.prevent="updateUser">
        <label>Username</label>
        <input type="text" v-model="username">
        <label>Age</label>
        <input type="text" v-model="age">
        <button>Update User Info</button>
    </form>
</template>

<script>
export default {
    emits: ['update-user'],
    data() {
        return {
            username: '',
            age: '',
        }
    },
    methods: {
        updateUser() {
            this.$emit('update-user', this.username, this.age);
        },
    }
}
</script>