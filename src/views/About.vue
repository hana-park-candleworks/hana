<template>
  <div class="width-lg">
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

<style>
  .width-lg {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    padding-top: 20px;
    margin-bottom: 40px;
  }
</style>