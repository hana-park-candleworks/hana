<template>
    <section class="">
        <div class="text-black">
            <div class="flex space-between">
                <div class="flex-col w-1/2 pl-0" style="border-right: 1px solid #ddd; padding-right: 20px;">
                    <h4 class="subtitle">회원</h4>
                    <span v-if="welcome"> 환영합니다. {{ savedUserId }} 님. </span>
                    <form class="form-style">
                        <div>
                            <input class="input-style" type="text" placeholder="아이디" v-model="user.mb_id">
                            <div v-if="errors" class="errorMessage">
                                {{ errors }}
                            </div>
                        </div>
                        <div style="margin-bottom: 10px">
                            <input class="input-style" placeholder="패스워드" type="password" v-model="user.mb_password">
                            <div v-if="errors" class="errorMessage">
                                {{ errors }}
                            </div>
                        </div>
                    </form>
                    <div>
                        <button class="button-style" @click="login">로그인</button>
                    </div>
                    <div style="position: relative; border-bottom: 1px solid #ddd; margin: 20px 0; height: 40px;">
                        <ev-check-box> 자동로그인</ev-check-box>
                        <a>아이디/비밀번호 찾기</a>
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
                    <div style="border-bottom: 1px solid #ddd; margin: 20px 0; height: 40px;">
                        <h6 style="font-size: 18px; font-weight: 500;">아직 캔들웍스의 회원이 아니세요?</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import EvCheckBox from "@/components/EvCheckBox";
    import axios from 'axios';

    /**
     * @route post https://candleworks.co.kr/api/v1/login
     * @param mb_id string
     * @param mb_password string
     *
     */
    export default {
        name: "LoginMember",
        components: {EvCheckBox},
        data() {
            return {
                user: {
                    mb_id: '',
                    mb_password: ''
                },
                errors: '',
                welcome: false,
                savedUserId : ''
            }
        },
        methods: {
            async login() {
                try {
                    const result = await axios.post("/api/v1/login", this.user);
                    console.log(result);
                    this.saveId();
                    this.welcome = true;
                } catch (e) {
                    console.log('catch');
                    console.log(e.response);
                    this.errors = e.response.data.mb_id;
                }
            },
            saveId() {
                if (this.user.mb_id !== "") {
                    localStorage.setItem(this.user.mb_id, this.user.mb_password);
                    this.savedUserId = this.user.mb_id;
                }
            },
            clearInput () {
                this.user.mb_id = "";
                this.user.mb_password = "";
            }
        }
    }
</script>

<style lang="scss" scoped>
    .subtitle {
        font-size: 30px;
        font-weight: 500;
        margin: 8px 0;
    }

    .form-style {
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
        margin-bottom: 5px;
        margin-top: 20px;
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

    input[id="autoLogin"] + label:before {
        width: 18px;
        height: 18px;
        border-radius: 3px;
        border: 1px solid #606060;
        display: inline-block;
        vertical-align: middle;
    }

    input[id="autoLogin"]:checked + label {
        background: yellow;
    }

    .errorMessage {
        color: #f56c6c;
        font-size: 12px;
        line-height: 1px;
        padding-top: 4px;
    }
</style>