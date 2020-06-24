<template>
    <div class="shadow-md bg-white m-auto">
        <input class="border-none outline-none w-64 h-12 text-left p-4 text-gray-500" type="text" v-model="newTodoItem"
               placeholder="Type what you have to do" @keyup.enter="addTodo">
        <span class="w-1/5 bg-black inline-block h-12 float-right cursor-pointer" @click="addTodo">
            <i class="fa fa-plus py-4 text-white" aria-hidden="true"/>
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