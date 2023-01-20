<template>
    <v-card variant="outlined" class="mx-auto" width="400">
        <v-card-title class="text-center">
            Delete an Article
        </v-card-title>
    
        <v-card-text>
            <v-form @submit.prevent="deleteArticle">
                
                <v-text-field v-model="id" label="Article ID to Delete" variant="outlined"></v-text-field>
    
                <v-btn block @click="deleteArticle" color="warning" variant="outlined">Delete Article</v-btn>
            </v-form>
        </v-card-text>
    </v-card>

    <v-snackbar v-model="snackbar">
        {{ serverResponse }}
    
        <template v-slot:actions>
            <v-btn color="purple" variant="text" @click="snackbar = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>

    import { useLocalStorage } from '@vueuse/core';
    import ArticleService from '../../services/Article.service';

    export default {
        data() {
            return {
                id: "",
                snackbar: false,
                serverResponse: ""
            }
        },
        methods: {
            deleteArticle()
            {
                let authToken = useLocalStorage("token");

                ArticleService.deleteArticle(authToken.value, this.id)
                .then(serverResponse => {
                    this.serverResponse = "The article has been deleted"
                    this.snackbar = true;
                })
                .catch(error => {
                    this.serverResponse = error;
                    this.snackbar = true;
                })
            }
        }
    }
</script>