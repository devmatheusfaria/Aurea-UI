import{_ as q}from"./AInput-BBwF6aFH.js";import"./vue.esm-bundler-EKJPWiZt.js";const A={title:"Components/AInput",component:q,tags:["autodocs"],parameters:{docs:{description:{component:`
  Campo de entrada (input) flexível, acessível e personalizável com:
  - Suporte a ícones à esquerda e à direita
  - Rótulo, placeholder, mensagens de erro e texto de ajuda
  - Controle de tamanho, cor do foco, leitura e desabilitação
  - Estilo consistente com o design da biblioteca Aurea UI
        `}}},argTypes:{modelValue:{control:"text",description:"Valor do input (v-model)"},label:{control:"text",description:"Texto do rótulo (label)"},labelColor:{control:"color",description:"Cor do texto da label"},placeholder:{control:"text",description:"Placeholder do input"},helperText:{control:"text",description:"Texto de ajuda exibido abaixo"},error:{control:"text",description:"Mensagem de erro exibida abaixo"},size:{control:"select",options:["sm","md","lg"],description:"Tamanho do campo de input"},iconLeft:{control:"text",description:'Ícone FontAwesome à esquerda (ex: "fa-user")'},iconRight:{control:"text",description:'Ícone FontAwesome à direita (ex: "fa-eye")'},disabled:{control:"boolean",description:"Desabilita o input"},readonly:{control:"boolean",description:"Deixa o input apenas leitura"},rounded:{control:"text",description:'Valor de border-radius (ex: "8px", "50%")'},focusColor:{control:"color",description:"Cor do contorno ao focar no input"}}},e={args:{modelValue:"",label:"Nome completo",placeholder:"Digite seu nome",size:"md"}},o={args:{modelValue:"",label:"Usuário",placeholder:"Digite seu usuário",iconLeft:"fa fa-user",iconRight:"fa fa-check",size:"md"}},a={args:{modelValue:"",label:"Email",placeholder:"Digite seu email",error:"Email inválido",size:"md"}},r={args:{modelValue:"",label:"Telefone",placeholder:"Campo desabilitado",disabled:!0,size:"md"}},l={args:{modelValue:"",label:"Buscar",placeholder:"O que você procura?",iconLeft:"fa fa-search",rounded:"999px",size:"lg"}},s={args:{modelValue:"",label:"Cor de foco personalizada",placeholder:"Digite algo...",focusColor:"#ff9500",size:"md"}},n={args:{modelValue:"",label:"Personalizado",placeholder:"Digite aqui",labelColor:"#ff9500",focusColor:"#0a84ff",size:"md"}};var t,i,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
    size: 'md'
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,u,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    label: 'Usuário',
    placeholder: 'Digite seu usuário',
    iconLeft: 'fa fa-user',
    iconRight: 'fa fa-check',
    size: 'md'
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,f,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    label: 'Email',
    placeholder: 'Digite seu email',
    error: 'Email inválido',
    size: 'md'
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,h,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    label: 'Telefone',
    placeholder: 'Campo desabilitado',
    disabled: true,
    size: 'md'
  }
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var C,z,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    label: 'Buscar',
    placeholder: 'O que você procura?',
    iconLeft: 'fa fa-search',
    rounded: '999px',
    size: 'lg'
  }
}`,...(V=(z=l.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var D,S,v;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    label: 'Cor de foco personalizada',
    placeholder: 'Digite algo...',
    focusColor: '#ff9500',
    size: 'md'
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var E,L,T;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    label: 'Personalizado',
    placeholder: 'Digite aqui',
    labelColor: '#ff9500',
    focusColor: '#0a84ff',
    size: 'md'
  }
}`,...(T=(L=n.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const F=["Default","WithIcons","ErrorState","Disabled","Rounded","CustomFocusColor","CustomLabelColor"];export{s as CustomFocusColor,n as CustomLabelColor,e as Default,r as Disabled,a as ErrorState,l as Rounded,o as WithIcons,F as __namedExportsOrder,A as default};
