<template>
    <div class="text-black border-b-2 border-black">
        <h1>로그인</h1>
        <span>
            {{ message }}
            <i class="fa fa-arrow-right cursor-pointer" @click="addCount"/>
        </span>
        <a v-if="countRemain === 0" :href="candleUrl">  캔들웍스 이동하기</a>
    </div>
</template>

<script>
    export default {
        name: "LoginHeader.vue",
        data() {
            return {
                message: '어서오세요. DIY 홈 프레그런스의 가장 깊이 있는 경험이 있는 곳, 캔들웍스입니다.',
                candleUrl: "https://candleworks.co.kr/shop/login.php",
                count: 0,
                countRemain: 1
            }
        },
        methods:{
            addCount() {
                this.count += 1
                this.countRemain = this.count % 2
            }
        }
    }
</script>