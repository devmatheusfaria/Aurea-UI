import type { Meta, StoryObj } from '@storybook/vue3'
import ALoginView from './ALoginView.vue'

const meta: Meta<typeof ALoginView> = {
  title: 'Pages/ALoginView',
  component: ALoginView,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ALoginView>

export const Default: Story = {
  render: () => ({
    components: { ALoginView },
    template: '<ALoginView />',
  }),
}
