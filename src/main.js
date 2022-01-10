import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { store } from './store/store'

// Import components
import {
  create,
  NConfigProvider,
  NButton,
  NRadioButton,
  NRadioGroup,
  NCard,
  NForm,
  NFormItem,
  NDynamicTags,
  NSwitch,
  NSlider,
  NTooltip,
  NIcon,
  NGradientText,
  NDrawer,
  NDrawerContent,
} from 'naive-ui'

// Import fonts
import 'vfonts/Inter.css'

const naive = create({
  components: [
    NConfigProvider, 
    NButton, 
    NRadioButton, 
    NRadioGroup, 
    NCard, 
    NForm, 
    NFormItem, 
    NDynamicTags, 
    NSwitch, 
    NSlider,
    NTooltip,
    NIcon,
    NGradientText,
    NDrawer,
    NDrawerContent,
  ]
})

const app = createApp(App)

app.use(naive).use(store)
app.mount('#app')
