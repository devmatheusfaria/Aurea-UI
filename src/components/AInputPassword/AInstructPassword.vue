<template>
  <ul
    v-if="password && showRules"
    class="a-input__rules"
    role="status"
    aria-live="polite"
    :class="[
      'a-input__rules--visible',
      orientation === 'horizontal' ? 'a-input__rules--horizontal' : 'a-input__rules--vertical',
    ]"
  >
    <li
      v-for="(rule, index) in validations"
      :key="index"
      :class="{ 'a-input__rule--passed': rule.computed }"
      :aria-atomic="true"
    >
      <i :class="rule.computed ? 'fa fa-check' : 'fa fa-times'" aria-hidden="true"></i>
      {{ rule.description }}
      <span class="sr-only"> {{ rule.computed ? 'atendida' : 'não atendida' }} </span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, watch, reactive, ref } from 'vue'

const props = defineProps<{
  modelValue: boolean
  password: string
  orientation?: 'horizontal' | 'vertical'
}>()

const emit = defineEmits(['update:modelValue'])

const showRules = ref(true)

const validations = reactive([
  {
    description: 'Maiúscula',
    computed: computed(() => /[A-Z]/.test(props.password)),
  },
  {
    description: 'Minúscula',
    computed: computed(() => /[a-z]/.test(props.password)),
  },
  {
    description: 'Número',
    computed: computed(() => /\d/.test(props.password)),
  },
  {
    description: 'Caractere especial',
    computed: computed(() => /[^A-Za-z0-9]/.test(props.password)),
  },
  {
    description: '8 caracteres',
    computed: computed(() => props.password.length >= 8),
  },
])

const isValid = computed(() => validations.every((rule) => rule.computed))

watch(
  () => props.password,
  () => {
    if (isValid.value) {
      setTimeout(() => {
        showRules.value = false
      }, 300)
    } else {
      showRules.value = true
    }

    emit('update:modelValue', isValid.value)
  },
)
</script>

<style scoped src="./AInputPassword.scss" />
