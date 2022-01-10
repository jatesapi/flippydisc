<template>
  <div class="footer">
    <n-icon v-if="webShareApiSupported" @click="share">
      <share-social />
    </n-icon>
    <a href="https://www.github.com/">
      <n-icon>
        <logo-github />
      </n-icon>
    </a>
  </div>
</template>

<script>
import { ShareSocial, LogoGithub } from "@vicons/ionicons5";
import { defineComponent, computed } from "vue";

export default defineComponent({
  components: {
    ShareSocial,
    LogoGithub,
  },
  setup() {
    const webShareApiSupported = computed(() => navigator.share);
    const share = () => {
      console.log("Share clicked");
      return navigator.share({
        title: "FlippyDisc",
        text: "Classic disc dice game in your device.",
        url: "https://flippydisc.com/",
      })
    };
    return {
      webShareApiSupported,
      share,
    };
  },
});
</script>

<style scoped>
.footer {
  margin-top: 5rem;
}

.footer i + a {
  margin-left: 8px;
}
</style>