<template>
    <div class="min-h-screen w-screen bg-white flex p-4">

<!--   API: 여러 페이지로 구성된 것처럼 보이지만 처음에 index.html이 열리고 나선 그 페이지에서 모든 것이 이루어짐. 엄청나!
        페이지를 왔다갔다 하는 것처럼 보이는 것이 뷰 라우터의 기능이다.

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

            }
        },
        methods: {
            upDateImgUrl(index) {
                this.imgUrlIndex = index
                this.imgUrl = this.lists[this.imgUrlIndex].img
            },

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