import type { Preview } from '@storybook/vue3'
import '@fortawesome/fontawesome-free/css/all.css'
import '../src/styles/main.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
