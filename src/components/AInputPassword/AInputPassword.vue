<template>
  <div class="a-input-wrapper">
    <!-- Label principal do campo de senha -->
    <label
      v-if="label"
      :for="inputId"
      class="a-input__label"
      :style="{ color: labelColor || 'inherit' }"
    >
      {{ label }}
    </label>

    <!-- Campo de input da senha principal -->
    <div
      class="a-input__field-wrapper"
      :class="classes"
      :style="{ '--focus-color': focusColor || '#0a84ff' }"
    >
      <input
        :id="inputId"
        :type="showPassword ? 'text' : 'password'"
        class="a-input__input"
        :value="password"
        @input="(e) => updatePassword((e.target as HTMLInputElement)?.value || '')"
        :placeholder="placeholder"
        :aria-invalid="error ? 'true' : 'false'"
      />

      <!-- Botão para alternar visibilidade da senha -->
      <button
        type="button"
        class="a-input__toggle-visibility"
        @click="showPassword = !showPassword"
        :aria-label="showPassword ? 'Ocultar senha' : 'Mostrar senha'"
        :title="showPassword ? 'Ocultar senha' : 'Mostrar senha'"
        role="button"
      >
        <i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'" aria-hidden="true"></i>
        <span class="sr-only">{{ showPassword ? 'Ocultar senha' : 'Mostrar senha' }}</span>
      </button>
    </div>

    <!-- Regras de validação da senha, exibidas com componente auxiliar -->
    <AInstructPassword
      v-if="validatePassword"
      v-model="passwordValidated"
      :password="password"
      :orientation="orientation"
    />

    <!-- Label do campo de confirmação -->
    <label
      v-if="confirmPassword && confirmLabel"
      class="a-input__label"
      :style="{ color: labelColor || '#1c1c1e' }"
      :for="`${inputId}-confirm`"
    >
      {{ confirmLabel }}
    </label>

    <!-- Campo de confirmação da senha -->
    <div
      v-if="confirmPassword"
      class="a-input__field-wrapper"
      :class="{ 'a-input--error': confirmError }"
    >
      <input
        :id="`${inputId}-confirm`"
        :type="showConfirmPassword ? 'text' : 'password'"
        class="a-input__input"
        v-model="confirmPasswordValue"
        :placeholder="confirmPlaceholder || 'Confirme a senha'"
        :aria-invalid="confirmError ? 'true' : 'false'"
      />

      <!-- Botão para alternar visibilidade da senha de confirmação -->
      <button
        type="button"
        class="a-input__toggle-visibility"
        @click="showConfirmPassword = !showConfirmPassword"
        :aria-label="showConfirmPassword ? 'Ocultar senha' : 'Mostrar senha'"
        title="Alternar visibilidade da senha"
        role="button"
      >
        <i :class="showConfirmPassword ? 'fa fa-eye-slash' : 'fa fa-eye'" aria-hidden="true"></i>
        <span class="sr-only">{{ showConfirmPassword ? 'Ocultar senha' : 'Mostrar senha' }}</span>
      </button>
    </div>

    <!-- Mensagem de erro de confirmação -->
    <div v-if="confirmError" class="a-input__helper a-input__helper--error">
      As senhas devem ser iguais.
    </div>

    <!-- Texto de ajuda opcional -->
    <div v-else-if="helperText" class="a-input__helper">
      {{ helperText }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import AInstructPassword from './AInstructPassword.vue'

const props = defineProps<{
  modelValue: string
  validatePassword?: boolean
  confirmPassword?: boolean
  label?: string
  confirmLabel?: string
  placeholder?: string
  confirmPlaceholder?: string
  helperText?: string
  orientation?: 'horizontal' | 'vertical'
  error?: string
  focusColor?: string
  labelColor?: string
}>()

/**
 * Eventos emitidos:
 * - update:modelValue: emite valor do campo principal
 * - passwordValidated: emite booleano indicando se senha é válida
 */
const emit = defineEmits(['update:modelValue', 'passwordValidated'])

const password = ref(props.modelValue)
const confirmPasswordValue = ref('')
const passwordValidated = ref(false)

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const confirmError = computed(() =>
  props.confirmPassword ? confirmPasswordValue.value !== password.value : false,
)

const inputId = `a-input-password-${Math.random().toString(36).substring(2, 8)}`

const updatePassword = (val: string) => {
  password.value = val
  emit('update:modelValue', val)
}

watch(password, () => {
  if (!props.confirmPassword) {
    emit('passwordValidated', props.validatePassword ? passwordValidated.value : true)
  } else {
    emit('passwordValidated', passwordValidated.value && !confirmError.value)
  }
})

watch(confirmPasswordValue, () => {
  emit('passwordValidated', passwordValidated.value && !confirmError.value)
})

const classes = computed(() => ({
  'a-input--error': confirmError.value,
}))
</script>

<style scoped src="./AInputPassword.scss" />
