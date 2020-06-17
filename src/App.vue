<template>
    <div class="bg-black text-white">
        <ul class="flex text-center">
            <li class="flex-1 px-4 py-2 m-2"><router-link to="/">Home</router-link></li>
            <li class="flex-1 px-4 py-2 m-2"><router-link to="/about">About</router-link></li>
            <li class="flex-1 px-4 py-2 m-2"><router-link to="/to-do-list">To Do List</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'App'
    }
</script>
