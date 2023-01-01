<template>
        <h1>{{welcome_message}}</h1>
        <h3>Yeah this is a thing</h3>
        <br>
        <Posts/>
</template>

<script>

    import Posts from "./Posts.vue"

    export default {
        data() {
            return {
                welcome_message: "Welcome to the blog!"
            }
        },
        components: {
            Posts
        }
    }
</script>
