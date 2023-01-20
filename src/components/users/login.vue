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

                                <v-text-field :rules="[rules.required, rules.email]" v-model="email" label="Email" variant="outlined"></v-text-field>

                                <v-text-field type="password" :rules="[rules.required, rules.password, rules.length(8)]" v-model="password" label="Password" variant="outlined"></v-text-field>

                                <v-btn block @click="handleSubmit" variant="outlined">Login</v-btn>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>

        <v-snackbar v-model="snackbar">
            {{ serverResponse }}
        
            <template v-slot:actions>
                <v-btn color="purple" variant="text" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-main>
</template>

<script>

    import UserService from '../../services/User.service'

    export default {
        data() {
            return {
                email: "",
                password: "",
                submitted: false,
                error: [],

                serverResponse: "",
                snackbar: false,

                rules: {
                    email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
                    length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
                    password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
                    'Password must contain an upper case letter, a numeric character, and a special character',
                    required: v => !!v || 'This field is required',
                }
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

                    this.serverResponse = "Logged in successfully!";
                    this.snackbar = true

                    if(user.session_token != "") {
                        localStorage.setItem("token", user.session_token)
                        window.location.assign("http://localhost:5173/")
                    }
                })
                .catch(error => {
                    this.serverResponse = error;
                    this.snackbar = true
                })
            }
        }
    }

</script>