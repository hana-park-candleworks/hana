<template>
    <div class="min-h-screen w-screen bg-white flex p-4">
        <div>
            <button @click="changeMessage">클릭</button><br>
            {{ reverseMessage }}<br>
            {{ updated }}
<!--        computed가 watch보다 더 코드를 간결하게 쓸 수 있기 때문에 되도록 computed를 사용하여 코드를 짜주는 것이 좋다.
            watch로 변수에 할당되는 값이 무엇으로 바뀌는지 볼 수 있음.
            -->
        </div>
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
                number: '안녕하세요.',
                updated: '아니오'
            }
        },
        methods: {
            upDateImgUrl(index) {
                this.imgUrlIndex = index
                this.imgUrl = this.lists[this.imgUrlIndex].img
            },
            changeMessage() {
                this.number = '하나 하나';
            }

        },
        computed: {
            reverseMessage() {
                return this.number.split('').reverse().join('');
            }
        },
        watch: {
            //감시하고 싶은 데이터 작성
            number(newVal, oldVal) {  //newValue와 oldValue를 매개변수로 사용. newValue에는 변한 값, oldValue에는 변하기 전 값이 할당됨.
                console.log(newVal, oldVal); //하나 하나 안녕하세요.
                this.updated = '네';
            }
        }
    };

</script>

<style scoped>
    p:hover {
        opacity: 0.5;
    }
</style>