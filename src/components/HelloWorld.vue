<template>
    <div class="min-h-screen w-screen bg-white flex p-4">
        <slot name="helloTemplate" :slotData="slotData"></slot>
<!--        slot 의 이름을 지정 해주고 원하는 위치에 넣어 준다.
            상위 컴포넌트에 넣어준 html이 출력 된다.
            상위 컴포넌트에 하위 컴포넌트에서 선언된 변수 데이터를 넘겨줄 수도 있다. -->
    <form action="">
        <input-field :name="name" @update-name="updateName"/>
<!--        :하위 컴포넌트가 받을 이름="상위 컴포넌트가 하위 컴포넌트로 보낼 데이터 이름" @하위 컴포넌트가 보낸 이벤트 이름 = "상위 컴포넌트에서 실행시킬 이벤트 이름"-->
        <br><button> Submit </button>
    </form>
        {{ name }}

<!-- slot: 컴포넌트 사이에 원하는 html을 또 추가하고 싶을 때 사용한다.
    -->
        <ul class="w-full text-black">
            <li v-for="(list, index) in lists"
                :key="list.id"
                class="p-4 my-3 w-1/2 inline-block bg-white shadow-md rounded-lg cursor-default"
                @mouseover="upDateImgUrl(index)">
                <div>
                    <p class="block my-1 text-black font-semibold font-sans tracking-wide">{{list.desc}}</p>
                </div>
            </li>
            <img alt="" class="m-auto" :src="imgUrl">
            {{ lists }}
        </ul>
    </div>
</template>

<script>
    import InputField from "@/components/inputField";
    export default {
        name: "HelloWorld",
        components: {InputField},
        data() {
            return {
                imgUrl: "https://image.candleworks.com/cw_magazine/157/SpCZN6LAQrvxEaT5lJacoArHG4tXw6aimW2bn61P.jpeg",
                imgUrlIndex: 0,
                name: '',
                slotData: 'first slot data'
            }
        },
        methods: {
            upDateImgUrl(index) {
                this.imgUrlIndex = index
                this.imgUrl = this.lists[this.imgUrlIndex].img
            },
            updateName(name) {
                this.name = name;
            }
        },
        computed: {  //실시간으로 데이터를 받아와야 하기 때문에 methods가 아닌 computed에 작성해줌.
            lists() {
                return this.$store.state.lists;
            }
        }
    };

</script>

<style scoped>
    p:hover {
        opacity: 0.5;
    }
    .red{
        color: red;
    }
    .bold{
        font-weight: bold;
    }
</style>