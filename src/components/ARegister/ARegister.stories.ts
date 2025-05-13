import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import ARegister from './ARegister.vue'

const meta: Meta<typeof ARegister> = {
  title: 'Components/ARegister',
  component: ARegister,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['register', 'back'],
    },
    docs: {
      description: {
        component: `
Formulário de cadastro moderno e acessível com:
- Confirmação de senha integrada
- Validação de força de senha
- Componentes reutilizáveis como \`AInput\`, \`AInputPassword\` e \`AButton\`
- Estilo consistente com o Aurea UI
        `,
      },
    },
  },
  argTypes: {
    modelValue: {
      control: 'object',
      description: 'Objeto com os campos name, email e password',
    },
    title: { control: 'text' },
    nameLabel: { control: 'text' },
    emailLabel: { control: 'text' },
    passwordLabel: { control: 'text' },
    confirmPasswordLabel: { control: 'text' },
    namePlaceholder: { control: 'text' },
    emailPlaceholder: { control: 'text' },
    passwordPlaceholder: { control: 'text' },
    confirmPasswordPlaceholder: { control: 'text' },
    registerText: { control: 'text' },
    backToLoginText: { control: 'text' },
    showConfirmPassword: { control: 'boolean' },
  },
  args: {
    modelValue: {
      name: '',
      email: '',
      password: '',
    },
    title: 'Criar conta',
    nameLabel: 'Nome completo',
    emailLabel: 'E-mail',
    passwordLabel: 'Senha',
    confirmPasswordLabel: 'Confirmar senha',
    namePlaceholder: 'Digite seu nome completo',
    emailPlaceholder: 'Digite seu e-mail',
    passwordPlaceholder: 'Crie uma senha segura',
    confirmPasswordPlaceholder: 'Repita sua senha',
    registerText: 'Cadastrar',
    backToLoginText: 'Já tenho conta',
    showConfirmPassword: true,
  },
  render: (args) => ({
    components: { ARegister },
    setup() {
      const form = ref({ ...args.modelValue })
      return { args, form }
    },
    template: `
      <ARegister
        v-model="form"
        v-bind="args"
        @register="(data) => console.log('Register:', data)"
        @back="() => console.log('Back to login')"
      />
    `,
  }),
}

export default meta
export const Default: StoryObj<typeof ARegister> = {}
