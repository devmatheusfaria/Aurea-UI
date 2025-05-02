<template>
  <ul
    v-if="password && !isValid"
    class="a-input__rules"
    :class="[
      'a-input__rules--visible',
      orientation === 'horizontal' ? 'a-input__rules--horizontal' : 'a-input__rules--vertical',
    ]"
  >
    <li
      v-for="(rule, index) in validations"
      :key="index"
      :class="{ 'a-input__rule--passed': rule.computed }"
    >
      <i :class="rule.computed ? 'fa fa-check' : 'fa fa-times'"></i>
      {{ rule.description }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, watch, reactive } from 'vue'

const props = defineProps<{
  modelValue: boolean
  password: string
  orientation?: 'horizontal' | 'vertical'
}>()

const emit = defineEmits(['update:modelValue'])

const validations = reactive([
  { description: 'Maiúscula', computed: computed(() => /[A-Z]/.test(props.password)) },
  { description: 'Minúscula', computed: computed(() => /[a-z]/.test(props.password)) },
  { description: 'Número', computed: computed(() => /\d/.test(props.password)) },
  {
    description: 'Caractere Especial',
    computed: computed(() => /[^A-Za-z0-9]/.test(props.password)),
  },
  { description: '8 Caracteres', computed: computed(() => props.password.length >= 8) },
])

const isValid = computed(() => validations.every((rule) => rule.computed))

watch(
  () => props.password,
  () => {
    emit('update:modelValue', isValid.value)
  },
)
</script>

<style scoped src="./AInputPassword.scss" />
