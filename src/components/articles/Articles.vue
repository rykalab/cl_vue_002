<template>
  <div id="app">
    <!-- <input v-model="input" type="text">
    <br/>
    {{input}} -->
    <br/>
    <router-link to="/article/create">Add article</router-link>
    <router-view></router-view>
    <br/>
        <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Body</th>
        <th>Category id</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tr v-for="article in articles">
        <td>{{article.id}}</td>
        <td>{{article.title}}</td>
        <td>{{article.body}}</td>
        <td><div v-if="article.category">{{article.category.name}}</div></td>
        <td><router-link :to="`/article/edit/${article.id}`"><button>Edit</button></router-link></td>
        <td><button @click="deleteArticle(article.id)">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
      return  {
          input: '',
          articles: [],
      }
    },
  methods:{
    getArticles () {
      axios('articles')
        .then(result => {
          this.articles = result.data
          //console.log(this.categories)
        })
    },
    deleteArticle(id) {
      axios.delete(`articles/${id}`)
        .then(result => {
          this.getArticles()
        })
    }
  },
  created (){
    this.getArticles()
  }
}
</script>

<style>
</style>
