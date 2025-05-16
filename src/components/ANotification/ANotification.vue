<template>
  <div :class="['a-notification', type]" role="alert">
    <div class="a-notification__icon" aria-hidden="true">
      <i :class="['a-notification__fa-icon', iconClass]" />
    </div>

    <div class="a-notification__message">{{ message }}</div>

    <button class="a-notification__close" @click="emit('close')" aria-label="Fechar notificação">
      <i class="fa fa-xmark" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  message: { type: String, required: true },
  type: {
    type: String as () => 'error' | 'success' | 'warning',
    default: 'error',
    validator: (val: string) => ['error', 'success', 'warning'].includes(val),
  },
})

const emit = defineEmits(['close'])

const iconClass = computed(() => {
  switch (props.type) {
    case 'success':
      return 'fa fa-circle-check'
    case 'warning':
      return 'fa fa-triangle-exclamation'
    default:
      return 'fa fa-circle-xmark'
  }
})
</script>

<style scoped src="./ANotification.scss" />
