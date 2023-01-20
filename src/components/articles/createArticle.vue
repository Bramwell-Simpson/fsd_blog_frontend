<template>
    <v-card variant="outlined" class="mx-auto" width="400">
        <v-card-title class="text-center">
            Create Article
        </v-card-title>
    
        <v-card-text>
            <v-form @submit.prevent="addArticle">
                
                <v-text-field :rules="[required]" v-model="title" label="Article Title" variant="outlined"></v-text-field>

                <v-text-field :rules="[required]" v-model="author" label="Author" variant="outlined"></v-text-field>

                <v-textarea :rules="[required]" v-model="text" label="Article Text" variant="outlined"></v-textarea>
    
                <v-btn block @click="addArticle" variant="outlined">Create Article</v-btn>
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
                "title": "",
                "author": "",
                "text": "",
                snackbar: false,
                serverResponse: ""
            }
        },
        methods: {
            addArticle()
            {

                let authToken = useLocalStorage("token");

                ArticleService.addArticle(authToken.value, this.title, this.author, this.text)
                .then(serverResponse => {
                    this.serverResponse = "Article " + serverResponse.article_id + " has been added!"
                    this.snackbar = true;
                })
                .catch(error => {
                    this.serverResponse = error;
                    this.snackbar = true;
                })
            },
            required (v) {
                return !!v || 'Field is required'
            }
        }
    }
</script>