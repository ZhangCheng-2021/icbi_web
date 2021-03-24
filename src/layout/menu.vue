<template>
    <el-menu router :default-active="$route.path" class="el-menu-vertical-demo" :collapse="isCollapse">
        <el-menu-item index="/home">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="good-management">
            <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span>商品管理</span>
            </template>
            <el-menu-item index="/good">商品</el-menu-item>
        </el-submenu>
        <el-submenu index="user-management">
            <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>用户管理</span>
            </template>
            <el-menu-item index="/user">用户</el-menu-item>
        </el-submenu>
        <el-submenu index="role-management">
            <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>角色管理</span>
            </template>
            <el-menu-item index="/role">角色</el-menu-item>
        </el-submenu>
        <el-submenu index="info-management">
            <template slot="title">
                <i class="el-icon-info"></i>
                <span>信息管理</span>
            </template>
            <el-menu-item index="/person-info">个人信息</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    import eventBus from '../utils/event-bus.js'
    export default {
        data() {
            return {
                isCollapse: false
            }
        },
        mounted() {
            eventBus.$on('sendVal', data => {
                this.isCollapse = data
            })
        },
    }
</script>

<style lang='scss'>
    .el-menu {
        border: none;
        min-height: 100%;

        span {
            font-size: 14px;
        }
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }
</style>