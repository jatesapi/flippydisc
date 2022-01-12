<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
    <page-header />
    <page-content />
    <page-footer />
  </n-config-provider>
</template>

<script>
import { defineComponent } from "vue";
import { darkTheme } from "naive-ui";
import PageHeader from "./components/PageHeader.vue";
import PageContent from "./components/PageContent.vue";
import PageFooter from "./components/PageFooter.vue";

/**
 * Use this for type hints under js file
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  common: {
    primaryColor: "#FF69B4",
  },
};

export default defineComponent({
  components: { PageHeader, PageContent, PageFooter },
  name: "App",
  setup() {
    return {
      darkTheme,
      themeOverrides,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: v-sans, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 1.5rem;
}

@media only screen and (max-width: 600px) {
  #app {
    margin-top: 0;
  }
}

html {
  background: #161c21;
}

body {
  max-width: 800px;
  margin: 0 auto;
  padding: 1.2rem;
  font-size: 18px;
  color: #3f505c;
}

a,
a:visited {
  color: #ff69b4;
  text-decoration: none;
}

a:hover,
a:visited:hover {
  color: #80e7c4;
}
</style>
