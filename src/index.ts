import type { App } from 'vue'
import './styles/index.scss'

import AButton from './components/AButton/AButton.vue'
import ACard from './components/ACard/ACard.vue'
import AInput from './components/AInput/AInput.vue'
import AInputPassword from './components/AInputPassword/AInputPassword.vue'
import ALoading from './components/ALoading/ALoading.vue'
import ALogin from './components/ALogin/ALogin.vue'
import AModal from './components/AModal/AModal.vue'
import ANavbar from './components/ANavbar/ANavbar.vue'
import ANotification from './components/ANotification/ANotification.vue'
import ARegister from './components/ARegister/ARegister.vue'

const AureaUI = {
  install(app: App) {
    app.component('AButton', AButton)
    app.component('ACard', ACard)
    app.component('AInput', AInput)
    app.component('AInputPassword', AInputPassword)
    app.component('ALoading', ALoading)
    app.component('ALogin', ALogin)
    app.component('AModal', AModal)
    app.component('ANavbar', ANavbar)
    app.component('ANotification', ANotification)
    app.component('ARegister', ARegister)
  },
}

export default AureaUI

export {
  AButton,
  ACard,
  AInput,
  AInputPassword,
  ALoading,
  ALogin,
  AModal,
  ANavbar,
  ANotification,
  ARegister,
}
