<template>
  <main class="anotification-view">
    <ANotification
      v-if="showNotification"
      type="error"
      message="Algo deu errado ao processar sua solicitação."
      @close="handleClose"
    />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ANotification from '@/components/ANotification/ANotification.vue'

const showNotification = ref(true)

function handleClose() {
  showNotification.value = false
  console.log('Notificação fechada.')
}
</script>

<style scoped>
.anotification-view {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
