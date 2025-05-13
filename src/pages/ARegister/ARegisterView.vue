<template>
  <ARegister
    v-model="form"
    title="Criar conta"
    name-label="Nome completo"
    email-label="E-mail"
    password-label="Senha"
    confirm-password-label="Confirmar senha"
    name-placeholder="Digite seu nome completo"
    email-placeholder="Digite seu e-mail"
    password-placeholder="Crie uma senha segura"
    confirm-password-placeholder="Repita sua senha"
    register-text="Cadastrar"
    back-to-login-text="Já tenho conta"
    :show-confirm-password="true"
    @register="handleRegister"
    @back="handleBack"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ARegister from '@/components/ARegister/ARegister.vue'

const form = ref({
  name: '',
  email: '',
  password: '',
})

function handleRegister(data: typeof form.value) {
  console.log('Cadastro realizado:', data)
}

function handleBack() {
  console.log('Voltar para login')
}
</script>
