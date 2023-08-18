<template>
    <div :style="`display: ${first ? 'flex' : 'block'}`">
        <template v-for="item in menuData">
            <el-submenu v-if="item.children && item.children.length !== 0" :index="item.address">
                <template slot="title">
                    <i :class="['menu-icon', renderIcon(item.name)]"></i>
                    {{item.name}}
                </template>
                <menu-tree :menuData="item.children"></menu-tree>
            </el-submenu>
            <el-menu-item v-else :index="item.address">
                <i :class="['menu-icon', renderIcon(item.name)]"></i>
                {{item.name}}
            </el-menu-item>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            menuData: {
                type: Array,
                default: () =>[]
            },
            first: {
                type: Boolean,
            }
        },
        name: "MenuTree",
        data() {
            return {

            };
        },
        methods: {
            renderIcon(val) {
                switch(val) {
                    case '首页':
                        return 'el-icon-s-home';
                        break;
                    case '员工管理':
                        return 'el-icon-user-solid';
                        break;
                    case '人员信息管理':
                        return 'el-icon-user';
                        break;
                    case '岗位变动情况':
                        return 'el-icon-s-promotion';
                        break;
                    default:
                        return ''
                }
            },
        },
    }
</script>

<style lang="less">
    .menu-icon {
        width: 14px;
        font-size: 14px;
        margin-right: 3px;
    }
</style>