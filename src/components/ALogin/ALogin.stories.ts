import type { Meta, StoryObj } from '@storybook/vue3'
import ALogin from './ALogin.vue'

const meta: Meta<typeof ALogin> = {
  title: 'Components/ALogin',
  component: ALogin,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['login', 'signup', 'forgot'],
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#171717' },
      ],
    },
    docs: {
      description: {
        component: `
  Formulário de login moderno, minimalista e acessível com:
  - Campos personalizados de usuário e senha
  - Suporte a ações como login, criação de conta e recuperação de senha
  - Uso dos componentes \`AInput\`, \`AInputPassword\` e \`AButton\`
  - Interface responsiva com foco em usabilidade
  - Estilo consistente com o Aurea UI
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Título do formulário de login' },
    username: { control: 'text', description: 'Valor do campo de nome de usuário (v-model)' },
    password: { control: 'text', description: 'Valor do campo de senha (v-model)' },
    usernameLabel: { control: 'text', description: 'Rótulo do campo de usuário' },
    passwordLabel: { control: 'text', description: 'Rótulo do campo de senha' },
    usernamePlaceholder: {
      control: 'text',
      description: 'Placeholder do campo de usuário',
    },
    passwordPlaceholder: {
      control: 'text',
      description: 'Placeholder do campo de senha',
    },
    loginText: { control: 'text', description: 'Texto do botão de login' },
    signupText: { control: 'text', description: 'Texto do botão de cadastro' },
    forgotText: { control: 'text', description: 'Texto do botão de "esqueci a senha"' },
  },
  args: {
    title: 'Login',
    username: '',
    password: '',
    usernameLabel: 'Usuário',
    passwordLabel: 'Senha',
    usernamePlaceholder: 'Digite seu usuário',
    passwordPlaceholder: 'Digite sua senha',
    loginText: 'Entrar',
    signupText: 'Criar conta',
    forgotText: 'Esqueci a senha',
  },
}

export default meta

export const Default: StoryObj<typeof ALogin> = {}
