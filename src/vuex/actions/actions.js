export default {
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product)
    },
    ADD_TO_CALC_RESULT({commit}, data){
      commit('SET_CALC_RESULT', data)
    },
    INCREMENT_CART_ITEM({commit}, index) {
      commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({commit}, index) {
      commit('DECREMENT', index)
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
    },
    
    SET_MAIN_PAGE_ALERT({commit}, index) {
      commit('SET_MAIN_PAGE_ALERT', index)
    },
    SET_ALERT_VALUE({commit}, index) {
      commit('SET_ALERT_VALUE', index)
    }
  }