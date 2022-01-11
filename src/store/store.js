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
    gameSettings: (state) => {
      console.log(state.gameSettings)
      return state.gameSettings
    },
    hasEnoughOptions: (state) => (key) => {
      return state.gameSettings[key]?.length > 1
    }
  },
  mutations: {
    changeGameSetting(state, payload) {
      console.log(payload);
      state.gameSettings[payload.setting] = payload.value
    }
  }
})