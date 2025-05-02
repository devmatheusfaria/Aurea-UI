import type { Meta, StoryObj } from '@storybook/vue3'
import AInputPasswordView from './AInputPasswordView.vue'

const meta: Meta<typeof AInputPasswordView> = {
  title: 'Pages/AInputPasswordView',
  component: AInputPasswordView,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AInputPasswordView>

export const Default: Story = {
  render: () => ({
    components: { AInputPasswordView },
    template: '<AInputPasswordView />',
  }),
}
