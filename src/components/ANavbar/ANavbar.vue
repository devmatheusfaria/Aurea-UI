<template>
  <nav class="a-navbar" role="navigation" aria-label="Main Navigation" :style="navbarStyles">
    <div class="a-navbar__container">
      <div class="a-navbar__logo">
        <template v-if="logoImage">
          <img :src="logoImage" :alt="logoAlt || 'Logo'" class="a-navbar__logo-img" />
        </template>
        <template v-else>
          {{ logo }}
        </template>
      </div>

      <button
        class="a-navbar__toggle"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen"
        aria-controls="a-navbar-items"
        :aria-label="isOpen ? 'Fechar menu' : 'Abrir menu'"
      >
        <i :class="isOpen ? 'fa fa-times' : 'fa fa-bars'" aria-hidden="true"></i>
      </button>

      <ul id="a-navbar-items" class="a-navbar__items" :class="{ 'a-navbar__items--open': isOpen }">
        <li v-for="(item, index) in items" :key="index" class="a-navbar__item">
          <a :href="item.href" class="a-navbar__link">
            {{ item.label }}
          </a>
        </li>

        <!-- Login / Logout -->
        <li class="a-navbar__item a-navbar__auth">
          <button
            v-if="!isAuthenticated"
            class="a-navbar__link a-navbar__link--auth"
            @click="onLogin"
            :aria-label="loginText"
            :title="loginText"
          >
            {{ loginText }}
          </button>
          <button
            v-else
            class="a-navbar__link a-navbar__link--auth"
            @click="onLogout"
            :aria-label="logoutText"
            :title="logoutText"
          >
            {{ logoutText }}
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  logo?: string
  logoImage?: string
  logoAlt?: string
  items?: { label: string; href: string }[]
  isAuthenticated?: boolean
  loginText?: string
  logoutText?: string
  linkColor?: string
  linkHoverColor?: string
}>()

const emit = defineEmits(['logout', 'login'])

const isOpen = ref(false)

const onLogout = () => emit('logout')
const onLogin = () => emit('login')

const navbarStyles = computed(() => ({
  '--link-color': props.linkColor || '#1c1c1e',
  '--link-hover-color': props.linkHoverColor || '#0a84ff',
}))
</script>

<style scoped src="./ANavbar.scss" />
