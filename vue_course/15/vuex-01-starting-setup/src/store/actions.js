export default { // can be async!
    login(context) {
        context.commit('setAuth', { isAuth: true })
    },
    logout(context) {
        context.commit('setAuth', { isAuth: false })
    }, 
};