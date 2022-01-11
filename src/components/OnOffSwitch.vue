<template>
  <n-form-item :label="label" label-style="font-weight: 400">
    <n-switch
      class="toggle-btn"
      size="small"
      :disabled="disabled"
      v-model:value="settings[path()]"
      @update:value="handleChange"
    />
  </n-form-item>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    label: { type: String, default: "" },
    settingKey: { type: String, default: undefined },
  },
  setup(props, context) {
    const store = useStore();
    const settings = computed(() => store.state.gameSettings);
    
    const path = () => "differentConsecutive" + props.settingKey.charAt(0).toUpperCase() + props.settingKey.slice(1)

    const disabled = computed(() => {
      if (!store.getters.hasEnoughOptions(props.settingKey)) {
        store.commit({
          type: "changeGameSetting",
          setting: path(),
          value: false,
        });
        return true;
      }
      return undefined;
    });

    const handleChange = (value) => context.emit("update:value", value);
    return {
      settings,
      path,
      disabled,
      handleChange,
    };
  },
});
</script>

<style scoped>
.toggle-btn {
  --n-rail-color-active: #ff69b4 !important;
}
</style>