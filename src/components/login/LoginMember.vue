<template>
    <section class="">
        <div class="text-black">
            <div class="flex space-between">
                <div class="flex-col w-1/2 pl-0" style="border-right: 1px solid #ddd; padding-right: 20px;">
                    <h4 class="subtitle">회원</h4>
                    <form class="form-style">
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
                    <div style="position: relative;">
                        <span class="checkBox-style" :class="{ checkIconStyle : checkTrue }"></span>
                        <input type="checkbox" id="autoLogin" style="display: none; width: 18px; height: 18px; vertical-align: middle;" @click="checkIcon">
                        <label class="checkBox-text" for="autoLogin">자동 로그인</label>
                        <span class="searchText-style">아이디/비밀번호 찾기</span>
                    </div>
                </div>
                <div class="flex-col w-1/2 pl-0" style="padding-left: 20px;">
                    <h4 class="subtitle">비회원</h4>
                    <form class="form-style">
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
    /**
     * @route post https://candleworks.co.kr/api/v1/login
     * @param mb_id string
     * @param mb_password string
     *
     */
    export default {
        name: "LoginMember",
        data() {
            return {
                checkTrue : false
            }
        },
        methods: {
            checkIcon(){
                if(this.checkTrue === false){
                    this.checkTrue = true;
                }else{
                    this.checkTrue = false;
                }
            }
        }
    }
</script>

<style scoped>
    .subtitle {
        font-size: 30px;
        font-weight: 500;
        margin:8px 0;
    }
    .form-style{
        margin-bottom: 20px;
        padding: 10px 0;
        margin-top: 20px;
        height: 140px;
    }
    .input-style {
        border: 1px solid rgba(102, 102, 102, 0.3);
        font-size: 14px;
        padding: 0 15px;
        height: 40px;
        line-height: 40px;
        width: 100%;
        margin-bottom: 22px;
        opacity: 1;
        transition: all 0.2s;
    }
    .input-style:hover {
        border: 1px solid rgba(102, 102, 102, 1);
    }
    .input-style::placeholder {
        color: darkgray;
    }
    .button-style {
        height: 40px;
        width: 100%;
        color: white;
        font-size: 14px;
        font-weight: 500;
        padding: 12px 20px;
        border: none;
        background: #606060;
        line-height: 1;
        cursor: pointer;
        outline: none;
        margin-bottom: 20px;
    }
    .button-style:hover {
        opacity: 0.9;
    }
    .checkBox-style {
        width: 18px;
        height: 18px;
        border: 1px solid rgba(96, 96, 96, 0.3);
        border-radius: 2px;
        margin-right: 10px;
        display: inline-block;
        line-height: 1;
        vertical-align: middle;
        animation: 0.2s;
        cursor: pointer;
        position: absolute;
        top: 3px;
    }
    .checkBox-style:hover {
        border: 1px solid rgba(96, 96, 96, 1);
    }
    .checkBox-text {
        margin-left: 30px;
        font-size: 15px;
        color: #606060;
        font-weight: 500;
    }
    .checkIconStyle {
        background-color: #606060;
    }
    .checkIconStyle::after {
        position: absolute;
        top: 50px;
        width: 5px;
        height: 1px;
        color: red;
    }
    .checkIconStyle::after {

    }
</style>