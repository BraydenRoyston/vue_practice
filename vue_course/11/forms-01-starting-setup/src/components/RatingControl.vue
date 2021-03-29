<template>
    <ul>
        <li :class="{active: activeOption === 'poor'}"><button type="button" @click="activate('poor')">Poor</button></li>
        <li :class="{active: activeOption === 'average'}"><button type="button" @click="activate('average')">Average</button></li>
        <li :class="{active: activeOption === 'great'}"><button type="button" @click="activate('great')">Great</button></li>
    </ul>
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update:model-value'],
    // we change it to a computed property so that it continually gets
    // updated as we submit the form
    // data() {
    //     return {
    //         activeOption: this.modelValue,
    //     };
    // },
    computed: {
        activeOption() {
            return this.modelValue;
        }
    },
    methods: {
        activate(option) {
            this.activeOption = option;
            console.log('hello');
            console.log(this.activeOption);
            this.$emit('update:modelValue', option);
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;

}

li {
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.active {
    border-color: purple;

}
.active button {
    color: purple;
}
</style>