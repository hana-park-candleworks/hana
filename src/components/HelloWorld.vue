<template>
    <div class="min-h-screen w-screen bg-white flex p-4">

<!--       -->
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
    export default { //컴포넌트를 등록하면 html 태그처럼 사용할 수 있다.
                    // 컴포넌트 내에서는 1개의 태그에 모든 나머지 태그들이 들어가야한다.
                    //전역컴포넌트로 등록하면 어디서든 쓸 수 있다는 장점이 있지만, 그 컴포넌트를 더 이상 사용하지 않더라도 최종빌드에는 들어가기 때문에
        // 사용자가 다운로드 받아야 하는 자바스트립트의 양이 불필요하게 커지게 된다.
        name: "HelloWorld",
        data() {  //재사용 컴포넌트이기 때문에 그냥 data로 두면 다른 컴포넌트들 까지 다 영향을 받게 된다. 오브젝트가 레퍼런스 주소로 넘어간다. 그래서 data를 함수 형태로 data() 선언한다.
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