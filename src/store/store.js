import { createStore } from 'vuex'
import gameSettings from '../game-settings.json'

// Create a new store instance
export const store = createStore({
  state() {
    return {
      gameSettings: gameSettings.default
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})