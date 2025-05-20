import type { Meta, StoryObj } from '@storybook/vue3'
import ALoading from './ALoading.vue'

const meta: Meta<typeof ALoading> = {
  title: 'Components/ALoading',
  component: ALoading,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 8, max: 200, step: 1 },
      description: 'Tamanho total do spinner (largura/altura em pixels)',
    },
    color: {
      control: 'color',
      description: 'Cor da borda superior do spinner',
    },
    thickness: {
      control: { type: 'number', min: 1, max: 20, step: 1 },
      description: 'Espessura da borda (em pixels)',
    },
    blurBackground: {
      control: 'boolean',
      description: 'Ativa um overlay em tela cheia com desfoque de fundo e centraliza o spinner',
    },
  },
  args: {
    size: 36,
    color: '#1c1c1e',
    thickness: 4,
    blurBackground: false,
  },
  parameters: {
    docs: {
      description: {
        component: `
O \`ALoading\` é um componente de carregamento acessível e personalizável da Aurea UI.

**Principais funcionalidades:**

- Tamanho configurável por \`size\` (pixels)
- Espessura da borda por \`thickness\`
- Cor da borda superior por \`color\`
- Overlay com desfoque de fundo ativado por \`blurBackground: true\`
        `,
      },
    },
  },
}

export default meta

export const Default: StoryObj<typeof ALoading> = {}
