<template>
    <em v-if="loading && !error">Loading comments...</em>
    <div>
        <h1>Comments: </h1>
        <CreateComment></CreateComment>
        <comment v-for="(comment, index) in comments" :key="index"
            :comment_text="comment.comment_text"
            :date_published="comment.date_published"
        />
    </div>
    <p v-show="error == '' && comments == ''">No comments yet</p>
    <p v-if="error != ''">{{ error }}</p>
</template>

<script>

    import comment from "./comment.vue"
    import commentService from "../services/Comment.service"
    import CreateComment from "../components/createComment.vue"

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
                this.comments = comments
                this.loading = false
            })
            .catch(error => this.error = error)
        },
        components: {
            comment,
            CreateComment
        }
    }


</script>