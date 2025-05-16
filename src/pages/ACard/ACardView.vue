<template>
  <main class="acard-view">
    <ACard
      title="Título do Card"
      subtitle="Subtítulo opcional"
      description="Este é um exemplo de descrição de um cartão usando o componente ACard da Aurea UI. Ele suporta título, subtítulo, imagem e botão de ação."
      image="logo.svg"
      buttonText="Saiba mais"
      buttonBgColor="#0a0a0a"
      buttonTextColor="#ffffff"
      @click:action="handleActionClick"
    />
  </main>
</template>

<script setup lang="ts">
import ACard from '@/components/ACard/ACard.vue'

function handleActionClick() {
  console.log('Botão do card clicado!')
}
</script>

<style scoped>
.acard-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f5f5f5;
}
</style>
