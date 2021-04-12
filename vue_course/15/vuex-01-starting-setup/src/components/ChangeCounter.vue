<template>
    <button @click="increase({value: 11})">Add 11</button>
    <button @click="inc">Add 1</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        // addOne() {
        //     this.$store.dispatch('increment');
        // }
        // ...mapActions(['increment', 'increase']),
        ...mapActions('numbers', {
            inc: 'increment',
            increase: 'increase',
        })
    }
}
</script>