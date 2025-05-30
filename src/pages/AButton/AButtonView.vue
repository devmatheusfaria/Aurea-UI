<template>
  <section class="button-view">
    <h1 class="button-view__title">Exemplos de AButton</h1>

    <div class="button-view__section">
      <h2 class="button-view__subtitle">Botão padrão</h2>
      <AButton label="Clique aqui" icon="check" />
    </div>

    <div class="button-view__section">
      <h2 class="button-view__subtitle">Botão com ícone à direita</h2>
      <AButton label="Avançar" iconRight="arrow-right" />
    </div>

    <div class="button-view__section">
      <h2 class="button-view__subtitle">Botões com variantes</h2>
      <AButton label="Primário" variant="primary" />
      <AButton label="Sucesso" variant="success" />
      <AButton label="Aviso" variant="warning" />
      <AButton label="Erro" variant="danger" />
    </div>

    <div class="button-view__section">
      <h2 class="button-view__subtitle">Botões com tamanhos</h2>
      <AButton label="Pequeno" size="sm" />
      <AButton label="Médio" size="md" />
      <AButton label="Grande" size="lg" />
    </div>

    <div class="button-view__section">
      <h2 class="button-view__subtitle">Botão personalizado</h2>
      <AButton
        label="Salvar"
        icon="save"
        iconRight="arrow-right"
        size="lg"
        variant="primary"
        :rounded="'12px'"
        :background-color="'#10b981'"
        :text-color="'#ffffff'"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import AButton from '@/components/AButton/AButton.vue'
</script>

<style scoped>
.button-view {
  padding: 24px;
  font-family: sans-serif;
}

.button-view__title {
  font-size: 24px;
  margin-bottom: 16px;
}

.button-view__subtitle {
  font-size: 18px;
  margin-bottom: 8px;
  margin-top: 24px;
}

.button-view__section > *:not(:first-child) {
  margin-right: 12px;
  margin-bottom: 8px;
}
</style>
