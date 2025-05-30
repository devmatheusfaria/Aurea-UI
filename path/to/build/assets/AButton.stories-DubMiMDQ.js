import{_ as c}from"./AButton-DK214N5z.js";import"./vue.esm-bundler-EKJPWiZt.js";const p={title:"Components/AButton",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"\n  Botão reutilizável, acessível e personalizável com suporte a:\n  - Variações de tamanho (`sm`, `md`, `lg`)\n  - Ícones à esquerda e/ou à direita via Font Awesome\n  - Controle total de cor de fundo, cor do texto e bordas\n  - Suporte a variantes visuais (`primary`, `success`, `warning`, `danger`)\n  - Estilo consistente com o design system da Aurea UI\n        "}}},argTypes:{label:{control:"text",description:"Texto exibido no botão"},size:{control:"select",options:["sm","md","lg"],description:"Tamanho do botão"},variant:{control:"select",options:["primary","success","warning","danger"],description:"Estilo visual do botão"},icon:{control:"text",description:'Ícone Font Awesome à esquerda (ex: "check")'},iconRight:{control:"text",description:'Ícone Font Awesome à direita (ex: "arrow-right")'},rounded:{control:"text",description:'Valor de border-radius (ex: "8px", "50%")'},backgroundColor:{control:"color",description:"Cor de fundo do botão"},textColor:{control:"color",description:"Cor do texto do botão"}}},o={args:{label:"Clique aqui",size:"md",icon:"check"}},e={args:{label:"Salvar",size:"lg",variant:"primary",icon:"save",iconRight:"arrow-right",rounded:"12px",backgroundColor:"#10b981",textColor:"#ffffff"}};var r,t,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Clique aqui',
    size: 'md',
    // variant: 'primary',
    icon: 'check'
  }
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var n,s,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Salvar',
    size: 'lg',
    variant: 'primary',
    icon: 'save',
    iconRight: 'arrow-right',
    rounded: '12px',
    backgroundColor: '#10b981',
    textColor: '#ffffff'
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const m=["Default","Personalized"];export{o as Default,e as Personalized,m as __namedExportsOrder,p as default};
