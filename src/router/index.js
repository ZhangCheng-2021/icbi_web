import Vue from "vue";
import VueRouter from "vue-router";
import {
  message
} from '../utils/resetMessage.js'
import axios from 'axios'
Vue.use(VueRouter);
const routes = [{
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/",
    redirect: {
      name: "login",
    },
  },
  {
    path: "/index",
    redirect: {
      name: "home",
    },
    component: () => import("../layout/index.vue"),
    children: [{
        path: "/home",
        name: "home",
        component: () => import("../views/home.vue"),
      },
      {
        path: "/good",
        name: "good",
        component: () => import("../views/good-management/index.vue"),
        meta: [{
          name: "商品管理",
        }, {
          name: "商品",
        }],
      },
      {
        path: "/user",
        name: "user",
        component: () => import("../views/user-management/index.vue"),
        meta: [{
          name: "用户管理",
        }, {
          name: "用户"
        }],
      },
      {
        path: "/role",
        name: "role",
        component: () => import("../views/role-management/index.vue"),
        meta: [{
          name: "角色管理"
        }, {
          name: "角色"
        }],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//路由前置拦截器
// router.beforeEach((to, from, next) => {
//   let token = window.localStorage.getItem("token");
//   if (to.name == "login") {
//     if (token) {
//       router.push("/index");
//     } else {
//       next();
//     }
//   } else {
//     if (!token) {
//       router.push("/login");
//       message.error("登入已过期，请重新登入！");
//     } else {
//       next();
//     }
//   }
// });

//全局请求头
axios.interceptors.request.use(
  config => {
    config.baseURL = process.env.VUE_APP_BASE_URL
    config.headers.common["access_token"] = JSON.parse(localStorage.getItem("access_token"));
    // config.headers.common['content-type'] = 'application/json;charset=UTF-8'
    // config.headers.common["Accept"] = "*/*";
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//401、500响应错误拦截器
axios.interceptors.response.use(
  res => {
    if (res.status == 200) {
      if (res.data.statusCode == 200) {
        return res.data
      } else {
        message.error(res.data.responseDescription)
      }
    }
  },
  error => {
    if (error.response.status == 401) {
      message.error("登入已过期，请重新登入！");
      window.localStorage.clear()
      router.push("/");
    } else if (error.response.status == 500) {
      message.error("网络异常，请稍后重试")
    }
    return Promise.reject(error);
  }
);

export default router;