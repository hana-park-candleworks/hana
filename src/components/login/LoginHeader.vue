<template>
    <div class="login-line">
        <h2 class="login-title">로그인</h2>
        <span class="login-desc">
            {{ message }}
        </span>
    </div>
</template>

<script>
    export default {
        name: "LoginHeader.vue",
        data() {
            return {
                message: '어서 오세요. DIY 홈 프레그런스의 가장 깊이 있는 경험이 있는 곳, 캔들웍스 입니다.'
            }
        }
    }
</script>

<style>
    .login-title {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 32px;
        color: black;
    }
    .login-desc {
        color: black;
        font-size: 14px;
    }
    .login-line {
        border-bottom: 3px solid rgb(96, 96, 96);
    }
</style>