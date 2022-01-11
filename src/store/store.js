import { createStore } from 'vuex'
import gameSettings from '../game-settings.json'

// Create a new store instance
export const store = createStore({
  state() {
    return {
      gameSettings: gameSettings.default
    }
  },
  getters: {
    hasEnoughOptions: (state) => (key) => {
      return state.gameSettings[key]?.length > 1
    }
  },
  mutations: {
    changeGameSetting(state, payload) {
      state.gameSettings[payload.key] = payload.value
    }
  }
})