<template>
  <div style="padding: 2rem; max-width: 480px; margin: auto">
    <h2>Crie sua senha</h2>
    <AInputPassword
      v-model="password"
      label="Senha"
      placeholder="Digite uma senha segura"
      confirmPlaceholder="Repita sua senha"
      :validate-password="true"
      :confirm-password="true"
      @passwordValidated="(valid) => (passwordIsValid = valid)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AInputPassword from '@/components/AInputPassword/AInputPassword.vue'

const password = ref('')
const passwordIsValid = ref(false)
</script>
