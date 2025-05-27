<template>
  <section class="a-card" role="region" :aria-labelledby="titleId">
    <img
      v-if="image"
      class="a-card__image"
      :src="imageSrc"
      :alt="imageAlt || 'Imagem ilustrativa do cartão'"
      loading="lazy"
    />

    <div class="a-card__content">
      <h3 :id="titleId" class="a-card__title">{{ title }}</h3>
      <p v-if="subtitle" class="a-card__subtitle">{{ subtitle }}</p>
      <p class="a-card__description">{{ description }}</p>

      <AButton
        v-if="buttonText"
        class="a-card__button"
        :label="buttonText"
        :background-color="buttonBgColor"
        :text-color="buttonTextColor"
        @click="emit('click:action')"
      />
    </div>
  </section>
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

const imageSrc = computed(() => props.image || '')

const titleId = `a-card-title-${Math.random().toString(36).substring(2, 8)}`
</script>

<style scoped src="./ACard.scss" />
