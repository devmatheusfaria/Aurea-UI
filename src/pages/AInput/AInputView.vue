<template>
  <section class="input-view">
    <h1 class="input-view__title">Exemplos de AInput</h1>

    <div class="input-view__section">
      <h2 class="input-view__subtitle">Input padrão</h2>
      <AInput v-model="inputDefault" label="Nome completo" placeholder="Digite seu nome" />
    </div>

    <div class="input-view__section">
      <h2 class="input-view__subtitle">Com ícones</h2>
      <AInput
        v-model="inputIcons"
        label="Usuário"
        placeholder="Digite seu usuário"
        icon-left="fa fa-user"
        icon-right="fa fa-check"
      />
    </div>

    <div class="input-view__section">
      <h2 class="input-view__subtitle">Com erro</h2>
      <AInput
        v-model="inputError"
        label="Email"
        placeholder="Digite seu email"
        error="Email inválido"
      />
    </div>

    <div class="input-view__section">
      <h2 class="input-view__subtitle">Desabilitado</h2>
      <AInput
        v-model="inputDisabled"
        label="Telefone"
        placeholder="Campo desabilitado"
        :disabled="true"
      />
    </div>

    <div class="input-view__section">
      <h2 class="input-view__subtitle">Com bordas arredondadas</h2>
      <AInput
        v-model="inputRounded"
        label="Buscar"
        placeholder="O que você procura?"
        icon-left="fa fa-search"
        rounded="999px"
        size="lg"
      />
    </div>

    <div class="input-view__section">
      <h2 class="input-view__subtitle">Cor de foco personalizada</h2>
      <AInput
        v-model="inputFocus"
        label="Cor de foco"
        placeholder="Digite algo..."
        focus-color="#ff9500"
      />
    </div>

    <div class="input-view__section">
      <h2 class="input-view__subtitle">Cor do label personalizada</h2>
      <AInput
        v-model="inputLabelColor"
        label="Personalizado"
        placeholder="Digite aqui"
        label-color="#ff9500"
        focus-color="#0a84ff"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AInput from '@/components/AInput/AInput.vue'

const inputDefault = ref('')
const inputIcons = ref('')
const inputError = ref('')
const inputDisabled = ref('')
const inputRounded = ref('')
const inputFocus = ref('')
const inputLabelColor = ref('')
</script>

<style scoped>
.input-view {
  padding: 24px;
  font-family: sans-serif;
}

.input-view__title {
  font-size: 24px;
  margin-bottom: 16px;
}

.input-view__subtitle {
  font-size: 18px;
  margin-top: 24px;
  margin-bottom: 8px;
}

.input-view__section {
  margin-bottom: 24px;
}
</style>
