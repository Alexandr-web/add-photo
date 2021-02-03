import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    error_file: false
  },
  getters: {
    getImages(state) {
      return state.images;
    },
    getErrorFile(state) {
      return state.error_file;
    }
  },
  actions: {
    addImage(context, file) {
      context.commit('addImage', file);
    }
  },
  mutations: {
    addImage(state, file) {
      state.images.push(file);
    }
  }
});