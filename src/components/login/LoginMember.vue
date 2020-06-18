<template>
    <section class="width-lg" style="margin-bottom: 40px">
        <div class="text-black">
            <div class="flex space-between">
                <div class="flex-col w-1/2 p-3 pl-0 " :xs="24">
                    <h4 class="subtitle">회원</h4>
                    <form style="margin-bottom: 20px">
                        <div>
                            <input class="input-style" placeholder="아이디">
                        </div>
                        <div style="margin-bottom: 10px">
                            <input class="input-style" placeholder="패스워드" type="password">
                        </div>
                    </form>
                    <div>
                        <button class="button-style">로그인</button>
                    </div>
                    <div>
                        <input type="checkbox">
                        <span class="checkBox-style">자동 로그인</span>
                        <span class="checkBox-style">아이디/비밀번호 찾기</span>
                    </div>
                </div>
                <div class="flex-col w-1/2 p-3 pl-0">
                    <h4 class="subtitle">비회원</h4>
                    <form style="margin-bottom: 20px">
                        <div>
                            <input class="input-style" placeholder="주문번호">
                        </div>
                        <div style="margin-bottom: 10px">
                            <input class="input-style" placeholder="비밀번호" type="password">
                        </div>
                    </form>
                    <div>
                        <button class="button-style">주문조회</button>
                    </div>
                    <div>
                        <h6 style="margin-top: 20px; margin-bottom: 20px; height: 30px; font-size: 13px;">아직 캔들웍스의 회원이 아니세요?</h6>
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
    .subtitle {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .input-style {
        border: 1px solid #ddd;
        font-size: 11px;
        padding: 0.3rem 0.5rem;
        width: 100%;
        margin-bottom: 20px;
    }
    .button-style {
        width: 100%;
        color: white;
        font-size: 11px;
        padding: 0.3rem 0.5rem;
        border: none;
        background: dimgrey;
    }
    .checkBox-style{
        font-size: 11px;
        margin: 0.3rem;
    }


</style>