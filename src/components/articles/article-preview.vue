<template>
    {{ title }}  by  {{ author }}
</template>

<script>
    export default {
        props: {
            title: String,
            author: String 
        }
    }
</script>