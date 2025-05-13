import AButton from './AButton.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof AButton> = {
  title: 'Components/AButton',
  component: AButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
  Botão reutilizável, acessível e personalizável com suporte a:
  - Variações de tamanho (\`sm\`, \`md\`, \`lg\`)
  - Ícones à esquerda e/ou à direita via Font Awesome
  - Controle total de cor de fundo, cor do texto e bordas
  - Suporte a variantes visuais (\`primary\`, \`success\`, \`warning\`, \`danger\`)
  - Estilo consistente com o design system da Aurea UI
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Texto exibido no botão' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botão',
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger'],
      description: 'Estilo visual do botão',
    },
    icon: {
      control: 'text',
      description: 'Ícone Font Awesome à esquerda (ex: "check")',
    },
    iconRight: {
      control: 'text',
      description: 'Ícone Font Awesome à direita (ex: "arrow-right")',
    },
    rounded: {
      control: 'text',
      description: 'Valor de border-radius (ex: "8px", "50%")',
    },
    backgroundColor: {
      control: 'color',
      description: 'Cor de fundo do botão',
    },
    textColor: {
      control: 'color',
      description: 'Cor do texto do botão',
    },
  },
}

export default meta
type Story = StoryObj<typeof AButton>

export const Default: Story = {
  args: {
    label: 'Clique aqui',
    size: 'md',
    // variant: 'primary',
    icon: 'check',
  },
}

export const Personalized: Story = {
  args: {
    label: 'Salvar',
    size: 'lg',
    variant: 'primary',
    icon: 'save',
    iconRight: 'arrow-right',
    rounded: '12px',
    backgroundColor: '#10b981',
    textColor: '#ffffff',
  },
}
