<template>
    <div class="text-center bg-green-300">
        <todo-header/>
        <todo-input @add="addTodo"/>
        <todo-list :items="todoItems" @removed="removeTodo"/>
        <todo-footer @click="clearAll()"/>
    </div>
</template>

<script>

    import TodoInput from "@/components/TodoInput.vue";
    import TodoList from "@/components/TodoList.vue";
    import TodoFooter from "@/components/TodoFooter.vue";
    import TodoHeader from "@/components/TodoHeader";
    export default {
        name: "ToDoListPage",
        components: {
            TodoHeader,
            TodoInput,
            TodoList,
            TodoFooter
        },
        data() {
            return {
                todoItems: [],
            }
        },
        created() {
            if (localStorage.length > 0) {
                for (let i = 0; i < localStorage.length; i++) {
                    this.todoItems.push(localStorage.key(i));
                }
            }
        },
        methods: {
            addTodo(todoItem) {
                //localStorage.setItem(todoItem, todoItem);
                this.todoItems.push(todoItem);
            },
            clearAll() {
                //localStorage.clear();
                this.todoItems = [];
            },
            removeTodo(todoItem, index) {
                //localStorage.removeItem(todoItem);
                this.todoItems.splice(index, 1);
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    }
</script>

<style scoped>

</style>