<template>
  <n-form-item :label="label" label-style="font-weight: 400">
    <n-switch class="toggle-btn" size="small" v-model:value="toggle"/>
  </n-form-item>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    label: { type: String, default: "" },
    value: { type: Boolean, default: false}
  },
  setup(props) {
    return {
      toggle: ref(props.value)
    }
  }
});
</script>

<style scoped>
.toggle-btn {
  --n-rail-color-active: #FF69B4 !important;
}
</style>