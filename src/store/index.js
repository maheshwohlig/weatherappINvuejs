import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, name: 'mahesh' },
      { id: 2, name: 'bunny' },
      { id: 3, name: 'micky' },
      { id: 4, name: 'rohit' },
      { id: 5, name: 'rahul' },
      { id: 6, name: 'jeck' },
      { id: 7, name: 'harry' },
    ],
  },
  getters: {
    products: (state) => state.todos
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
