<template>
  <div id="app">
    <!-- <input v-model="input" type="text">
    <br/>
    {{input}} -->
    <br/>
    <router-link to="/category/create">Add category</router-link>
    <router-view></router-view>
    <br/>
        <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tr v-for="category in categories">
        <td>{{category.id}}</td>
        <td>{{category.name}}</td>
        <td><router-link :to="`/category/edit/${category.id}`"><button>Edit</button></router-link></td>
        <td><button @click="deleteCategory(category.id)">Delete</button></td>
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
          categories: [],
      }
    },
  methods:{
    getCategories () {
      axios('categories')
        .then(result => {
          this.categories = result.data
          //console.log(this.categories)
        })
    },
    deleteCategory(id) {
      axios.delete(`categories/${id}`)
        .then(result => {
          this.getCategories()
        })
    }
  },
  created (){
    this.getCategories()
  }
}
</script>

<style>
</style>
