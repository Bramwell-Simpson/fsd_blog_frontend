<template>
    <v-card variant="outlined" class="mx-auto" width="400">
        <v-card-title class="text-center">
            Add a user
        </v-card-title>
    
        <v-card-text>
            <v-form @submit.prevent="addUser">
                
                <v-text-field :rules="[rules.required]" v-model="fname" label="First Name" variant="outlined"></v-text-field>

                <v-text-field :rules="[rules.required]" v-model="lname" label="Last name" variant="outlined"></v-text-field>

                <v-text-field :rules="[rules.required, rules.email]" v-model="email" label="Email" variant="outlined"></v-text-field>
    
                <v-text-field :rules="[rules.required, rules.password, rules.length(8)]" type="password" v-model="password" label="Password" variant="outlined"></v-text-field>
    
                <v-btn block @click="addUser" variant="outlined">Create User</v-btn>
            </v-form>
        </v-card-text>
    </v-card>

    <v-snackbar v-model="snackbar">
        {{ serverResponse }}
    
        <template v-slot:actions>
            <v-btn color="purple" variant="text" @click="snackbar = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>

    import { useLocalStorage } from '@vueuse/core';
    import UserService from '../../services/User.service';

    export default {
        data() {
            return {
                fname: "",
                lname: "",
                email: "",
                password: "",
                snackbar: false,
                serverResponse: "",

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
            addUser()
            {

                let authToken = useLocalStorage("token");

                UserService.addUser(authToken.value, this.fname, this.lname, this.email, this.password)
                .then(serverResponse => {
                    this.serverResponse = "User " + serverResponse.user_id + " has been added!"
                    this.snackbar = true;
                })
                .catch(error => {
                    this.serverResponse = error;
                    this.snackbar = true;
                })
            }
        }
    }
</script>