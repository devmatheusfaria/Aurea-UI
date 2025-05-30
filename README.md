# 🌟 Bem-vindo ao Aurea UI

**Aurea UI** é uma biblioteca de componentes moderna, acessível e responsiva desenvolvida com **Vue 3**, **TypeScript** e **SCSS**. Criada para entregar interfaces elegantes com foco em **usabilidade**, **acessibilidade** e **personalização**, a Aurea UI é ideal para equipes que desejam escalar produtos digitais com consistência visual e excelente experiência do usuário.

---

## ✨ Recursos principais

- ✏️ Design elegante, minimalista e responsivo
- 🌍 Acessibilidade AA (WCAG) incorporada por padrão
- 🪤 Componentes escritos com Composition API e tipagem forte
- 🌎 Estilo com SCSS e suporte total à customização via variáveis
- ✨ Integração com Figma e tokens visuais compatíveis
- ⚙️ Documentação interativa via Storybook

---

## 🚀 Instalação

### 1. Requisitos

- Node.js 18+
- Vue 3
- Vite (recomendado)
- Pinia (recomendado)
- Font Awesome (para ícones)

### 2. Instalando a Aurea UI

```bash
npm install aurea-ui
```

ou

```bash
yarn add aurea-ui
```

### 3. Registrando os componentes globalmente

```ts
// main.js
import { createApp } from 'vue'
import App from './App.vue'

import AureaUI from 'aurea-ui'
import 'aurea-ui/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

app.use(createPinia())
app.use(AureaUI)
app.mount('#app')
```

---

## 📃 Documentação no Storybook

Explore nossa [documentação interativa](http://localhost:6006) para:

- Visualizar os componentes com diferentes estados
- Ver exemplos práticos e código de uso
- Testar a acessibilidade e responsividade
- Ler descrições completas e dicas de uso

---

## 🤝 Contribuição

| Plataforma | Link                                                               |
| ---------- | ------------------------------------------------------------------ |
| 💻 GitHub  | [github.com/seu-org/aurea-ui](https://github.com/seu-org/aurea-ui) |

Contribuições são bem-vindas! Crie um fork, envie um PR ou participe das discussões.

---

## 🧪 Desenvolvimento

```sh
npm install
```

### Executar em ambiente de desenvolvimento

```sh
npm run storybook
```

### Verificar tipos e gerar build de produção

```sh
npm run build
```

---

> Feito por Matheus Faria, que acredita em acessibilidade e design centrado no usuário.
