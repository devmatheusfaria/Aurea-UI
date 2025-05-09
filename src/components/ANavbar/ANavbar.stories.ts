import type { Meta, StoryObj } from '@storybook/vue3'
import ANavbar from './ANavbar.vue'

const meta: Meta<typeof ANavbar> = {
  title: 'Components/ANavbar',
  component: ANavbar,
  tags: ['autodocs'],
  argTypes: {
    logo: { control: 'text', description: 'Texto da logo' },
    logoImage: { control: 'text', description: 'URL da imagem da logo' },
    logoAlt: { control: 'text', description: 'Texto alternativo da logo' },
    items: { control: 'object', description: 'Itens de navegação' },
    isAuthenticated: { control: 'boolean', description: 'Usuário autenticado?' },
    loginText: { control: 'text', description: 'Texto do botão de login' },
    logoutText: { control: 'text', description: 'Texto do botão de logout' },
    linkColor: { control: 'color', description: 'Cor dos links' },
    linkHoverColor: { control: 'color', description: 'Cor no hover dos links' },
  },
  args: {
    logo: 'AureaUI',
    items: [
      { label: 'Home', href: '#' },
      { label: 'Sobre', href: '#' },
      { label: 'Contato', href: '#' },
    ],
    isAuthenticated: false,
    loginText: 'Entrar',
    logoutText: 'Sair',
    linkColor: '#1c1c1e',
    linkHoverColor: '#0a84ff',
  },
  parameters: {
    docs: {
      description: {
        component:
          'ANavbar é um componente de navegação minimalista e acessível. Ele exibe uma logo (imagem ou texto), uma lista de links de navegação e um botão de autenticação (Login ou Logout), com suporte a menu responsivo. Totalmente personalizável por props e acessível via leitores de tela, atendendo ao nível AA das diretrizes WCAG.',
      },
    },
  },
}

export default meta
export const Default: StoryObj<typeof ANavbar> = {}
