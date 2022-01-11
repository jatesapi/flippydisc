<template>
  <n-form class="game-settings-form">
    <on-off-switch
      settingKey="shots"
      label="Different shot type on every roll"
      @update:value="handleSettingChange($event, 'differentConsecutiveShots')"
    />
    <on-off-switch
      settingKey="discs"
      label="Different disc type on every roll"
      @update:value="handleSettingChange($event, 'differentConsecutiveDiscs')"
    />
    <tag-select
      label="Shots"
      :items="settings.shots"
      @update:value="handleSettingChange($event, 'shots')"
    />
    <tag-select
      label="Discs"
      :items="settings.discs"
      @update:value="handleSettingChange($event, 'discs')"
    />
  </n-form>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import TagSelect from "./TagSelect.vue";
import OnOffSwitch from "./OnOffSwitch.vue";

export default defineComponent({
  components: { TagSelect, OnOffSwitch },
  setup() {
    const store = useStore();

    const settings = computed(() => {
      console.log("Settings computed prop called");
      
      return store.getters.gameSettings
    });

    const handleSettingChange = (settingValue, settingKey) => {
      store.commit({
        type: "changeGameSetting",
        setting: settingKey,
        value: settingValue,
      });
    };

    return {
      settings,
      handleSettingChange,
    };
  },
});
</script>

<style scoped>
.game-settings-form {
  padding-right: 0.2rem;
}
</style>