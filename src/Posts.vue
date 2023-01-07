<template>

    <v-main>
        <v-container>
            <v-row>
                <v-col>
                    <h2 class="text-h2 text-center">Articles</h2>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <p class="text-subtitle-1 text-medium-emphasis text-center">Current Number of Articles - {{ articles.length }}</p>
                </v-col>
            </v-row>

            <v-row >
                <v-col>
                    <p v-show="loading && !error" class="text-disabled text-center">Loading articles...</p>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <p class="text-red text-center" v-show="error != ''">{{ error }}</p>
                </v-col>
            </v-row>

            <!-- ARTICLES -->

            <v-row>
                <v-col v-for="article in articles" :key="article.article_id" md="4" cols="12">
                    <v-card :elevation="4" variant="tonal" height="200">
                        <v-card-item>
                            <v-card-title>{{ article.title }}</v-card-title>
                            <v-card-subtitle>By {{ article.author }}</v-card-subtitle>
                        </v-card-item>
                        <v-card-actions>
                            <v-btn class="mt-15" block variant="outlined">
                                <router-link :to="'/article/' + article.article_id">Read Article</router-link>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </v-main>

</template>

<script>
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
        }
    }
</script>

<!-- 
    {
        article_id: "1",
    article_title: "article 1",
    article_author: "author 1",
    article_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur odio quos earum. Ducimus expedita consectetur repudiandae quis reiciendis omnis veniam? Nemo, eligendi iure. Enim sed quibusdam aspernatur alias cumque vero! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nostrum amet, expedita fugit nihil omnis at illo iste et alias esse ratione ullam aliquid iusto, praesentium quam. A, vel eos?"
    }
-->
