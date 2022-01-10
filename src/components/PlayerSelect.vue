<template>
  <n-form-item :label="label + ': ' +value" size="large" label-style="font-weight: 400">
    <n-slider v-model:value="value" :step="1" :min="1" :max="5" size="large" />
    <span>{{  }}</span>
    <n-tooltip placement="top" trigger="hover">
      <template #trigger>
        <n-button quaternary circle size="tiny">
          <template #icon>
            <n-icon><information-sharp /></n-icon>
          </template>
        </n-button>
      </template>
      <span> I wish they all could be California girls </span>
    </n-tooltip>
  </n-form-item>
</template>

<script>
import { InformationSharp } from "@vicons/ionicons5";
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    label: { default: "" },
  },
  components: {
    InformationSharp,
  },
  setup() {
    return {
      value: ref(1),
    };
  },
});
</script>