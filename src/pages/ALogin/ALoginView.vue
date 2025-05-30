<template>
  <section class="login-view">
    <h1 class="login-view__title">Exemplo de ALogin</h1>
    <ALogin
      v-model:username="username"
      v-model:password="password"
      title="Bem-vindo"
      username-label="Usuário"
      username-placeholder="Digite seu usuário"
      password-label="Senha"
      password-placeholder="Digite sua senha"
      login-text="Entrar"
      signup-text="Criar conta"
      forgot-text="Esqueci a senha"
      @login="handleLogin"
      @signup="handleSignup"
      @forgot="handleForgot"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ALogin from '@/components/ALogin/ALogin.vue'

const username = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('Login solicitado:', username.value, password.value)
}

const handleSignup = () => {
  console.log('Criar conta acionado')
}

const handleForgot = () => {
  console.log('Recuperação de senha acionada')
}
</script>

<style scoped>
.login-view {
  max-width: 400px;
  margin: 40px auto;
  padding: 24px;
  font-family: sans-serif;
}

.login-view__title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 24px;
}
</style>
