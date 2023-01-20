<template>
    <v-main>
        <v-container id="">
            <v-row align="center" style="height: 100vh">
                <v-col cols="12">
                    <h1 class="text-h1 text-center" >{{welcome_message}}</h1>
                    <a href="#articles"><h3 class="text-h3 text-center text-medium-emphasis">Read some of our articles</h3></a>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col>
                    <Posts id="articles"></Posts>
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
