import type { Meta, StoryObj } from '@storybook/vue3'
import ACardView from './ACardView.vue'

const meta: Meta<typeof ACardView> = {
  title: 'Pages/ACardView',
  component: ACardView,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ACardView>

export const Default: Story = {
  render: () => ({
    components: { ACardView },
    template: '<ACardView />',
  }),
}
