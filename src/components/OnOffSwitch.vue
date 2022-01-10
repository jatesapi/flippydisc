<template>
  <n-form-item :label="label" size="large" label-style="font-weight: 400">
    <n-switch v-model:value="toggle"/>
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