import type { Meta, StoryObj } from '@storybook/vue3'
import ANotification from './ANotification.vue'

const meta: Meta<typeof ANotification> = {
  title: 'Components/ANotification',
  component: ANotification,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente de notificação acessível, elegante e reutilizável.

- Três tipos visuais: \`error\`, \`success\` e \`warning\`
- Ícones e estilos personalizados para cada tipo
- Mensagem descritiva com contraste adequado
- Ideal para feedbacks visuais no sistema
        `,
      },
    },
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Texto da notificação exibida ao usuário',
    },
    type: {
      control: 'select',
      options: ['error', 'success', 'warning'],
      description: 'Tipo da notificação que altera o estilo visual',
    },
    onClose: {
      action: 'close',
      description: 'Evento emitido ao fechar a notificação',
    },
  },
  args: {
    message: 'Mensagem da notificação',
    type: 'error',
  },
}

export default meta
type Story = StoryObj<typeof ANotification>

export const Default: Story = {
  render: (args) => ({
    components: { ANotification },
    setup() {
      return { args }
    },
    template: `<ANotification v-bind="args" @close="args.onClose" />`,
  }),
}
