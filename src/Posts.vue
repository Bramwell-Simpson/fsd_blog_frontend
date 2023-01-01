<template>
    <h1>Articles</h1>
    <i>Current Number of Articles - {{ numOfArticles }}</i>
    <br>
    <em v-if="loading">Loading articles...</em>

    <ul v-if="articles.length">
        <li v-for="articles in articles" :key="article.article_id">
            <router-link :to="'/article' + article.article_id">{{ article.article_title }} + ' by ' + {{ article.article_author }}</router-link>
        </li>
    </ul>

    <div v-if="error">
        {{ error }}
    </div>
</template>

<script>

    import post from "./components/post.vue"
    import articleService from "./services/Article.service"

    export default {
        data() {
            return {
                numOfArticles: 5,

                articles: [],
                error: [],
                loading: true

            }
        },
        mounted() {
            articleService.getAll()
            .then(articles => {
                this.articles = articles
                this.loading = false
            })
            .catch(error => this.error = error);
        },  
        components: {
            post
        }
    }
</script>