import type { Meta, StoryObj } from '@storybook/vue3'
import ANavbarView from './ANavbarView.vue'

const meta: Meta<typeof ANavbarView> = {
  title: 'Pages/ANavbarView',
  component: ANavbarView,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ANavbarView>

export const Default: Story = {
  render: () => ({
    components: { ANavbarView },
    template: '<ANavbarView />',
  }),
}
