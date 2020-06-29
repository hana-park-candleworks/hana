<template>
    <div>
        <input type="text" v-model="todoItem">
        <button></button>
    </div>
</template>
<script>
    export default {
        name: "TodoInput",
        data() {
            return {
                todoItem: null,
            }
        }
    }
</script>
<style scoped>
</style>