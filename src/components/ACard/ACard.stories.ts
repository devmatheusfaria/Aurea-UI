import type { Meta, StoryObj } from '@storybook/vue3'
import ACard from './ACard.vue'

const meta: Meta<typeof ACard> = {
  title: 'Components/ACard',
  component: ACard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Cartão visual reutilizável, acessível e elegante com suporte a:
- Imagem de capa dinâmica com \`alt\` acessível
- Título, subtítulo e descrição descritiva
- Botão de ação integrado via \`AButton\`
- Controle total sobre cores do botão
- Estilo consistente com o design system da Aurea UI

⚠️ **Atenção:** a imagem deve ser passada com o caminho relativo a partir da pasta \`assets/\`.  
Exemplo: \`image: 'logo.svg'\` ou \`image: 'imagens/banner.jpg'\`
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Título do cartão' },
    subtitle: { control: 'text', description: 'Subtítulo do cartão' },
    description: { control: 'text', description: 'Texto descritivo do conteúdo' },
    image: {
      control: 'text',
      description: 'Caminho da imagem (ex: assets/logo.svg)',
    },
    imageAlt: {
      control: 'text',
      description: 'Texto alternativo da imagem para leitores de tela',
    },
    buttonText: {
      control: 'text',
      description: 'Texto exibido no botão',
    },
    buttonBgColor: {
      control: 'color',
      description: 'Cor de fundo do botão',
    },
    buttonTextColor: {
      control: 'color',
      description: 'Cor do texto do botão',
    },
  },
  args: {
    title: 'Título do Card',
    subtitle: 'Subtítulo opcional',
    description: 'Descrição demonstrativa do conteúdo do card.',
    image: 'logo.svg',
    imageAlt: 'Texto para descrição da imagem',
    buttonText: 'Saiba mais',
    buttonBgColor: '#0a0a0a',
    buttonTextColor: '#ffffff',
  },
}

export default meta
type Story = StoryObj<typeof ACard>

export const Default: Story = {
  render: (args) => ({
    components: { ACard },
    setup() {
      return { args }
    },
    template: `<ACard v-bind="args" @click:action="console.log('Botão clicado')" />`,
  }),
}
