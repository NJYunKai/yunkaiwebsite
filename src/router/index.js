import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index';

import about from '@/pages/about/about';
import introduce from '@/pages/about/introduce';
import honor from '@/pages/about/honor';
import culture from '@/pages/about/culture';
import partner from '@/pages/about/partner';

import news from '@/pages/news/news';
import newsIndex from '@/pages/news/newsIndex';
import media from '@/pages/news/media';
import topic from '@/pages/news/topic';
import industry from '@/pages/news/industry';

import financial from '@/pages/financial/financial';
import credit from '@/pages/financial/credit';
import iot from '@/pages/financial/iot';
import banking from '@/pages/financial/banking';

import government from '@/pages/government/government';
import benevolent from '@/pages/government/benevolent';
import supervise from '@/pages/government/supervise';
import system from '@/pages/government/system';

import offers from '@/pages/offers';
import contact from '@/pages/contact';



Vue.use(Router)

export default new Router({
  mode: 'history',
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
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        index: '2'
      },
      children: [{
        path: 'introduce',
        name: 'introduce',
        meta: {
          index: '2-1'
        },
        component: introduce,
      }, {
        path: 'honor',
        name: 'honor',
        meta: {
          index: '2-2'
        },
        component: honor,
      }, {
        path: 'culture',
        name: 'culture',
        meta: {
          index: '2-3'
        },
        component: culture,
      }, {
        path: 'partner',
        name: 'partner',
        meta: {
          index: '2-4'
        },
        component: partner,
      }]
    },
    {
      path: '/news',
      name: 'news',
      meta: {
        index: '3'
      },
      component: news,
      children: [{
        path: 'index',
        name: 'index',
        meta: {
          index: '3-1'
        },
        component: newsIndex,
      }, {
        path: 'index/:id',
        name: 'index',
        meta: {
          index: '3-1'
        },
        component: newsIndex,
      }, {
        path: 'media',
        name: 'media',
        meta: {
          index: '3-2'
        },
        component: media,
      }, {
        path: 'topic',
        name: 'topic',
        meta: {
          index: '3-3'
        },
        component: topic,
      }, {
        path: 'industry',
        name: 'industry',
        meta: {
          index: '3-4'
        },
        component: industry,
      }]
    }, {
      path: '/financial',
      name: 'financial',
      component: financial,
      meta: {
        index: '4'
      },
      children: [{
        path: 'credit',
        name: 'credit',
        meta: {
          index: '4-1'
        },
        component: credit,
      }, {
        path: 'iot',
        name: 'iot',
        meta: {
          index: '4-2'
        },
        component: iot,
      }, {
        path: 'banking',
        name: 'banking',
        meta: {
          index: '4-3'
        },
        component: banking,
      }]
    },
    {
      path: '/government',
      name: 'government',
      component: government,
      meta: {
        index: '5'
      },
      children: [{
        path: 'benevolent',
        name: 'benevolent',
        meta: {
          index: '5-1'
        },
        component: benevolent,
      }, {
        path: 'supervise',
        name: 'supervise',
        meta: {
          index: '5-2'
        },
        component: supervise,
      }, {
        path: 'system',
        name: 'system',
        meta: {
          index: '4-3'
        },
        component: system,
      }]
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
    //产品中心方案页面
    {
      path: '/productcenter/xx',
      name: 'xx',
      meta: {
        requireAuth: true
      },
      component:() => import('../pages/productcenter/xx.vue'),
    },
    //协同育人路由引用定义
    {
      path: '/cooperative-education',
      name: 'cooperative-education',
      meta: {
        requireAuth: true
      },
      component: () => import('../pages/cooperative-education/cooperative-education'),
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
      component: () =>import('../pages/companynews/companynews.vue'),
      children: [{
        path: '/companynews/dynamicnews',
        name: 'dynamicnews' ,
        component: () => import('../pages/companynews/dynamicnews/dynamicnews.vue')
      },
      {
        path: '/companynews/fieldnews',
        name: 'fieldnews' ,
        component: () => import('../pages/companynews/fieldnews/fieldnews.vue')
      },
      {
        path: '/companynews/1+x',
        name: '1+x' ,
        component: () => import('../pages/companynews/dynamicnews/1+x.vue')
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
          path: '/services/product_intelligence_manufacture',
          name: 'product_intelligence_manufacture',
          component: () => import('../pages/services/product/product_intelligence_manufacture.vue')
        },
        {
          path: '/services/product_industrial_iot',
          name: 'product_industrial_iot',
          component: () => import('../pages/services/product/product_industrial_iot.vue')
        },
        {
          path: '/services/product_iot_teaching',
          name: 'product_iot_teaching',
          component: () => import('../pages/services/product/product_iot_teaching.vue')
          },
          {
            path: '/services/product_iot_innovative',
            name: 'product_iot_innovative',
            component: () => import('../pages/services/product/product_iot_innovative.vue')
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
      },
    {
      path: '/offers',
      name: 'offers',
      meta: {
        index: '6'
      },
      component: offers
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        index: '7'
      },
      component: contact
    },
  ]
})
