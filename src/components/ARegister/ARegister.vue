// ARegister.vue
<template>
  <form class="a-register" @submit.prevent="handleRegister">
    <h2 class="a-register__title">{{ title }}</h2>

    <div class="a-register__field">
      <AInput
        v-model="form.name"
        :label="nameLabel"
        :placeholder="namePlaceholder"
        icon-left="fa fa-user"
      />
    </div>

    <div class="a-register__field">
      <AInput
        v-model="form.email"
        :label="emailLabel"
        :placeholder="emailPlaceholder"
        icon-left="fa fa-envelope"
      />
    </div>

    <div class="a-register__field">
      <AInputPassword
        v-model="form.password"
        :label="passwordLabel"
        :placeholder="passwordPlaceholder"
        icon-left="fa fa-lock"
        :validate-password="true"
        :confirm-password="showConfirmPassword"
        :confirmLabel="confirmPasswordLabel"
        :confirmPlaceholder="confirmPasswordPlaceholder"
        @passwordValidated="(valid: any) => (passwordIsValid = valid)"
      />
    </div>

    <div class="a-register__footer">
      <div class="a-register__buttons">
        <AButton
          type="submit"
          :label="registerText"
          background-color="#616161"
          text-color="#ffffff"
        />
        <AButton
          :label="backToLoginText"
          @click="emit('back')"
          background-color="#616161"
          text-color="#ffffff"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import AInput from '@/components/AInput/AInput.vue'
import AInputPassword from '@/components/AInputPassword/AInputPassword.vue'
import AButton from '@/components/AButton/AButton.vue'

const props = defineProps<{
  modelValue: {
    name: string
    email: string
    password: string
  }
  title?: string
  nameLabel?: string
  emailLabel?: string
  passwordLabel?: string
  namePlaceholder?: string
  emailPlaceholder?: string
  passwordPlaceholder?: string
  confirmPasswordLabel?: string
  confirmPasswordPlaceholder?: string
  registerText?: string
  backToLoginText?: string
  showConfirmPassword?: boolean
}>()

const emit = defineEmits(['update:modelValue', 'register', 'back'])

const form = ref({ ...props.modelValue })
const passwordIsValid = ref(false)

watch(
  () => props.modelValue,
  (val) => {
    if (val) form.value = { ...val }
  },
  { deep: true },
)

watch(form, (val) => emit('update:modelValue', val), { deep: true })

function handleRegister() {
  if (!passwordIsValid.value) return
  emit('register', { ...form.value })
}
</script>

<style scoped src="./ARegister.scss" />
