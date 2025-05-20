import type { Meta, StoryObj } from '@storybook/vue3'
import ALoadingView from './ALoadingView.vue'

const meta: Meta<typeof ALoadingView> = {
  title: 'Pages/ALoadingView',
  component: ALoadingView,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ALoadingView>

export const Default: Story = {
  render: () => ({
    components: { ALoadingView },
    template: '<ALoadingView />',
  }),
}
