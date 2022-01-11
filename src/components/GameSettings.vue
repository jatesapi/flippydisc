<template>
  <n-form class="game-settings-form">
    <on-off-switch
      label="Different shot type on every roll"
      mapped-setting="shots"
      :value="settings.differentConsecutiveShots"
      @update:value="handleSettingChange('differentConsecutiveShots', $event)"
    />
    <on-off-switch
      label="Different disc type on every roll"
      mapped-setting="discs"
      :value="settings.differentConsecutiveDiscs"
      @update:value="handleSettingChange('differentConsecutiveDiscs', $event)"
    />
    <tag-select
      label="Shots"
      :items="settings.shots"
      @update:value="handleSettingChange('shots', $event)"
    />
    <tag-select
      label="Discs"
      :items="settings.discs"
      @update:value="handleSettingChange('discs', $event)"
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

    const settings = computed(() => store.state.gameSettings);

    const handleSettingChange = (settingKey, settingValue) => {
      store.commit({
        type: "changeGameSetting",
        key: settingKey,
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