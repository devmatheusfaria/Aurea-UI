<template>
  <section class="navbar-view">
    <ANavbar
      :logo="'AureaUI'"
      :items="navItems"
      :is-authenticated="isAuthenticated"
      :login-text="'Entrar'"
      :logout-text="'Sair'"
      :link-color="'#1c1c1e'"
      :link-hover-color="'#0a84ff'"
      @login="handleLogin"
      @logout="handleLogout"
    />

    <main class="navbar-view__content">
      <h1>Bem-vindo ao Projeto com ANavbar</h1>
      <p>
        Status do usuário: <strong>{{ isAuthenticated ? 'Autenticado' : 'Visitante' }}</strong>
      </p>
    </main>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ANavbar from '@/components/ANavbar/ANavbar.vue'

const isAuthenticated = ref(false)

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Sobre', href: '#' },
  { label: 'Contato', href: '#' },
]

function handleLogin() {
  isAuthenticated.value = true
}

function handleLogout() {
  isAuthenticated.value = false
}
</script>

<style scoped>
.navbar-view {
  font-family: sans-serif;
}

.navbar-view__content {
  padding: 40px 24px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
</style>
