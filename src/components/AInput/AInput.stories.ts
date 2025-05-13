import type { Meta, StoryObj } from '@storybook/vue3'
import AInput from './AInput.vue'

const meta: Meta<typeof AInput> = {
  title: 'Components/AInput',
  component: AInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
  Campo de entrada (input) flexível, acessível e personalizável com:
  - Suporte a ícones à esquerda e à direita
  - Rótulo, placeholder, mensagens de erro e texto de ajuda
  - Controle de tamanho, cor do foco, leitura e desabilitação
  - Estilo consistente com o design da biblioteca Aurea UI
        `,
      },
    },
  },
  argTypes: {
    modelValue: { control: 'text', description: 'Valor do input (v-model)' },
    label: { control: 'text', description: 'Texto do rótulo (label)' },
    labelColor: { control: 'color', description: 'Cor do texto da label' },
    placeholder: { control: 'text', description: 'Placeholder do input' },
    helperText: { control: 'text', description: 'Texto de ajuda exibido abaixo' },
    error: { control: 'text', description: 'Mensagem de erro exibida abaixo' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do campo de input',
    },
    iconLeft: { control: 'text', description: 'Ícone FontAwesome à esquerda (ex: "fa-user")' },
    iconRight: { control: 'text', description: 'Ícone FontAwesome à direita (ex: "fa-eye")' },
    disabled: { control: 'boolean', description: 'Desabilita o input' },
    readonly: { control: 'boolean', description: 'Deixa o input apenas leitura' },
    rounded: { control: 'text', description: 'Valor de border-radius (ex: "8px", "50%")' },
    focusColor: { control: 'color', description: 'Cor do contorno ao focar no input' },
  },
}

export default meta
type Story = StoryObj<typeof AInput>

export const Default: Story = {
  args: {
    modelValue: '',
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
    size: 'md',
  },
}

export const WithIcons: Story = {
  args: {
    modelValue: '',
    label: 'Usuário',
    placeholder: 'Digite seu usuário',
    iconLeft: 'fa fa-user',
    iconRight: 'fa fa-check',
    size: 'md',
  },
}

export const ErrorState: Story = {
  args: {
    modelValue: '',
    label: 'Email',
    placeholder: 'Digite seu email',
    error: 'Email inválido',
    size: 'md',
  },
}

export const Disabled: Story = {
  args: {
    modelValue: '',
    label: 'Telefone',
    placeholder: 'Campo desabilitado',
    disabled: true,
    size: 'md',
  },
}

export const Rounded: Story = {
  args: {
    modelValue: '',
    label: 'Buscar',
    placeholder: 'O que você procura?',
    iconLeft: 'fa fa-search',
    rounded: '999px',
    size: 'lg',
  },
}

export const CustomFocusColor: Story = {
  args: {
    modelValue: '',
    label: 'Cor de foco personalizada',
    placeholder: 'Digite algo...',
    focusColor: '#ff9500',
    size: 'md',
  },
}

export const CustomLabelColor: Story = {
  args: {
    modelValue: '',
    label: 'Personalizado',
    placeholder: 'Digite aqui',
    labelColor: '#ff9500',
    focusColor: '#0a84ff',
    size: 'md',
  },
}
