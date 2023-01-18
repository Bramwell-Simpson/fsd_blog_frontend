<template>
    <v-table fixed-header height="300px">
        <thead>
            <tr>
                <th class="text-left">User ID</th>
 
                <th class="text-left">First Name</th>

                <th class="text-left">Last Name</th>

                <th class="text-left">Email</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.user_id">
                <td>{{ user.user_id }}</td>
                <td>{{ user.first_name }}</td>
                <td>{{ user.last_name }}</td>
                <td>{{ user.email }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
    import UserService from '../services/User.service';
    import { useLocalStorage } from '@vueuse/core';

    export default {
        data() {
            return {
                users: [],
                error: []
            }
        },
        mounted() {

            let authToken = useLocalStorage("token");

            UserService.getAllUsers(authToken.value)
            .then(users => {
                this.users = users
            })
            .catch(error => this.error = error); 
        }
    }
</script>