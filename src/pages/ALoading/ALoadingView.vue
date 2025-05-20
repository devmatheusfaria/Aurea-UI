<template>
  <section class="minha-view">
    <ALoading v-if="loading" :size="48" :thickness="6" :blur-background="true" />

    <div v-else>
      <h1 class="titulo">Dados Carregados</h1>
      <p>{{ dados }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ALoading from '@/components/ALoading/ALoading.vue'

const loading = ref(true)
const dados = ref('')

onMounted(() => {
  // Simulação
  setTimeout(() => {
    dados.value = 'Conteúdo carregado com sucesso!'
    loading.value = false
  }, 2000)
})
</script>

<style scoped>
.titulo {
  font-size: 1.5rem;
  color: #1c1c1e;
}
</style>
