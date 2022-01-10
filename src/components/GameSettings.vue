<template>
  <n-form class="game-settings-form">
    <on-off-switch label="Different shot type on every roll" v-model:value="settings.differentConsecutiveShots"/>
    <on-off-switch label="Different disc type on every roll" v-model:value="settings.differentConsecutiveDiscs"/>
    <tag-select label="Discs" :items="settings.discs"/>
    <tag-select label="Shots" :items="settings.shots"/>
    <player-select label="Unique players"/>
  </n-form>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import PlayerSelect from './PlayerSelect.vue'
import TagSelect from './TagSelect.vue'
import OnOffSwitch from './OnOffSwitch.vue'

export default defineComponent({
  components: { PlayerSelect, TagSelect, OnOffSwitch },
  setup () {
    const store = useStore()

    return {
      settings: computed(() => store.state.gameSettings),
    }
  }
})
</script>

<style scoped>

.game-settings-form {
  padding-right: 0.2rem;
}

</style>