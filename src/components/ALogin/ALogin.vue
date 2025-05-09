<template>
  <form class="a-login" @submit.prevent="handleLogin">
    <h2 class="a-login__title">{{ title }}</h2>

    <div class="a-login__field">
      <AInput
        v-model="internalUsername"
        :label="usernameLabel"
        :placeholder="usernamePlaceholder"
        icon-left="fa fa-user"
      />
    </div>

    <div class="a-login__field">
      <AInputPassword
        v-model="internalPassword"
        :label="passwordLabel"
        :placeholder="passwordPlaceholder"
        icon-left="fa fa-lock"
      />
    </div>

    <div class="a-login__footer">
      <div class="a-login__buttons">
        <AButton type="submit" :label="loginText" background-color="#616161" text-color="#ffffff" />
        <AButton
          :label="signupText"
          @click="emit('signup')"
          background-color="#616161"
          text-color="#ffffff"
        />
      </div>

      <div class="a-login__links">
        <AButton
          :label="forgotText"
          @click="emit('forgot')"
          background-color="transparent"
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
  title?: string
  username?: string
  password?: string
  usernameLabel?: string
  passwordLabel?: string
  usernamePlaceholder?: string
  passwordPlaceholder?: string
  loginText?: string
  signupText?: string
  forgotText?: string
}>()

const emit = defineEmits(['login', 'signup', 'forgot', 'update:username', 'update:password'])

const internalUsername = ref(props.username ?? '')
const internalPassword = ref(props.password ?? '')

watch(
  () => props.username,
  (val) => {
    if (val !== internalUsername.value) internalUsername.value = val || ''
  },
)
watch(
  () => props.password,
  (val) => {
    if (val !== internalPassword.value) internalPassword.value = val || ''
  },
)

watch(internalUsername, (val) => emit('update:username', val))
watch(internalPassword, (val) => emit('update:password', val))

function handleLogin() {
  emit('login', {
    username: internalUsername.value,
    password: internalPassword.value,
  })
}
</script>

<style scoped src="./ALogin.scss" />
