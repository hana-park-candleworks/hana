<template>
    <section class="w-2/6 m-auto my-2">
        <transition-group name="list" tag="ul" class="transition-transform duration-1000 translate-x-4">
            <li class="bg-gray-200 text-left p-1 m-1" v-for="(todoItem, index) in items" :key="index + 'todo-list-id'">
                <i class="fa fa-check-square" aria-hidden="true"/>
                {{ todoItem }}
                <span class="float-right" type="button" @click="removeTodo(todoItem, index)">
                    <i class="fa fa-trash" aria-hidden="true"/>
                </span>
            </li>
        </transition-group>
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