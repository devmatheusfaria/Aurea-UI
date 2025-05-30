import{A as r}from"./ACard-BXNwNFEL.js";import"./vue.esm-bundler-EKJPWiZt.js";import"./AButton-DK214N5z.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"Components/ACard",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"\nCartão visual reutilizável, acessível e elegante com suporte a:\n- Imagem de capa dinâmica com `alt` acessível\n- Título, subtítulo e descrição descritiva\n- Botão de ação integrado via `AButton`\n- Controle total sobre cores do botão\n- Estilo consistente com o design system da Aurea UI\n\n⚠️ **Atenção:** a imagem deve ser passada com o caminho relativo a partir da pasta `assets/`.  \nExemplo: `image: 'logo.svg'` ou `image: 'imagens/banner.jpg'`\n        "}}},argTypes:{title:{control:"text",description:"Título do cartão"},subtitle:{control:"text",description:"Subtítulo do cartão"},description:{control:"text",description:"Texto descritivo do conteúdo"},image:{control:"text",description:"Caminho da imagem (ex: assets/logo.svg)"},imageAlt:{control:"text",description:"Texto alternativo da imagem para leitores de tela"},buttonText:{control:"text",description:"Texto exibido no botão"},buttonBgColor:{control:"color",description:"Cor de fundo do botão"},buttonTextColor:{control:"color",description:"Cor do texto do botão"}},args:{title:"Título do Card",subtitle:"Subtítulo opcional",description:"Descrição demonstrativa do conteúdo do card.",image:"logo.svg",imageAlt:"Texto para descrição da imagem",buttonText:"Saiba mais",buttonBgColor:"#0a0a0a",buttonTextColor:"#ffffff"}},o={render:n=>({components:{ACard:r},setup(){return{args:n}},template:`<ACard v-bind="args" @click:action="console.log('Botão clicado')" />`})};var t,e,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ACard
    },
    setup() {
      return {
        args
      };
    },
    template: \`<ACard v-bind="args" @click:action="console.log('Botão clicado')" />\`
  })
}`,...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const m=["Default"];export{o as Default,m as __namedExportsOrder,l as default};
