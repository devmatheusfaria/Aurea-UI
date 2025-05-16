import type { Meta, StoryObj } from '@storybook/vue3'
import ANotificationView from './ANotificationView.vue'

const meta: Meta<typeof ANotificationView> = {
  title: 'Pages/ANotificationView',
  component: ANotificationView,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ANotificationView>

export const Default: Story = {
  render: () => ({
    components: { ANotificationView },
    template: '<ANotificationView />',
  }),
}
