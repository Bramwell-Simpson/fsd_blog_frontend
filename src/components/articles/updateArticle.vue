<template>
    <v-card variant="outlined" class="mx-auto" width="400">
        <v-card-title class="text-center">
            Update an Article
        </v-card-title>
    
        <v-card-text>
            <v-form @submit.prevent="updateArticle">

                <v-text-field v-model="id" label="Article ID" variant="outlined"></v-text-field>
                
                <v-text-field v-model="title" label="Article Title (optional)" variant="outlined"></v-text-field>

                <v-text-field v-model="author" label="Author (optional)" variant="outlined"></v-text-field>

                <v-textarea v-model="text" label="Article Text (optional)" variant="outlined"></v-textarea>
    
                <v-btn block @click="updateArticle" variant="outlined">Update Article</v-btn>
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
import { toHandlers } from 'vue';
    import ArticleService from '../../services/Article.service';

    export default {
        data() {
            return {
                "id": "",
                "title": "",
                "author": "",
                "text": "",
                snackbar: false,
                serverResponse: ""
            }
        },
        methods: {
            updateArticle()
            {
                let authToken = useLocalStorage("token");

                ArticleService.updateArticle(authToken.value, this.id, this.title, this.author, this.text)
                .then(serverResponse => {
                    this.serverResponse = "Article " + serverResponse.article_id + " has been updated!"
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