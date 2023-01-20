<template>
    <v-main>
        <v-container class="fill-height">
            <v-row  >
                <v-col >
                    <!--<h1 class="text-h1 text-center"></h1>-->
                    <v-card class="mx-auto" width="400">
                        <v-card-title class="text-center" >
                            Login
                        </v-card-title>

                        <v-card-text>
                            <v-form @submit.prevent="handleSubmit">

                                <v-text-field :rules="[required]" v-model="email" label="Email" variant="outlined"></v-text-field>

                                <v-text-field :rules="[required]" v-model="password" label="Password" variant="outlined"></v-text-field>

                                <v-btn block @click="handleSubmit" variant="outlined">Login</v-btn>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </v-main>
</template>

<script>

    import UserService from '../services/User.service'

    export default {
        data() {
            return {
                email: "",
                password: "",
                submitted: false,
                error: []
            } 
        },
        methods: {
            handleSubmit(e) {

                this.submitted = true
                const {email, password} = this

                if(!(email && password)) {
                    return;
                }

                UserService.authUser(email, password)
                .then(user => {

                    if(user.session_token != "") {
                        localStorage.setItem("token", user.session_token)
                        window.location.assign("http://localhost:5173/")
                    }
                })
                .catch(error => this.error = error)
            },
            required (v) {
                return !!v || 'Field is required'
            }
        }
    }

</script>