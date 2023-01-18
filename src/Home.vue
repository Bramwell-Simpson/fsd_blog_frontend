<template>
    <v-main>
        <v-container id="">
            <v-row align="center" style="height: 100vh">
                <v-col cols="12">
                    <h1 class="text-h1 text-center" >{{welcome_message}}</h1>
                    <h2 class="text-h2 text-center text-medium-emphasis">Hi, ec:mr</h2>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col>
                    <Posts/>
                </v-col>
            </v-row>
        </v-container>  
    </v-main>
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
