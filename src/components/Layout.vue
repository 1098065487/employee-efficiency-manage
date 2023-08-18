<template>
    <div>
        <div class="all-header">
            <div class="header-name">
                <!--                外包用工效能管理平台-->
            </div>
            <el-dropdown size="small" trigger="click" placement="bottom" @command="handleMenuClick">
                <span class="header-user">
                    欢迎，{{$store.state.userInfo && $store.state.userInfo.username || ''}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item style="width: 80px" command="logout" icon="el-icon-switch-button">&nbsp;退出
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="all-content">
            <div v-if="$store.state.menus && $store.state.menus.length !== 0">
                <el-menu
                    class="custom-menu"
                    mode="horizontal"
                    :default-active="menuSelected"
                    active-text-color="#01B197"
                    text-color="#666"
                    @select="handleSelect"
                >
                    <MenuTree :menu-data="$store.state.menus" :first="true"/>
                </el-menu>
            </div>

            <router-view/>
        </div>
    </div>
</template>

<script>
    import MenuTree from './MenuTree';

    export default {
        components: {
            MenuTree
        },
        data() {
            return {
                menuSelected: ''
            };
        },
        methods: {
            handleMenuClick(val) {
                console.log('退出', val)
            },
            handleSelect(val) {
                console.log(val)
                this.menuSelected = val;
                this.$router.push({path: val})
            }
        },
        created() {
            console.log(this.$route)
            this.menuSelected = this.$route.path;
        }
    }
</script>

<style lang="less">
    .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
        background-color: #cfe5e2;
    }
    .all-content {
        padding-top: 50px;

        .custom-menu {
            padding: 0 50px;
            background-color: #eefcfb;
        }

        .el-submenu__title i {
            color: unset;
        }

        .el-menu-item:hover, .el-submenu__title:hover {
            background-color: #cfe5e2;
        }

        .el-menu-item:focus {
            background-color: transparent;
        }

        .el-menu-item, .el-submenu__title {
            height: 50px;
            line-height: 50px;
        }

        .el-menu--horizontal .el-menu-item.is-active, .el-menu--horizontal .el-submenu.is-active .el-submenu__title {
            border-bottom: 2px solid #409EFF;
        }

        .el-menu--horizontal .el-submenu .el-submenu__icon-arrow {
            position: static;
            vertical-align: middle;
            margin-left: 8px;
            margin-top: -3px;
        }
    }

    .all-header {
        position: fixed;
        width: 100%;
        height: 50px;
        background-color: #01B197;
        padding: 5px 20px 5px 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .header-name {
            font-size: 18px;
            font-family: PingFangSC-Semibold, PingFang SC, sans-serif;
            font-weight: 600;
            color: #FFFFFF;
        }

        .header-user {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC, sans-serif;
            font-weight: 400;
            color: #FFFFFF;

            &:hover {
                cursor: pointer;
            }
        }
    }
</style>