<template>
    <div class="min-h-screen w-screen bg-white flex p-4">
        <div>
            <form @submit.prevent="submit">
<!--                <input type="text" class="border border-gray-300" :value="inputValue" @keyup="updateText" id="inputId"><br>-->
<!--                v-model을 사용해서 :value, @keyup까지 모두 생략할 수 있음. 입력되는 value값을 실시간으로 data에 반영하고 (prop) 자동으로 event를 발생시켜 html에 적용도 해줌. (emit)-->
                <input type="text" class="border border-gray-300" v-model="inputValue" id="inputId"><br>
                {{ inputValue }}
                <label for="inputId"></label>
                <button type="submit">제출</button>
            </form>
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
                inputValue: 'text'
            }
        },
        methods: {
            upDateImgUrl(index) {
                this.imgUrlIndex = index
                this.imgUrl = this.lists[this.imgUrlIndex].img
            },
            submit() {
                alert('제출됨');
                console.log(this.inputValue);
            },
            // v-model 사용으로 생략가능하게 된 메소드.
            // updateText(e) {
            //     this.inputValue = e.target.value;
            // }

        }
    };

</script>

<style scoped>
    p:hover{
        opacity: 0.5;
    }
</style>