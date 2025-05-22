<template>
  <div class="a-modal" role="dialog" aria-modal="true" :aria-labelledby="titleId" v-if="show">
    <div class="a-modal__content" :class="modalSizeClass">
      <button class="a-modal__close" aria-label="Fechar" @click="emit('close')">
        <i class="fa fa-times a-modal__icon" aria-hidden="true"></i>
      </button>

      <h2 class="a-modal__title" :id="titleId">{{ title }}</h2>
      <p class="a-modal__text">
        <slot>{{ message }}</slot>
      </p>

      <div class="a-modal__actions">
        <AButton
          class="a-modal__button"
          :label="acceptText"
          :background-color="acceptBgColor"
          :text-color="acceptTextColor"
          @click="emit('accept')"
        />
        <AButton
          class="a-modal__button"
          :label="rejectText"
          :background-color="rejectBgColor"
          :text-color="rejectTextColor"
          @click="emit('reject')"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount } from 'vue'
import AButton from '@/components/AButton/AButton.vue'

const props = defineProps({
  show: { type: Boolean, required: true },
  title: { type: String, default: 'Cookie Policy' },
  message: { type: String, default: '' },
  acceptText: { type: String, default: 'Accept' },
  rejectText: { type: String, default: 'Reject' },
  acceptBgColor: { type: String, default: '#222' },
  rejectBgColor: { type: String, default: '#ececec' },
  acceptTextColor: { type: String, default: '#fff' },
  rejectTextColor: { type: String, default: '#222' },
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
  },
})

const emit = defineEmits(['accept', 'reject', 'close'])

const modalSizeClass = computed(() => ({
  'a-modal--sm': props.size === 'sm',
  'a-modal--md': props.size === 'md',
  'a-modal--lg': props.size === 'lg',
}))

const titleId = `a-modal-title-${Math.random().toString(36).substring(2, 8)}`

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped src="./AModal.scss" />
