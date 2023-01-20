<template>
    <em v-if="loading && !error">Loading comments...</em>
    <v-row>
        <v-col>
            <h1>Comments: </h1>
            <CreateComment></CreateComment>

            <v-divider class="mb-4"></v-divider>
            <comment v-for="(comment, index) in comments" :key="index"
                :id="comment.comment_id"
                :comment_text="comment.comment_text"
                :date_published="comment.date_published"
            />

            <p v-show="error == '' && comments == ''">No comments yet</p>
            <p v-if="error != ''">{{ error }}</p>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <DeleteComment></DeleteComment>
        </v-col>
    </v-row>

</template>

<script>

    import comment from "./comment.vue"
    import commentService from "../services/Comment.service"
    import CreateComment from "./createComment.vue"
    import DeleteComment from "./deleteComment.vue"

    export default {
        data() {
            return {
                comments: [],
                error: [],
                loading: true
            }
        },
        mounted() {
            commentService.getComments(this.$route.params.id)
            .then(comments => {
                this.comments = []
                this.comments = comments
                this.loading = false
            })
            .catch(error => this.error = error)
        },
        components: {
            comment,
            CreateComment,
            DeleteComment
        }
    }


</script>