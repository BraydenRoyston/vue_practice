<template>
    <div>
        <header v-if="$slots.header">
            <slot name="header">
                <!-- Default content -->
                <!-- <h2>Default</h2> -->
            </slot>
        </header>
        <!-- slots are for HTML code -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    // special property provided by vue
    mounted() {
        console.log(this.$slots.header);
    }
}
</script>

<style scoped>
    div {
        margin: 2rem auto;
        max-width: 30rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
    }
    header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
</style>