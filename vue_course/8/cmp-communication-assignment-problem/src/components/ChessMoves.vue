<template>
    <section>
        <div>
            <h1>White's Moves: {{ white_moves }}</h1>
            <h1>Black's Moves: {{ black_moves }}</h1>
        </div>
        <div>
            <button @click="addWhite">+1 White</button>
            <button @click="addBlack">+1 Black</button>
            <button @click="reset">Reset</button>
        </div>
    </section>
</template>

<script>
export default {
    emits: ['add-white', 'add-black', 'reset'],
    props: {
        white_moves: {
            type: Number,
            required: true,
        },
        black_moves: {
            type: Number,
            required: true,
        },
    },
    methods: {
        addWhite() {
            this.$emit('add-white');
        },
        addBlack() {
            this.$emit('add-black')
        },
        reset() {
            this.$emit('reset');
        },
    }
}
</script>