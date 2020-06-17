<template>
    <section class="m-auto my-2">
        <ul>
            <li class="bg-black text-left p-2 my-1" v-for="(todoItem, index) in items" :key="index + 'todo-list-id'">
                {{ todoItem }}
                <span class="float-right" type="button" @click="removeTodo(todoItem, index)">
                    <i class="fa fa-trash" aria-hidden="true"/>
                </span>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'TodoList',
        props: ['items'],
        methods: {
            removeTodo(todoItem, index) {
                this.$emit('removed', todoItem, index);
            }
        }
    }
</script>

<style scoped>

    </style>