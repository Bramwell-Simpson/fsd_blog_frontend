<template>
    <el-container>
        <el-header>
            <el-menu mode="horizontal">
                <el-menu-item><el-link :underline="false"><router-link to="/">Home</router-link></el-link></el-menu-item>
                <el-menu-item><router-link to="/login"><el-link :underline="false">Login</el-link></router-link></el-menu-item>
            </el-menu>
        </el-header>
        <router-view/>
    </el-container>
</template>
