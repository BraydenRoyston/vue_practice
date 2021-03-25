<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoal">Set Goals</button>
        <teleport to="body"> 
            <error-alert v-if="inputIsInvalid">
                <h2>Input in invalid!</h2>
                <p>Please fill out the form!</p>
                <button @click="confirmError">Okay</button>
            </error-alert>
        </teleport>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            inputIsInvalid: false,
        };
    },
    methods: {
        setGoal() {
            const  eneteredValue = this.$refs.goal.value;
            if (eneteredValue === "") {
                this.inputIsInvalid = true;
            }
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>