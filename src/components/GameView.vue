<template>
  <div>
  <div class="shot row">
    <span class="column label">shot</span>
    <span class="column white-text">{{ shot }}</span>
  </div>
  <div class="disc row">
    <span class="column label">disc</span>
    <span class="column white-text">{{ disc }}</span>
  </div>
  </div>
  <n-button type="primary" size="large" :strong="true" @click="roll">
    <template #icon>
      <n-icon>
        <dice />
      </n-icon>
    </template>
    Roll
  </n-button>
  <n-button type="secondary" size="large" @click="showDrawer = true">
    <template #icon>
      <n-icon>
        <settings-sharp />
      </n-icon>
    </template>
  </n-button>
  <n-drawer v-model:show="showDrawer" :width="drawerWidth">
    <n-drawer-content closable>
      <template #header>Settings</template>
      <game-settings />
      <template #footer>
        <n-button @click="showDrawer = false">Close</n-button>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<script>
import { Dice, SettingsSharp } from "@vicons/ionicons5";
import { computed, defineComponent, ref } from "vue";
import GameSettings from './GameSettings.vue'
import settings from "../game-settings.json";

export default defineComponent({
  components: {
    Dice,
    SettingsSharp,
    GameSettings,
  },
  setup() {
    const randomItem = (array) =>
      array[Math.floor(Math.random() * array.length)];
    const shot = ref(randomItem(settings.default.shots));
    const disc = ref(randomItem(settings.default.discs));
    const roll = () => {
      shot.value = randomItem(settings.default.shots);
      disc.value = randomItem(settings.default.discs);
    };
    const drawerWidth = computed(() => window.innerWidth < 402 ? window.innerWidth : 402)
    return {
      shot,
      disc,
      roll,
      showDrawer: ref(false),
      drawerWidth
    };
  },
});
</script>

<style scoped>
.row {
  display: flex;
}
.column {
  padding: 0 4px;
  flex: 50%;
}
.shot {
  margin-top: 0.5rem;
}
.disc {
  margin-bottom: 2rem;
}
.label {
  text-align: right;
}
.white-text {
  color: white;
  text-align: left;
}
button + button {
  margin-left: 1rem;
}
</style>
