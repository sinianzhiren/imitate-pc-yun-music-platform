import Vue from 'vue'
import Router from 'vue-router'
import admin from '../components/admin.vue'
import index from '../components/index.vue'
import suggest from '../components/menu/suggest.vue'
import Ranking from '../components/admin/ranking.vue'
import List from '../components/admin/songList.vue'
import radio from '../components/admin/station.vue'
import Singer from '../components/admin/singer.vue'
import Mv from '../components/admin/mv.vue'
import Album from '../components/admin/album.vue'
import findList from '../components/admin/findList.vue'
import Rank from '../components/menu/ranking.vue'
import SingList from '../components/menu/songList.vue'
import Station from '../components/menu/station.vue'
import singers from '../components/menu/singer.vue'
import newsCd from '../components/menu/newsCd.vue'
import rankChild1 from '../components/menu/rankingChild/child1.vue'
import songLists from '../components/menu/songListChild/songLists.vue'
import stationChild from '../components/menu/stationChild/stationChild.vue'
import findStation from '../components/menu/stationChild/findStation.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index,
      children:[
        {
          path: '/',
          component: suggest
        },
        {
          path: '/ranking/',
          component: Rank,
          children: [
            {
              path: '',
              component: rankChild1

            },
            {
              path: 'get',
              component: rankChild1
            }
          ]
        },
        {
          path: '/singList',
          component: SingList,
          children: [
            {
              path: '',
              component: songLists
            }
          ]
        },
        {
          path: '/station/',
          component: Station,
          children: [
            {
              path: '',
              component: stationChild
            },
            {
              path: 'find',
              component: findStation
            }
          ]
        },
        {
          path: '/singer',
          component: singers
        },
        {
          path: '/newsCd',
          component: newsCd
        }

      ]
    },
    {
      path: '/admin',
      component: admin,
      children:[
        {
          path: '',
          component: Ranking
        },
        {
          path: 'list',
          component: List
        },
        {
          path:  'station',
          component: radio
        },
        {
          path: 'singer',
          component: Singer
        },
        {
          path: 'mv',
          component: Mv
        },
        {
          path: 'album',
          component: Album
        },
        {
          path: '/find',
          component: findList
        }
      ]
    },

  ]
})
//.localhost:8080/admin  管理员页面
