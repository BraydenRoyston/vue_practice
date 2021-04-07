<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      saved: false,
    };
  },
  methods: {
    confirmInput() {
      // do something
      // ...
      // then change the page:
      this.$router.push('/teams');
    },
    saveChanges() {
      this.saved = true;
    },
    // beforeRouteEnter(to, from, next) {
    //   // console.log(to, from);
    //   // next();
    // }
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersList Cmp BeforeRouteLeave');
    console.log(to, from);
    
    if(this.saved) {
      next();
    } else {
      const leaveChoice = confirm('Are you sure? You got unsaved changes!');
      next(leaveChoice);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>