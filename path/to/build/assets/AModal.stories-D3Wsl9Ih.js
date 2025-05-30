import{A as c}from"./AModal-wzluoCqf.js";import"./vue.esm-bundler-EKJPWiZt.js";import"./AButton-DK214N5z.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Components/AModal",component:c,tags:["autodocs"],argTypes:{show:{control:"boolean",description:"Exibe ou oculta o modal"},title:{control:"text",description:"Título do modal"},message:{control:"text",description:"Mensagem principal do modal"},size:{control:"select",options:["sm","md","lg"],description:"Define o tamanho do modal (small, medium ou large)"},acceptText:{control:"text",description:"Texto do botão de aceitar"},rejectText:{control:"text",description:"Texto do botão de rejeitar"},acceptBgColor:{control:"color",description:"Cor de fundo do botão de aceitar"},acceptTextColor:{control:"color",description:"Cor do texto do botão de aceitar"},rejectBgColor:{control:"color",description:"Cor de fundo do botão de rejeitar"},rejectTextColor:{control:"color",description:"Cor do texto do botão de rejeitar"}},args:{show:!0,title:"Cookie Policy",message:"Utilizamos cookies para melhorar sua experiência.",size:"md",acceptText:"Aceitar",rejectText:"Rejeitar",acceptBgColor:"#222222",acceptTextColor:"#ffffff",rejectBgColor:"#ececec",rejectTextColor:"#222222"},parameters:{docs:{description:{component:`
  Componente de modal acessível e personalizável com suporte a:
  - Tamanhos variados (\`sm\`, \`md\`, \`lg\`)
  - Título, mensagem e botões de ação personalizáveis
  - Cores configuráveis para fundo e texto dos botões
  - Fechamento pelo botão "X" ou tecla ESC
  - Estilo consistente com o design system da Aurea UI
        `}}}},o={render:a=>({components:{AModal:c},setup(){return{args:a}},template:`
      <AModal
        v-bind="args"
        @accept="console.log('Aceitou')"
        @reject="console.log('Rejeitou')"
        @close="console.log('Fechou')"
      />
    `})};var e,t,r;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AModal
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <AModal
        v-bind="args"
        @accept="console.log('Aceitou')"
        @reject="console.log('Rejeitou')"
        @close="console.log('Fechou')"
      />
    \`
  })
}`,...(r=(t=o.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const p=["Default"];export{o as Default,p as __namedExportsOrder,d as default};
