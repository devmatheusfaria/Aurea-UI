<template>
  <button
    :class="classes"
    :style="{
      ...variantStyles,
      borderRadius: props.rounded
        ? typeof props.rounded === 'number'
          ? `${props.rounded}px`
          : props.rounded
        : undefined,
    }"
  >
    <i v-if="props.icon" :class="`fa fa-${props.icon}`" class="a-button__icon" />
    <span v-if="props.label">{{ props.label }}</span>
    <slot v-else />
    <i
      v-if="props.iconRight"
      :class="`fa fa-${props.iconRight}`"
      class="a-button__icon a-button__icon--right"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import './AButton.scss'

const props = defineProps<{
  label?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'success' | 'warning' | 'danger'
  icon?: string
  iconRight?: string
  rounded?: string | number
  backgroundColor?: string
  textColor?: string
}>()

const classes = computed(() => [
  'a-button',
  `a-button--${props.size || 'md'}`,
  `a-button--${props.variant || 'primary'}`,
])

const variantStyles = computed(() => {
  if (props.backgroundColor || props.textColor) {
    return {
      backgroundColor: props.backgroundColor,
      color: props.textColor,
    }
  }

  if (props.variant) {
    const variants = {
      primary: { backgroundColor: '#0a84ff', color: '#ffffff' },
      success: { backgroundColor: '#30d158', color: '#ffffff' },
      warning: { backgroundColor: '#ffd60a', color: '#000000' },
      danger: { backgroundColor: '#ff453a', color: '#ffffff' },
    }
    return variants[props.variant]
  }

  return {
    backgroundColor: '#1c1c1e',
    color: '#ffffff',
  }
})
</script>
