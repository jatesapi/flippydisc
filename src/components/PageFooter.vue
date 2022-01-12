<template>
  <div class="footer">
    <n-icon v-if="webShareApiSupported" @click="share">
      <share-social />
    </n-icon>
    <a href="https://github.com/jatesapi/flippydisc/">
      <n-icon>
        <logo-github />
      </n-icon>
    </a>
    <div class="version">v0.1.0 alpha</div>
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
      return navigator.share({
        title: "FlippyDisc",
        text: "Classic disc dice game in your device.",
        url: "https://flippydisc.com/",
      });
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

.footer i {
  color: #ff69b4;
}

.footer i:hover {
  color: #80e7c4;
  cursor: pointer;
}

.footer i + a,
.footer a + span {
  margin-left: 8px;
}

.version {
  font-size: 14px;
}
</style>