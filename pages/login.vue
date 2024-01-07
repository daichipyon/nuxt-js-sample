<script setup lang="ts">
definePageMeta({
  auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: "/profile" },
});


const { status, signIn, signOut } = useAuth()
const loggedIn = computed(() => status.value === 'authenticated')

async function handleSignIn() {
  await signIn("github")
}

async function handleSignOut() {
  await signOut()
}
</script>

<template>
  <div>
    <button v-if="loggedIn" @click="handleSignOut">Sign Out</button>
    <button v-else @click="handleSignIn()">Sign In</button>
  </div>
</template>