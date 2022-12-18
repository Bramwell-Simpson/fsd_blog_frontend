<template>
    <el-main>
        <el-row align="middle" justify="center">
            <h1>{{welcome_message}}</h1>
        </el-row>
        <el-row align="middle" justify="center">
            <h3>Yeah this is a thing</h3>
        </el-row>
        
    </el-main>

</template>

<script>

    export default {
        data() {
            return {
                welcome_message: "Welcome to the blog!"
            }
        }
    }
</script>
