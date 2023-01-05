<template>
    <router-link to="/">Home</router-link>
    <br>
    <router-link v-if="checkedLogged() === false" to="/login">Login</router-link>
    <router-link v-if="checkedLogged() === true" to="/dashboard">Dashboard</router-link>
    <router-view></router-view>

</template>

<script>

    import {useLocalStorage} from '@vueuse/core';

    export default {
        methods: {
            checkedLogged() {
                
                const logged = useLocalStorage('login') 

                if(logged.value === "logged") {
                    return true;
                }
                else {
                    return false;
                }
                
            }
        }
    }
</script>