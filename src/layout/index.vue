<template>
    <el-container>
        <el-aside width="asideWidth">
            <Menu></Menu>
        </el-aside>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-main>
                <Breadcrumb></Breadcrumb>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Breadcrumb from "../components/Breadcrumb"
    import Menu from "./menu"
    import Header from "./header"
    import eventBus from '../utils/event-bus.js'
    export default {
        components: {
            Menu,
            Header,
            Breadcrumb
        },
        data() {
            return {
                isShow: false
            }
        },
        computed: {
            asideWidth() {
                return this.isShow ? "auto" : "200px";
            },
        },
        mounted() {
            eventBus.$on('sendVal', data => {
                this.isShow = data
            })
        },
        methods: {},
    }
</script>

<style lang='scss'>
    .el-container {
        height: 100%;
    }

    .el-header {
        background-color: lightblue;
        color: #333;
        height: 80px;
    }

    .el-aside {
        background-color: #ffffff;
        min-height: 100%;
        overflow-x: hidden;
    }

    .el-main {
        background-color: #f4f4f4;
        padding-top: 0;
    }
</style>