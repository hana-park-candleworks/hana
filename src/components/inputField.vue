<template>
    <div>
        <label>Name</label>
        <input class="p-4" type="text" :value="name" style="border: 1px solid springgreen" @input="updateName">
<!--        input에 v-model="name"라고 넣어주면 하위 컴포넌트에서 양방향 바인딩으로 바로 name 값을 변경할 수 있게 된다.
            그래서 :value="name" 을 사용해줘야 한다.
            @input 이벤트가 실행 되면 상위컴포넌트로 updateName 이벤트를 실행시키라고 요청한다. -->
    </div>
</template>

<script>
    export default {
        name: "inputField",
        data() {
            return {
            }
        },
        props: {
            name: {
                type: String
            }
        },
        methods: {
            updateName(e) {
                this.$emit('update-name',e.target.value);  //update-name: 상위 컴포넌트에 요청 보낼 이벤트 이름,
                // e.target.value: 같이 보낼 데이터 이름.
            }
        }
    }
</script>

<style scoped>

</style>