<template>
    <form @submit.prevent="submitComment">
        <label for="comment">Write a comment: </label>
        <input v-model="newComment" name="comment" >
        <br>
        <button>Comment</button>
    </form>

    <p>{{ newComment }}</p>

    <p v-if="commentSuccessful">Comment added!</p>
    <p v-if="error != ''">{{ error }}</p>
</template>

<script>
    
    import commentService from "../services/Comment.service"

    export default {
        data() {
            return {
                newComment: "",
                commentSuccessful: "",
                error: []
            }
        },
        methods: {
            submitComment(e) {
                commentService.createComment(this.$route.params.id, this.newComment)
                .then(commentSuccesful => {
                    this.commentSuccessful = this.commentSuccessful
                })
                .catch(error => this.error = error)
            }
        }
    }
</script>