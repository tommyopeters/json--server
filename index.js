import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    usersList: [],
    userProfile: [],
    userSlipcard: [],
    current: {}
  },
  getters: {
    usersList: state => state.usersList
  }
})
