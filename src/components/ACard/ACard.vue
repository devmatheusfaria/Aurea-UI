<template>
  <div class="a-card">
    <img v-if="image" class="a-card__image" :src="imageSrc" :alt="imageAlt" loading="lazy" />

    <div class="a-card__content">
      <h3 class="a-card__title">{{ title }}</h3>
      <p class="a-card__subtitle" v-if="subtitle">{{ subtitle }}</p>
      <p class="a-card__description">{{ description }}</p>
      <AButton
        v-if="buttonText"
        class="a-card__button"
        :label="buttonText"
        :background-color="buttonBgColor"
        :text-color="buttonTextColor"
        @click="emit('click:action')"
      >
        <template #right>
          <span aria-hidden="true">&rarr;</span>
        </template>
      </AButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AButton from '@/components/AButton/AButton.vue'

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  description: { type: String, required: true },
  image: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
  buttonText: { type: String, default: '' },
  buttonBgColor: { type: String, default: '#2563EB' },
  buttonTextColor: { type: String, default: '#ffffff' },
})

const emit = defineEmits(['click:action'])

const imageSrc = computed(() => {
  try {
    return props.image ? new URL(`../../assets/${props.image}`, import.meta.url).href : ''
  } catch {
    return ''
  }
})
</script>

<style scoped src="./ACard.scss" />
