<template>
    <div>
        <h1>Comments: </h1>
        <comment v-for="(comment, index) in comments" :key="index"
            :comment_text="comment.comment_text"
            :date_published="comment.date_published"
        />
    </div>
</template>

<script>

    import comment from "./comment.vue"

    export default {
        data() {
            return {
                comments: [
                    {comment_text: "Yeah comment 1", date_published: "13/12/2022"},
                    {comment_text: "Yeah comment 2", date_published: "13/12/2022"},
                    {comment_text: "Yeah comment 3", date_published: "13/12/2022"}
                ]
            }
        },
        components: {
            comment
        }
    }


</script>