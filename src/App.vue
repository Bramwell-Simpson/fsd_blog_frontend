<template>
    <v-app>
        <v-app-bar rounded>
            <v-app-bar-title><router-link to="/">Home</router-link></v-app-bar-title>
            <router-link v-show="checkedLogged() === false" to="/login"><v-btn variant="text">Login</v-btn></router-link>
            <router-link v-show="checkedLogged() === true" to="/dashboard"><v-btn variant="text">Dashboard</v-btn></router-link>
        </v-app-bar>
        <router-view></router-view>
    </v-app>
</template>

<script>

    import {useLocalStorage} from '@vueuse/core';

    export default {
        methods: {
            checkedLogged() {
                
                let currToken = useLocalStorage('token')

                if(currToken.value === "undefined") {
                    return false;
                }
                else {
                    return true;
                }
                
            }
        }
    }
</script>