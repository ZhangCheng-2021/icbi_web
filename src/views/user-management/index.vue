<template>
    <div>
        <el-card>
            <el-button type="primary" icon="el-icon-plus">新增用户</el-button>
            <div class="table">
                <el-table :header-cell-style="{ background: '#FAFAFA', color: '#3E3F40' }" :data="tableData"
                    style="width: 100%" border highlight-current-row @selection-change="handleSelectionChange"
                    @current-change="currentChange" ref="Table">
                    <el-table-column type="selection" width="40">
                    </el-table-column>
                    <el-table-column prop="date" label="日期">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-popconfirm title="这是一段内容确定删除吗？" @confirm='handleDelete(scope.$index, scope.row)'>
                                <el-button type="text" slot="reference" size="mini" @click.stop>删除
                                </el-button>
                            </el-popconfirm>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <el-button @click="add">点击</el-button>
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" :current-page="pageNo"
                    :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="total">
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                total: 100,
                pageNo: 1,
                pageSize: 15,
                list: []
            }
        },
        methods: {
            handleSelectionChange(val) {
                if (val.length > 1) {
                    this.$refs.Table.clearSelection();
                    this.$refs.Table.toggleRowSelection(val.pop());
                } else {
                    this.list = val;
                }
            },
            currentChange(val) {
                this.$refs.Table.toggleRowSelection(val);
            },

            handleCurrentChange(val) {
                console.log(val);
            },

            add() {
                console.log(this.list);
            },
            handleDelete(i, v) {
                console.log(i, v);
            }
        },
    }
</script>

<style scoped lang='scss'>
    .table {
        margin-top: 20px;

        /deep/ .el-table__header-wrapper {
            .el-checkbox {
                display: none
            }
        }
    }


    .pagination {
        text-align: right;
        margin-top: 20px;

    }
</style>