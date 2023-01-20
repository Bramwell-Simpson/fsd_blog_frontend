<template>
<v-main>
    <v-container>
        <v-row style="height: 100vh;" nogutter>
            <v-col cols="12">
                <h1 class="text-h1 mb-4 text-center">Dashboard</h1>
                <v-card>
                    <v-tabs v-model="tab" bg-color="dark" align-tabs="center">
                        <v-tab value="one">Get All Users</v-tab>
                        <v-tab value="two">Add a user</v-tab>
                        <v-tab value="three">Create an article</v-tab>
                        <v-tab value="four">Delete an article</v-tab>
                        <v-tab value="five">Update an article</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item value="one">
                                <UserList></UserList>
                            </v-window-item>

                            <v-window-item value="two">
                                <CreateUser></CreateUser>
                            </v-window-item>

                            <v-window-item value="three">
                                <CreateArticle></CreateArticle>
                            </v-window-item>

                            <v-window-item value="four">
                                <DeleteArticle></DeleteArticle>
                            </v-window-item>

                            <v-window-item value="five">
                                <UpdateArticle></UpdateArticle>
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn block variant="outlined" color="error" @click="logout">Logout</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</v-main>
</template>

<script>

    import { useLocalStorage } from "@vueuse/core"
    import UserService from "./services/User.service";

    import UserList from "./components/users/userList.vue"
    import CreateUser from "./components/users/addUser.vue"
    import CreateArticle from "./components/articles/createArticle.vue"
    import DeleteArticle from "./components/articles/deleteArticle.vue"
    import UpdateArticle from "./components/articles/updateArticle.vue";

    export default {
        data: () => ({
            tab: null,
            error: ""
        }),
        methods: {
            logout() {
                let authToken = useLocalStorage("token");

                UserService.logout(authToken.value)
                    .then(response => {
                        authToken.value = null;
                        window.location.assign("http://localhost:5173")
                    })
                    .catch(error => { this.error = error })
            }
        },
        components: {
            UserList,
            CreateUser,
            CreateArticle,
            DeleteArticle,
            UpdateArticle
        }
    }
</script>