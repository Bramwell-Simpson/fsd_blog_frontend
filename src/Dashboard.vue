<template>
    <h1>Dashboard</h1>
    <h3>Change password</h3>
    <button @click="removeKey">Logout</button>
</template>

<script>

    import { useLocalStorage } from "@vueuse/core"

    export default {
        methods: {
            removeKey() {
                
                const logged = useLocalStorage("login");

                logged.value = null;

                console.log("Key removed");
                window.location.replace("http://localhost:5173")
            }
        }
    }
</script>