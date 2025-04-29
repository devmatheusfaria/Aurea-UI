<template>
  <div class="a-input-wrapper">
    <div class="a-input__container">
      <label
        v-if="label"
        :for="inputId"
        class="a-input__label"
        :style="{ color: labelColor || 'inherit' }"
      >
        {{ label }}
      </label>

      <div
        class="a-input__field-wrapper"
        :class="classes"
        :style="{
          '--focus-color': focusColor || '#0a84ff',
          borderRadius: rounded
            ? typeof rounded === 'number'
              ? `${rounded}px`
              : rounded
            : undefined,
        }"
      >
        <i v-if="iconLeft" :class="['a-input__icon', 'a-input__icon--left', iconLeft]" />

        <input
          :id="inputId"
          v-bind="$attrs"
          :type="type"
          v-model="inputValue"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :aria-invalid="!!error"
          :aria-describedby="ariaDescribedby"
          class="a-input__input"
        />

        <i v-if="iconRight" :class="['a-input__icon', 'a-input__icon--right', iconRight]" />
      </div>

      <div
        v-if="helperText || error"
        :id="`${inputId}-description`"
        class="a-input__helper"
        :class="{ 'a-input__helper--error': error }"
      >
        {{ error || helperText }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import './AInput.scss'

const props = defineProps<{
  modelValue: string
  type?: string
  label?: string
  labelColor?: string
  placeholder?: string
  helperText?: string
  error?: string
  size?: 'sm' | 'md' | 'lg'
  iconLeft?: string
  iconRight?: string
  disabled?: boolean
  readonly?: boolean
  rounded?: string | number
  focusColor?: string
}>()

const emit = defineEmits(['update:modelValue'])

const inputId = computed(() => `a-input-${Math.random().toString(36).substr(2, 9)}`)

const ariaDescribedby = computed(() => {
  if (props.helperText || props.error) {
    return `${inputId.value}-description`
  }
  return undefined
})

const classes = computed(() => [
  'a-input',
  `a-input--${props.size || 'md'}`,
  { 'a-input--error': props.error, 'a-input--disabled': props.disabled },
])

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>
