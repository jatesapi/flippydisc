<template>
  <n-form class="game-settings-form">
    <tag-select label="Discs" :items="settings.default.discs"/>
    <tag-select label="Shots" :items="settings.default.shots"/>
    <player-select label="Unique players"/>
  </n-form>
</template>

<script>
import { defineComponent } from 'vue'
import PlayerSelect from './PlayerSelect.vue'
import TagSelect from './TagSelect.vue'
import settings from '../game-settings.json'

export default defineComponent({
  components: { PlayerSelect, TagSelect },
  setup () {
    return {
      settings
    }
  }
})
</script>

<style scoped>

.game-settings-form {
  width: 500px;
}

</style>