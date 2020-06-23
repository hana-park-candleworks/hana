<template>
    <div class="min-h-screen w-screen bg-white flex p-4">
        <button @click="rendering"> 랜더링 </button>
        <div v-if="show"> Yes </div>
        <div v-else> No </div>
<!--        v-if의 조건이 false가 되면 Yes div 자체가 랜더링이 되지 않는다.
            v-if 와 v-show의 차이점?
            v-if는 조건이 false이면 랜더링하지 않고 조건이 true가 될 때 마다 랜더링을 해주기 때문에 토글 비용이 높고,
            v-show는 미리 랜더링 해놓고 display none으로 스타일만 바뀌기 때문에 초기 랜더링 비용이 높다.
            자주 토글 해야하는 것은 v-show가 효율적이고, 런타임 시 조건이 바뀌지 않는다면 v-if가 효율적이다. -->
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
    export default {
        name: "HelloWorld",
        data() {
            return {
                imgUrl: "https://image.candleworks.com/cw_magazine/157/SpCZN6LAQrvxEaT5lJacoArHG4tXw6aimW2bn61P.jpeg",
                imgUrlIndex: 0,
                lists: [
                    {
                        id: 1,
                        desc: "기본에 충실하게, PC 몰드로 만드는 모던한 감성",
                        img: "https://image.candleworks.com/cw_magazine/157/SpCZN6LAQrvxEaT5lJacoArHG4tXw6aimW2bn61P.jpeg"
                    },
                    {
                        id: 2,
                        desc: "가끔 봐도, 오래 보아도 예쁜 캔들",
                        img: "https://image.candleworks.com/cw_magazine/156/hLqODKT17rJUJAuVVQwwkgFZWycaFHZ2DZAFESxr.jpeg"
                    },
                    {
                        id: 3,
                        desc: "기본에 충실한 도구",
                        img: "https://image.candleworks.com/cw_magazine/155/zSnv9P2l2OiRz2dNlPJva8oAurLV5df8NkBVhcuW.jpeg"
                    },
                    {
                        id: 4,
                        desc: "컬러, 이제 전용 컬러칩으로 확인하세요",
                        img: "https://image.candleworks.com/cw_magazine/154/b4MdMIgpvb79KT3YnFtYSdUhvHjChHtBOk8YbVQk.jpeg"
                    },
                    {
                        id: 5,
                        desc: "감사한 마음을 향기에 담아 선물하세요",
                        img: "https://image.candleworks.com/cw_magazine/153/OELywMGcxii9JhHrA8Ctvq5eNO6A2H5qmPfGclNB.jpeg"
                    }
                ],
                show: false
            }
        },
        methods: {
            upDateImgUrl(index) {
                this.imgUrlIndex = index
                this.imgUrl = this.lists[this.imgUrlIndex].img
            },
            rendering() {
                this.show = !this.show;
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