import type { Meta, StoryObj } from '@storybook/vue3'
import AButtonView from './AButtonView.vue'

const meta: Meta<typeof AButtonView> = {
  title: 'Pages/AButtonView',
  component: AButtonView,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AButtonView>

export const Default: Story = {
  render: () => ({
    components: { AButtonView },
    template: '<AButtonView />',
  }),
}
