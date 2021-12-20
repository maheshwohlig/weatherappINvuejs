import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weathers: [
      // { id: 1, name: 'mahesh' },
      // { id: 2, name: 'bunny' },
      // { id: 3, name: 'micky' },
      // { id: 4, name: 'rohit' },
      // { id: 5, name: 'rahul' },
      // { id: 6, name: 'jeck' },
      // { id: 7, name: 'harry' },
    ],
  },
  getters: {
    products: (state) => state.weathers
  },
  actions: {
    async fetchdata({ commit }, seach) {
      console.log(seach);
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${seach}&appid=e6dbb018942b5cd4d196d42e1886c8fa`);

      commit('setdata', result.data);
    },
    // async newdata({ commit }, seach) {
    //   const response = await axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${seach}&appid=e6dbb018942b5cd4d196d42e1886c8fa`, { seach, completed: false });

    //   commit('newdata', response.data);
    // }
  },
  mutations: {
    setdata: (state, weathers) => (state.weathers = weathers),
    // newdata: (state, weathers) => state.weathers.push(weathers),
  },
  modules: {
  }
})
