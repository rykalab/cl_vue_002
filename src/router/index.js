import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Categories from '@/components/categories/Categories'
import Category from '@/components/categories/Category'
import Articles from '@/components/articles/Articles'
import Article from '@/components/articles/Article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/categories',
      component: Categories
    },
    {
      path: '/articles',
      component: Articles
    },
    {
      path: '/category/create',
      component: Category
    },
    {
      path: '/article/create',
      component: Article
    },
    {
      path: '/category/edit/:id',
      component: Category
    },
    {
      path: '/article/edit/:id',
      component: Article
    }
  ]
})
