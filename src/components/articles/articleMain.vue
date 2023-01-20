<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col>
                    <p v-if="loading && !error">Loading article...</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p v-if="error != ''">{{ error }}</p>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col>
                    <h2 class="text-h2 text-center">{{ article.title }}</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <h3 class="text-h3 text-center text-medium-emphasis">By {{ article.author }}</h3>
                    
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p class="articleText">{{ article.article_text }}</p>
                </v-col>
            </v-row>

            <v-divider></v-divider>

            <CommentList></CommentList>
        </v-container>
    </v-main>
</template>



<script>

    import articleService from "../../services/Article.service";
    import CommentList from "../comments/commentList.vue"

    export default { 
        data() {
            return {
                article: [],
                error: [],
                loading: true,
            }
        },
        mounted() {
            articleService.getOne(this.$route.params.id)
            .then(article => {
                this.article = article
                this.loading = false
            })
            .catch(error => this.error = erorr);
        },
        components: {
            CommentList
        }
    }
</script> 