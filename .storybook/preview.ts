import type { Preview } from '@storybook/vue3'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import '@fortawesome/fontawesome-free/css/all.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story, context) => {
      // Protege contra undefined
      const app = context.app
      if (app && app.use) {
        app.use(PrimeVue, {
          theme: {
            preset: Aura
          }
        })
      }
      return story()
    }
  ]
}

export default preview