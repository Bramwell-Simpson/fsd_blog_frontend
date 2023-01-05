<template>
    <h1>Articles</h1>
    <i>Current Number of Articles - {{ numOfArticles }}</i>
    <br>
    <em v-if="loading && !error">Loading articles...</em>

    <ul v-if="articles.length">
        <li v-for="article in articles" :key="article.article_id">
            <router-link :to="'/article/' + article.article_id"><articlePreview :title="article.article_title" :author="article.article_author"></articlePreview></router-link>
        </li>
    </ul>

    <div v-if="error != 'null'">
        {{ error }}
    </div>
</template>

<script>

    import articlePreview from "./components/article-preview.vue"
    import articleService from "./services/Article.service"

    export default {
        data() {
            return {
                numOfArticles: 5,

                articles: [{
                    article_id: "1",
                    article_title: "article 1",
                    article_author: "author 1",
                    article_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur odio quos earum. Ducimus expedita consectetur repudiandae quis reiciendis omnis veniam? Nemo, eligendi iure. Enim sed quibusdam aspernatur alias cumque vero! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nostrum amet, expedita fugit nihil omnis at illo iste et alias esse ratione ullam aliquid iusto, praesentium quam. A, vel eos?"
                }],
                error: [],
                loading: true

            }
        },
        mounted() {
            /*articleService.getAll()
            .then(articles => {
                this.articles = articles
                this.loading = false
            })
            .catch(error => this.error = error); */
        },  
        components: {
            articlePreview
        }
    }
</script>

