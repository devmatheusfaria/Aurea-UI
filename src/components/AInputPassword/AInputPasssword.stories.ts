// src/components/AInputPassword/AInputPassword.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import AInputPassword from './AInputPassword.vue'

const meta: Meta<typeof AInputPassword> = {
  title: 'Components/AInputPassword',
  component: AInputPassword,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Valor do campo de senha (v-model)',
    },
    validatePassword: {
      control: 'boolean',
      description: 'Ativa validações dinâmicas com regras de senha (AInstructPassword)',
    },
    confirmPassword: {
      control: 'boolean',
      description: 'Exibe campo de confirmação de senha',
    },
    label: {
      control: 'text',
      description: 'Texto do rótulo principal',
    },
    confirmLabel: {
      control: 'text',
      description: 'Texto do rótulo do campo de confirmação',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder do campo principal de senha',
    },
    confirmPlaceholder: {
      control: 'text',
      description: 'Placeholder do campo de confirmação de senha',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientação da exibição das regras de senha',
    },
    focusColor: {
      control: 'color',
      description: 'Cor do contorno ao focar no input',
    },
    labelColor: {
      control: 'color',
      description: 'Cor do texto da label',
    },
  },
  args: {
    modelValue: '',
    validatePassword: true,
    confirmPassword: false,
    label: 'Senha',
    confirmLabel: 'Confirmar senha',
    placeholder: 'Digite sua senha segura',
    confirmPlaceholder: 'Repita sua senha',
    orientation: 'horizontal',
    focusColor: '#0a84ff',
    labelColor: '#000000',
  },
  parameters: {
    docs: {
      description: {
        component: `
  Campo de senha moderno e acessível com:
  - Validação de força de senha com feedback visual (AInstructPassword)
  - Campo de confirmação de senha opcional
  - Totalmente personalizável por props como rótulos, placeholders, cores e orientação
  - Componente reutilizável, integrado à identidade visual do Aurea UI
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AInputPassword>

export const Default: Story = {}
