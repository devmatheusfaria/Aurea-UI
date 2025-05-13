import type { Meta, StoryObj } from '@storybook/vue3'
import ARegisterView from './ARegisterView.vue'

const meta: Meta<typeof ARegisterView> = {
  title: 'Pages/ARegisterView',
  component: ARegisterView,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ARegisterView>

export const Default: Story = {
  render: () => ({
    components: { ARegisterView },
    template: '<ARegisterView />',
  }),
}
