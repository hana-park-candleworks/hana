<template>
  <div class="text-left p-4 bg-white">
    <login-header/>
    <section>
      <login-member/>
    </section>
  </div>
</template>

<script>

  import LoginHeader from "@/components/login/LoginHeader.vue";
  import LoginMember from "@/components/login/LoginMember.vue";

  export default {
    name: 'Login',
    components: {
      LoginMember,
      LoginHeader
    }
  }
</script>