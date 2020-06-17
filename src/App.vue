<template>
    <div class="text-center bg-green-300">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/to-do-list">To Do List</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'App'
    }
</script>
