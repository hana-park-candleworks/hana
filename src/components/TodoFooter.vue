<template>
    <div>
        <span class="cursor-pointer" @click="clearTodo">Clear All</span>
    </div>
</template>

<script>
    export default {
        methods: {
            clearTodo() {
                this.$emit('removeAll');
            }
        }
    }
</script>

<style scoped>

</style>