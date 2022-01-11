<template>
  <n-form-item :label="tagsLabel" size="large" label-style="font-weight: 400">
    <n-dynamic-tags v-model:value="tags" @update:value="handleChange" />
  </n-form-item>
</template>

<script>
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    label: { type: String, default: "" },
    items: { type: Array, default: () => [] },
  },
  setup(props, context) {
    const tags = ref(props.items);
    const tagsLabel = computed(() => props.label + ": " + tags.value.length);
    const handleChange = (value) => context.emit("update:value", value);

    return {
      tagsLabel,
      tags,
      handleChange,
    };
  },
});
</script>