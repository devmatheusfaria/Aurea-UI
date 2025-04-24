import type { StorybookConfig } from '@storybook/vue3-vite'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

const config: StorybookConfig = {
  stories: [
    '../src/components/**/*.stories.@(ts|js|vue|jsx|tsx)',
    '../src/**/*.mdx'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  viteFinal(config) {
    config.plugins = config.plugins || []
    config.plugins.push(
      Components({
        resolvers: [PrimeVueResolver()]
      })
    )
    return config
  }
}

export default config