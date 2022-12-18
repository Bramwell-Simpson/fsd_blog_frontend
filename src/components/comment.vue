<template>
    <div>
        <p>{{comment_text}} - {{date_published}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            comment_text: String,
            date_published: String
        }
    }
</script>