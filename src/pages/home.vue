<template>
    <div class="home">
        <div class="menu-item" v-for="item in menuList">
            <div class="menu-item-title">
                <i :class="['menu-item-icon', renderIcon(item.name)]"></i>
                {{item.name}}
            </div>
            <el-divider></el-divider>
            <div class="menu-item-detail">
                <el-link class="menu-item-detail-each" :underline="false" v-for="(each, index) in item.children" :href="`#${each.address}`">
                    {{each.name}}
                    <el-divider direction="vertical" v-if="index % 3 !== 2 && index !== item.children.length - 1 "></el-divider>
                </el-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {renderIcon} from "../utils/utils";

    export default {
        data() {
            return {
                renderIcon,
                menuList: [],
            }
        },
        methods: {

        },
        created() {
            const menus = this.$store.state.menus;
            console.log(menus);
            const filterMenus = menus.filter(e => e.name !== '首页');
            this.menuList = filterMenus;
        }
    }

</script>

<style lang="less">
    .home {
        width: 1200px;
        margin: 20px auto;
        padding-top: 10px;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;

        .menu-item {
            width: 380px;
            height: 210px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 3px #ddd;

            padding: 15px 20px;

            &:nth-of-type(n+4) {
                margin-top: 20px;
            }

            .menu-item-title {
                display: flex;
                align-items: center;
                font-size: 18px;

                .menu-item-icon {
                    width: 42px;
                    height: 42px;
                    background-color: #cfe5e2;
                    border-radius: 3px;
                    color: #01B197;
                    font-size: 28px;
                    line-height: 42px;
                    text-align: center;
                    margin-right: 15px;
                }
            }

            .el-divider--horizontal {
                margin: 15px 0;
            }

            .menu-item-detail {
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                justify-content: center;
                padding-top: 5px;

                .menu-item-detail-each {
                    margin-bottom: 10px;
                    font-size: 15px;
                }

                .el-link.el-link--default:hover {
                    color: #01B197;
                }

                .el-divider--vertical {
                    width: 2px;
                }
            }
        }
    }
</style>