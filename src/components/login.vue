<template>
    <div class="">
        <h3>Login</h3>
        <form @submit.prevent="handleSubmit">
            <label for="email">Email: </label>
            <input type="email" name="email" v-model="email"/>
            <div v-show="(submitted && !email)">Email is required</div>

            <br><br>

            <label for="password">Password: </label>
            <input type="password" name="password" v-model="password"/>
            <div v-show="(submitted && !password)">Password is required</div>

            <br><br>

            <button>Login</button>

            <p>Email: {{email}}</p>
            <p>Passsword: {{password}}</p>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            handleSubmit(e) {
                this.submitted = true
                const {email, password} = this

                if(!(email && password)) {
                    return;
                }

                alert("Login button clicked!")
            }
        }
    }
</script>