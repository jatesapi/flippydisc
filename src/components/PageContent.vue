<template>
  <transition name="slide-fade">
    <div v-if="showMenu">
      <h3 class="section-title">Disc dice game as an app</h3>
      <p class="section-content">
        Spice up your round of disc golf with the classic disc dice game. Play the game for free from your phone, even when
        offline.
      </p>
      <n-button class="section-divider" type="primary" size="large" :strong="true" @click="play"
        >Play now</n-button
      >
      <h3 class="section-title">Highly customizable settings</h3>
      <p class="section-content" style="margin-bottom: 0.55rem">
        The disc dice game has evolved a lot from the early days. We wanted to
        create an app that allows players to be creative with their shots, discs
        and other game rules.
      </p>
            <div class="dice-icon">
        <n-icon>
          <dice />
        </n-icon>
      </div>
       <p>
        Make sure to also check out the original disc dices from
        <a href="https://www.discdice.us/">DiscDice</a>
      </p>
    </div>
  </transition>
  <transition name="slide-fade">
    <div v-if="!showMenu">
      <game-view />
      <div class="footer">
        <n-button text type="primary" size="large" @click="returnHome">
          <template #icon>
            <n-icon>
              <arrow-back-sharp />
            </n-icon>
          </template>
          Return to front page
        </n-button>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, ref } from "vue";
import { ArrowBackSharp, Dice } from "@vicons/ionicons5";
import GameView from "./GameView.vue";

export default defineComponent({
  components: {
    ArrowBackSharp,
    Dice,
    GameView,
  },
  setup(props, context) {
    const showMenu = ref(true);
    const play = () => {
      showMenu.value = false;
      context.emit("contentChanged");
    };
    const returnHome = () => {
      showMenu.value = true;
      context.emit("contentChanged");
    };
    return {
      showMenu,
      play,
      returnHome,
    };
  },
});
</script>

<style scoped>
.section-title {
  color: white;
  font-weight: 500;
  margin-bottom: 0.7rem;
}

.section-content {
  margin-top: 0;
  margin-bottom: 1rem;
}

.footer {
  margin-top: 2rem;
}

.n-button {
  --n-font-size: 20px;
}

.section-divider {
  margin-bottom: 2rem;
}

.dice-icon {
  color: #80e7c4;
  font-size: 40px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
