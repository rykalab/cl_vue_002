<template>
  <div>
    <router-link to="/">Hello</router-link>
    <router-link to="/categories">Categories</router-link>
    <router-link to="/articles">Articles</router-link>
        <hr>
    <router-view></router-view>

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
    }
  },
  created (){
    this.getCategories()
  }
}
</script>

<style>
</style>
