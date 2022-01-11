<template>
  <n-form-item :label="label" label-style="font-weight: 400">
    <n-switch
      class="toggle-btn"
      size="small"
      :disabled="disabled"
      v-model:value="active"
      @update:value="handleChange"
    />
  </n-form-item>
</template>

<script>
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    label: { type: String, default: "" },
    mappedSetting: { type: String, default: undefined },
    value: {type: Boolean, default: true}
  },
  setup(props, context) {
    const store = useStore();
    const settings = computed(() => store.state.gameSettings);

    const active =  ref(props.value)

    // Disable switch something
    const disabled = computed(() => {
      if (!store.getters.hasEnoughOptions(props.mappedSetting)) {
        return true;
      }
      return undefined;
    });

    // Inactivate the switch when disa
    watch(disabled, (isDisabled) => {
      if (isDisabled) {
        active.value = false
        context.emit("update:value", false)
      }
    });

    const handleChange = (value) => context.emit("update:value", value);

    return {
      settings,
      active,
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