<template>
    <v-form @submit.prevent="deleteComment">
        <v-text-field variant="outlined" v-model="comment_id" label="Comment ID to delete" name="comment"></v-text-field>
        <v-btn variant="outlined" @click="deleteComment" color="warning">Delete</v-btn>
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
    import { useLocalStorage } from "@vueuse/core"

    export default {
        data() {
            return {
                comment_id: "",
                error: [],

                snackbar: false,
                serverResponse: ""
            }
        },
        methods: {
            deleteComment(e) {

                let authToken = useLocalStorage("token")

                commentService.deleteComment(authToken.value, this.comment_id)
                .then(deleteSuccessful => {
                    
                    if(deleteSuccessful === "OK")
                    {
                        this.serverResponse = "Comment Deleted Successfully"
                        this.snackbar = true;
                    }
                })
                .catch(error => {
                    this.error = error
                    this.snackbar = true;
                    this.serverResponse = "Not allowed"
                })
            }
        }
    }
</script>