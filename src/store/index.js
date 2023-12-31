import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      username: '李超群',
      userId: 190084
    },
    menus: [
      {name: '首页', address: '/home'},
      {name: '员工管理', address: '/employee', children: [
          {name: '人员信息管理', address: '/employee/personInfo'},
          {name: '岗位变动情况', address: '/employee/postChange'},
          {name: '借工信息管理', address: '/employee/loanWork'},
          {name: '专家人才信息', address: '/employee/professionals'},
          {name: '执业资格管理', address: '/employee/qualifications'},
        ]
      },
      // {name: '员工管理', address: '/employee', children: [
      //     {name: '人员信息管理', address: '/employee/personInfo'},
      //     {name: '岗位变动情况', address: '/employee/postChange'},
      //     {name: '借工信息管理', address: '/employee/loanWork'},
      //     {name: '专家人才信息', address: '/employee/professionals'},
      //     {name: '执业资格管理', address: '/employee/qualifications'},
      //   ]
      // },
      // {name: '员工管理', address: '/employee', children: [
      //     {name: '人员信息管理', address: '/employee/personInfo'},
      //     {name: '岗位变动情况', address: '/employee/postChange'},
      //     {name: '借工信息管理', address: '/employee/loanWork'},
      //     {name: '专家人才信息', address: '/employee/professionals'},
      //     {name: '执业资格管理', address: '/employee/qualifications'},
      //   ]
      // },
      // {name: '员工管理', address: '/employee', children: [
      //     {name: '人员信息管理', address: '/employee/personInfo'},
      //     {name: '岗位变动情况', address: '/employee/postChange'},
      //     {name: '借工信息管理', address: '/employee/loanWork'},
      //     {name: '专家人才信息', address: '/employee/professionals'},
      //     {name: '执业资格管理', address: '/employee/qualifications'},
      //   ]
      // },
      // {name: '员工管理', address: '/employee', children: [
      //     {name: '人员信息管理', address: '/employee/personInfo'},
      //     {name: '岗位变动情况', address: '/employee/postChange'},
      //     {name: '借工信息管理', address: '/employee/loanWork'},
      //     {name: '专家人才信息', address: '/employee/professionals'},
      //     {name: '执业资格管理', address: '/employee/qualifications'},
      //   ]
      // },
      // {name: '员工管理', address: '/employee', children: [
      //     {name: '人员信息管理', address: '/employee/personInfo'},
      //     {name: '岗位变动情况', address: '/employee/postChange'},
      //     {name: '借工信息管理', address: '/employee/loanWork'},
      //     {name: '专家人才信息', address: '/employee/professionals'},
      //     {name: '执业资格管理', address: '/employee/qualifications'},
      //   ]
      // },
      // {name: '员工管理', address: '/employee', children: [
      //     {name: '人员信息管理', address: '/employee/personInfo'},
      //     {name: '岗位变动情况', address: '/employee/postChange'},
      //     {name: '借工信息管理', address: '/employee/loanWork'},
      //     {name: '专家人才信息', address: '/employee/professionals'},
      //     {name: '执业资格管理', address: '/employee/qualifications'},
      //   ]
      // },
      // {name: '员工管理', address: '/employee', children: [
      //     {name: '人员信息管理', address: '/employee/personInfo'},
      //     {name: '岗位变动情况', address: '/employee/postChange'},
      //     {name: '借工信息管理', address: '/employee/loanWork'},
      //     {name: '专家人才信息', address: '/employee/professionals'},
      //     {name: '执业资格管理', address: '/employee/qualifications'},
      //   ]
      // },
      // {name: '员工管理', address: '/employee', children: [
      //     {name: '人员信息管理', address: '/employee/personInfo'},
      //     {name: '岗位变动情况', address: '/employee/postChange'},
      //     {name: '借工信息管理', address: '/employee/loanWork'},
      //     {name: '专家人才信息', address: '/employee/professionals'},
      //     {name: '执业资格管理', address: '/employee/qualifications'},
      //   ]
      // },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
