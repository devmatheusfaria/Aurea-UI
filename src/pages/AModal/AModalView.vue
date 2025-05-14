<template>
  <div style="padding: 2rem; display: flex; justify-content: center">
    <AModal
      :show="showModal"
      title="Política de Cookies"
      message="Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com a nossa política."
      accept-text="Aceitar"
      reject-text="Recusar"
      accept-bg-color="#222"
      reject-bg-color="#ececec"
      accept-text-color="#ffffff"
      reject-text-color="#222222"
      size="md"
      @accept="handleAccept"
      @reject="handleReject"
      @close="handleClose"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AModal from '@/components/AModal/AModal.vue'

const showModal = ref(true)

function handleAccept() {
  console.log('Cookies aceitos')
  showModal.value = false
}

function handleReject() {
  console.log('Cookies recusados')
  showModal.value = false
}

function handleClose() {
  console.log('Fechou o modal')
  showModal.value = false
}
</script>
