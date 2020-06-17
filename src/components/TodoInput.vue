<template>
    <div class="shadow-md bg-white w-1/4 m-auto">
        <input class="border-none outline-none w-4/5 h-12 text-left p-4" type="text" v-model="newTodoItem" placeholder="Type what you have to do" @keyup.enter="addTodo">
        <span class="w-1/5 bg-red-500 inline-block h-12 float-right cursor-pointer" @click="addTodo">
            <i class="fa fa-plus py-4" aria-hidden="true"/>
        </span>
    </div>
</template>

<script>
    export default {
        name: "TodoInput",
        data() {
            return {
                newTodoItem: ''
            }
        },
        methods: {
            addTodo() {
                if (this.newTodoItem !== "") {
                    let newTodoItemValue = this.newTodoItem && this.newTodoItem.trim();
                    this.$emit('add', newTodoItemValue)
                    this.clearInput();
                }
            },
            clearInput() {
                this.newTodoItem = '';
            }
        }

    }
</script>