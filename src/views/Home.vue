<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="border p-2 inline rounded-full">
    <HelloWorld msg="Welcome to Your Vue.js App!!!!!!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
