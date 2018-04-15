<template>
  <div>
      Dodawanie artykulu
        <br/>
        <br/>
      <form @submit.prevent="save()">
        Wpisz tytuł
        <br/>
        <input v-model="article.title" type="text">
        <br/>
        Wpisz body
        <br/>
        <textarea v-model="article.body"> </textarea>
        <br/>
        Wybierz kategorie
        <br/>
        <br/>
        <select v-model="article.category_id">
          <option v-for="category in categories" :value="category.id">
            {{category.name}}
          </option>
        </select>
        <br/>
        <br/>
        <button type="submit">Zapisz</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data () {
      return  {
        categories:[],
        article: {
          id: '',
          title: '',
          body: '',
          category_id: ''
        }
      }
    },
  methods:{
    save (){
      if(this.article.id){
      axios.put(`articles/${this.article.id}`, this.article)
        .then(result => {
          //console.log(result.data)
          this.$router.push({
            path: '/articles'
          })
        })
      }else {
      axios.post('articles', this.article)
        .then(result => {
          //console.log(result.data)
          this.$router.push({
            path: '/articles'
          })
        })
      }
    },
    getArticle(id){
      axios(`articles/${id}/edit`)
        .then(result => this.article = result.data)
    },
    getCategories() {
      axios('categories')
        .then(result => {
          this.categories = result.data
          //console.log(this.categories)
        })
    },
  },
  created(){
    if(this.$route.params.id){
      this.getArticle(this.$route.params.id)
    }
    this.getCategories()
   // console.log(this.$route.params.id)
  }
}
</script>

<style>
</style>
