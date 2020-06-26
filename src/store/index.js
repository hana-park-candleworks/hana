import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
    state: { //데이터가 들어가는 곳. (data)
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
    },
    mutations: { //데이터를 바꾸는 곳. mutations 안에 함수를 정의해서 states의 변수에 접근을 해서 변경을 한다.
        ADD_LiSTS(state, name) {
            state.lists.push({
                id: Math.random(),
                desc: name,
                img: "https://image.candleworks.com/cw_magazine/153/OELywMGcxii9JhHrA8Ctvq5eNO6A2H5qmPfGclNB.jpeg"
            });
            console.log(state.lists)
        }
    },
    actions: { //함수가 들어가는 곳. (methods) 비동기 작업을 하고 state를 변경할 때 사용한다.
    },
    plugins: [
        createPersistedState(
        )],
    modules: {}
    //getters: {computed}
});

