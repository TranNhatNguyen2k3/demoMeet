<template>
  <q-page class="flex flex-center column">
    {{ $keycloak }}
    <q-btn @click="$keycloak.login" color="primary" label="Login" />
    <q-btn @click="logout" color="secondary" label="Logout" />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";

const authenticated = ref(false);

onMounted(() => {
  if (keycloak) {
    authenticated.value = keycloak.authenticated;
  }
});

// const login = () => {
//   if (keycloak) {
//     this.$keycloak.login();
//   }
// };

const logout = () => {
  if (keycloak) {
    this.$keycloak.login();
  }
};
</script>
