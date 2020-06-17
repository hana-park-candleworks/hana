<template>
    <div>
        <span class="cursor-pointer" @click="clearTodo">Clear All</span>
    </div>
</template>

<script>
    export default {
        name: "TodoFooter",
        methods: {
            clearTodo() {
                this.$emit('removeAll');
            }
        }
    }
</script>