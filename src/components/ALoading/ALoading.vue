<template>
  <div v-if="props.blurBackground" class="a-loading__overlay">
    <div class="a-loading" :style="spinnerStyle" aria-label="Carregando" role="status" />
  </div>
  <div v-else class="a-loading" :style="spinnerStyle" aria-label="Carregando" role="status" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  size?: number
  color?: string
  thickness?: number
  blurBackground?: boolean
}>()

const spinnerStyle = computed(() => ({
  width: `${props.size ?? 36}px`,
  height: `${props.size ?? 36}px`,
  borderTopColor: props.color || '#1c1c1e',
  borderWidth: `${props.thickness ?? 4}px`,
}))
</script>

<style scoped src="./ALoading.scss" />
s
