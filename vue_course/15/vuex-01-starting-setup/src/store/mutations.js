export default { // must be synchronous!
    setAuth(state, payload) {
        state.isLoggedIn = payload.isAuth;
    },
};