export function renderIcon(val) {
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
}