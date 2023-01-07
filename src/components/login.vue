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
                                <!--<label for="email">Email: </label>
                                <input type="email" name="email" v-model="email"/>-->
                                <v-text-field v-model="email" label="Email" variant="outlined"></v-text-field>
                                <div v-show="(submitted && !email)">Email is required</div>

                                <!--<label for="password">Password: </label>
                                <input type="password" name="password" v-model="password"/>-->
                                <v-text-field v-model="password" label="Password" variant="outlined"></v-text-field>
                                <div v-show="(submitted && !password)">Password is required</div>

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

    export default {
        data() {
            return {
                email: "",
                password: "",
                submitted: false
            } 
        },
        methods: {
            handleSubmit(e) {

                this.submitted = true
                const {email, password} = this

                if(!(email && password)) {
                    return;
                }

                localStorage.setItem("login", "logged")

                window.location.replace("http://localhost:5173/")
            }
        }
    }

</script>