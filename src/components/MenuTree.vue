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
    import {renderIcon} from '../utils/utils';

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
                renderIcon,
            };
        },
        methods: {

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