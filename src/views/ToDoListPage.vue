<template>
    <div>
        <h1> 투 두 리스트 혼자 만들기 !! </h1>
        <h1> To do List </h1>
        <TodoInput/>
        <TodoList/>
    </div>
</template>
<script>
    import TodoInput from "@/components/TodoInput";
    import TodoList from "@/components/TodoList";
    export default {
        name: "to-do-list",
        components: {TodoList, TodoInput},
    }

</script>
<style scoped>

</style>