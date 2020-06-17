<template>
    <section class="width-lg" style="margin-bottom: 40px">
        <div class="text-black">
            <div class="flex space-between">
                <div class="flex flex-col" :xs="24">
                    <h4>회원</h4>
                    <form style="margin-bottom: 20px">
                       <input placeholder="아이디">
                        <input placeholder="패스워드" type="password">
                    </form>
                    <div>
                        <button style="width: 100%">로그인</button>
                    </div>
                    <div>
                        <input type="checkbox">자동 로그인
                        <span>아이디/비밀번호 찾기</span>
                    </div>
                </div>
                <div class="flex flex-col">
                    <h4>비회원</h4>
                    <form style="margin-bottom: 20px">
                        <div>
                            <input placeholder="주문번호">
                        </div>
                        <div style="margin-bottom: 10px">
                            <input placeholder="비밀번호" type="password">
                        </div>
                    </form>
                    <div>
                        <button style="width: 100%">주문조회</button>
                    </div>
                    <div>
                        <h6 style="margin-top: 20px; margin-bottom: 20px; height: 30px;">아직 캔들웍스의 회원이 아니세요?</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "LoginMember.vue"
    }
</script>

<style scoped>



</style>