import{A as t}from"./ANotification-DtzX1Rd6.js";import"./vue.esm-bundler-EKJPWiZt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p={title:"Components/ANotification",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
Componente de notificação acessível, elegante e reutilizável.

- Três tipos visuais: \`error\`, \`success\` e \`warning\`
- Ícones e estilos personalizados para cada tipo
- Mensagem descritiva com contraste adequado
- Ideal para feedbacks visuais no sistema
        `}}},argTypes:{message:{control:"text",description:"Texto da notificação exibida ao usuário"},type:{control:"select",options:["error","success","warning"],description:"Tipo da notificação que altera o estilo visual"},onClose:{action:"close",description:"Evento emitido ao fechar a notificação"}},args:{message:"Mensagem da notificação",type:"error"}},e={render:n=>({components:{ANotification:t},setup(){return{args:n}},template:'<ANotification v-bind="args" @close="args.onClose" />'})};var o,a,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ANotification
    },
    setup() {
      return {
        args
      };
    },
    template: \`<ANotification v-bind="args" @close="args.onClose" />\`
  })
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,p as default};
