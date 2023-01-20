<template>
    <v-form @submit.prevent="submitComment">
        <v-text-field :rules="[required]" variant="outlined" v-model="newComment" label="Write a comment" name="comment"></v-text-field>
        <v-btn variant="outlined" @click="submitComment">Comment</v-btn>
    </v-form>

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
    
    import commentService from "../../services/Comment.service"

    export default {
        data() {
            return {
                newComment: "",
                commentSuccessful: "",
                error: [],

                snackbar: false,
                serverResponse: ""
            }
        },
        methods: {
            submitComment(e) {

                if(this.newComment === "") {
                    return;
                }

                commentService.createComment(this.$route.params.id, this.newComment)
                .then(commentSuccesful => {
                    this.serverResponse = "Comment Added!"
                    this.snackbar = true;
                })
                .catch(error => this.error = error)
            },
            required (v) {
                return !!v || 'Field is required'
            }
        }
    }
</script>