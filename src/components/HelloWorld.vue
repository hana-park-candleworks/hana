<template>
    <div class="min-h-screen w-screen bg-white flex p-4">
        <form>
        <input-field v-model="namedd"/>
        <!--        :하위 컴포넌트가 받을 이름="상위 컴포넌트가 하위 컴포넌트로 보낼 데이터 이름" @하위 컴포넌트가 보낸 이벤트 이름 = "상위 컴포넌트에서 실행시킬 이벤트 이름"-->
        <button @click="addlists"> Submit</button>
        </form>

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
                namedd: null,
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
            },
            addlists() {
                // const commitValue = this.$store.commit('ADD_LiSTS', e.target);
                console.log(this.name);
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

    .red {
        color: red;
    }

    .bold {
        font-weight: bold;
    }
</style>