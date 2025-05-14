import type { Meta, StoryObj } from '@storybook/vue3'
import AModalView from './AModalView.vue'

const meta: Meta<typeof AModalView> = {
  title: 'Pages/AModalView',
  component: AModalView,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AModalView>

export const Default: Story = {
  render: () => ({
    components: { AModalView },
    template: '<AModalView />',
  }),
}
