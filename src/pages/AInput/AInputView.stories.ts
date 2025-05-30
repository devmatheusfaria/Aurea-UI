import type { Meta, StoryObj } from '@storybook/vue3'
import AInputView from './AInputView.vue'

const meta: Meta<typeof AInputView> = {
  title: 'Pages/AInputView',
  component: AInputView,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AInputView>

export const Default: Story = {
  render: () => ({
    components: { AInputView },
    template: '<AInputView />',
  }),
}
