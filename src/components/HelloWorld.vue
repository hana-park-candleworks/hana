<template>
    <div class="min-h-screen w-screen bg-white p-4">
        <form>
        <input-field v-model="namedd"/>
        <!--        :하위 컴포넌트가 받을 이름="상위 컴포넌트가 하위 컴포넌트로 보낼 데이터 이름" @하위 컴포넌트가 보낸 이벤트 이름 = "상위 컴포넌트에서 실행시킬 이벤트 이름"-->
        <button @click="addlists"> Submit</button>
        </form>

        <!-- slot: 컴포넌트 사이에 원하는 html을 또 추가하고 싶을 때 사용한다.
            -->
        <ul class="w-full text-black">
            <li v-for="(list) in lists"
                :key="list.id"
                class="p-4 my-3 w-1/2 inline-block bg-white shadow-md rounded-lg cursor-default"
                >
                <div>
                    <p class="block my-1 text-black font-semibold font-sans tracking-wide">{{list.desc}}</p>
                </div>
            </li>
        </ul>
        <Scrollama :progress="true"
                   @step-progress.once="stepProgressHandler"
                   :offset="1"
        >
            <div class="step1" data-step="a">
                <img alt="" :src="imgUrl" v-bind:class="step1Class"/>
            </div>
        </Scrollama>
        <Scrollama :progress="true"
                   @step-progress.once="stepProgressHandler2"
                   :offset="0.8"
        >
            <div class="step2" data-step="b">
                <img alt="" :src="imgUrl" v-bind:class="step2Class"/>
            </div>
        </Scrollama>
    </div>
</template>

<script>
    import 'intersection-observer';
    import Scrollama from 'vue-scrollama';
    import InputField from "@/components/inputField";

    export default {
        name: "HelloWorld",
        components: {InputField, Scrollama},
        data() {
            return {
                imgUrl: "https://image.candleworks.com/cw_magazine/157/SpCZN6LAQrvxEaT5lJacoArHG4tXw6aimW2bn61P.jpeg",
                imgUrlIndex: 0,
                namedd: null,
                slotData: 'first slot data',
                imgClass: [],
                scrollY: 0,
                timer: null,
                currStep: null,
                currStepProgress: null,
                step1Class: null,
                step2Class: null
            }
        },
        methods: {
            upDateImgUrl(index) {
                this.imgUrlIndex = index
                this.imgUrl = this.lists[this.imgUrlIndex].img
            },
            updateName(name) {
                this.name = name;
            },
            addlists() {
                // const commitValue = this.$store.commit('ADD_LiSTS', e.target);
                console.log(this.name);
            },
            stepProgressHandler ({element, progress, index}) {
                console.log({element, progress, index});
                this.step1Class = 'fadeEffect';

            },
            stepProgressHandler2 ({element, progress, index}) {
                console.log({element, progress, index});
                this.step2Class = 'upFadeEffect';

            },
        },
        computed: {  //실시간으로 데이터를 받아와야 하기 때문에 methods가 아닌 computed에 작성해줌.
            lists() {
                return this.$store.state.lists;
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    };

</script>

<style scoped>
    p:hover {
        opacity: 0.5;
    }

    .red {
        color: red;
    }

    .bold {
        font-weight: bold;
    }
    img{opacity: 0; transition: all 2s; transform: translateX(50px)}
    .fadeEffect {
        opacity: 1;
    }
    .upFadeEffect {
        opacity: 1;
        transform: translateX(0);
    }
</style>