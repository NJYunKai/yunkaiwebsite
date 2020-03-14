import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index';

Vue.use(Router)

export default new Router({
  //mode: 'history',
  mode: 'hash',
  base: '/dist/',
  linkActiveClass: "active",
  routes: [{
      path: '/',
      name: 'index',
      meta: {
        index: '1'
      },
      component: index
    },
    //首页路由引用定义
    {
      path: '/homepage',
      name: 'homepage',
      meta: {
        requireAuth: true
      },
      component: () => import('../pages/index.vue'),
    },
    //产品案例方案页面
    {
      path: '/productcase',
      name: 'productcase',
      meta: {
        requireAuth: true
      },
      component: () => import('../pages/productcase/productcase.vue'),
      children: [{
          path: '/productcase/xlab',
          name: 'xlab',
          component: () => import('../pages/productcase/xlab/xlab.vue')
        },
        {
          path: '/productcase/gongshang',
          name: '/gongshang',
          component: () => import('../pages/productcase/gongshang/gongshang.vue')
        },
        {
          path: '/productcase/dianji',
          name: '/dianji',
          component: () => import('../pages/productcase/dianji/dianji.vue')
        },
        {
          path: '/productcase/gongmao',
          name: '/gongmao',
          component: () => import('../pages/productcase/gongmao/gongmao.vue')
        },
        {
          path: '/productcase/nongye',
          name: '/nongye',
          component: () => import('../pages/productcase/nongye/nongye.vue')
        },
        {
          path: '/productcase/shuili',
          name: '/shuili',
          component: () => import('../pages/productcase/shuili/shuili.vue')
        },
        {
          path: '/productcase/xinxi',
          name: '/xinxi',
          component: () => import('../pages/productcase/xinxi/xinxi.vue')
        },
      ]
    },
    //协同育人路由引用定义
    {
      path: '/cooperative-education',
      name: 'cooperative-education',
      meta: {
        requireAuth: true
      },
      component: () => import('../pages/cooperative-education/cooperative-education.vue'),
    },
    //关于我们路由引用定义
    {
      path: '/aboutus',
      name: 'aboutus',
      meta: {
        requireAuth: true
      },
      component: () => import('../pages/aboutus/aboutus.vue'),
    },
    //一带一路路由引用定义
    {
      path: '/beltroad',
      name: 'beltroad',
      meta: {
        requireAuth: true
      },
      component: () => import('../pages/beltroad/beltroad'),
    },
    //公司新闻路由引用定义
    {
      path: '/companynews',
      name: 'companynews',
      meta: {
        requireAuth: true
      },
      component: () => import('../pages/companynews/companynews.vue'),
      children: [{
          path: '/companynews/dynamicnews',
          name: 'dynamicnews',
          component: () => import('../pages/companynews/dynamicnews/dynamicnews.vue')
        },
        {
          path: '/companynews/fieldnews',
          name: 'fieldnews',
          component: () => import('../pages/companynews/fieldnews/fieldnews.vue')
        },
        {
          path: '/companynews/1+x',
          name: '1+x',
          component: () => import('../pages/companynews/dynamicnews/1+x.vue')
        },
        {
          path: '/companynews/belt-road',
          name: 'belt-road',
          component: () => import('../pages/companynews/dynamicnews/belt-road.vue')
        },
        {
          path: '/companynews/iotmeeting',
          name: 'iotmeeting',
          component: () => import('../pages/companynews/dynamicnews/iotmeeting.vue')
        },
        {
          path: '/companynews/jingmao-lab',
          name: 'jingmao-lab',
          component: () => import('../pages/companynews/dynamicnews/jingmao-lab')
        }
      ]
    },
    //专业服务路由引用定义
    {
      path: '/services',
      name: 'services',
      meta: {
        requireAuth: true
      },
      component: () => import('../pages/services/services.vue'),
      children: [{
          path: '/services/apprenticeships',
          name: 'apprenticeships',
          component: () => import('../pages/services/apprenticeships/apprenticeships.vue')
        },
        {
          path: '/services/labsolutions_iot',
          name: 'labsolutions_iot',
          component: () => import('../pages/services/labsolutions/labsolution_iot.vue')
        },
        {
          path: '/services/apprenticeships',
          name: 'apprenticeships',
          component: () => import('../pages/services/apprenticeships/apprenticeships.vue')
        },
        {
          path: '/services/labsolutions_iot',
          name: 'labsolutions_iot',
          component: () => import('../pages/services/labsolutions/labsolution_iot.vue')
        },
        {
          path: '/services/labsolutions_blockchain',
          name: 'labsolutions_blockchain',
          component: () => import('../pages/services/labsolutions/labsolutions_blockchain.vue')
        },
        {
          path: '/services/labsolutions_ai',
          name: 'labsolutions_ai',
          component: () => import('../pages/services/labsolutions/labsolutions_ai.vue')
        },
        {
          path: '/services/labsolutions_coldchain',
          name: 'labsolutions_coldchain',
          component: () => import('../pages/services/labsolutions/labsolutions_coldchain.vue')
        },
        {
          path: '/services/labsolutions_bigdata',
          name: 'labsolutions_bigdata',
          component: () => import('../pages/services/labsolutions/labsolutions_bigdata.vue')
        },
        {
          path: '/services/product/:type',
          name: 'product',
          component: () => import('../pages/services/product/product.vue')
        },
        {
          path: '/services/productdetails/:id',
          name: 'productdetails',
          component: () => import('../pages/services/product/productdetails.vue')
        },
        {
          path: '/services/teachingresource',
          name: 'teachingresource',
          component: () => import('../pages/services/teachingresource/teachingresource.vue')
        }
      ]
    },
    //专业建设路由引用定义
    {
      path: '/construction',
      name: 'construction',
      meta: {
        requireAuth: true
      },
      component: () => import('../pages/construction/construction.vue'),
      children: [{
          path: '/construction/construction_iot',
          name: 'construction_iot',
          component: () => import('../pages/construction/computer/construction_iot.vue')
        },
        {
          path: '/construction/construction_bd',
          name: 'construction_bd',
          component: () => import('../pages/construction/computer/construction_bd.vue')
        },
        {
          path: '/construction/construction_cc',
          name: 'construction_cc',
          component: () => import('../pages/construction/computer/construction_cc.vue')
        },
        {
          path: '/construction/construction_ai',
          name: 'construction_ai',
          component: () => import('../pages/construction/computer/construction_ai.vue')
        },
        {
          path: '/construction/construction_ce',
          name: 'construction_ce',
          component: () => import('../pages/construction/computer/construction_ce.vue')
        },
        {
          path: '/construction/construction_bc',
          name: 'construction_bc',
          component: () => import('../pages/construction/computer/construction_bc.vue')
        },
        {
          path: '/construction/mechanical_ei',
          name: 'mechanical_ei',
          component: () => import('../pages/construction/mechanical/mechanical_ei.vue')
        },
        {
          path: '/construction/mechanical_ir',
          name: 'mechanical_ir',
          component: () => import('../pages/construction/mechanical/mechanical_ir.vue')
        },
        {
          path: '/construction/mechanical_ict',
          name: 'mechanical_ict',
          component: () => import('../pages/construction/mechanical/mechanical_ict.vue')
        },
        {
          path: '/construction/other_de',
          name: 'other_de',
          component: () => import('../pages/construction/other/other_de.vue')
        },
        {
          path: '/construction/electronic_de',
          name: 'electronic_de',
          component: () => import('../pages/construction/electronic/electronic_de.vue')
        }
      ]
    }
  ]
})
