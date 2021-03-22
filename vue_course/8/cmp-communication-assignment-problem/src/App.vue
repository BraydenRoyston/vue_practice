<template>
  <section>
    <active-user :username="username" :age="age"></active-user>
    <user-data @update-user="updateUser"></user-data>
    <chess-moves
      :white_moves="whiteMoves"
      :black_moves="blackMoves"
      @add-white="addWhite"
      @add-black="addBlack"
      @reset="reset"
    ></chess-moves>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: "brayden",
      age: 19,
      whiteMoves: 0,
      blackMoves: 0,
    };
  },
  methods: {
    updateUser(newUsername, newAge) {
      this.username = newUsername;
      this.age = +newAge;
    },
    addWhite() {
        this.whiteMoves += 1;
    },
    addBlack() {
        this.blackMoves += 1;
    },
    reset() {
        this.whiteMoves = 0;
        this.blackMoves = 0;
    }
  },
};
</script>
