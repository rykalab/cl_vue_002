<template>
  <div>
      Dodawanie kategorii
        <br/>
        <br/>
      <form @submit.prevent="save()">
        <input v-model="category.name" type="text">
        <br/>
        <br/>
        <button type="submit">Zapisz</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
      return  {
        category: {
          id: '',
          name: ''
        }
      }
    },
  methods:{
    save (){
      if(this.category.id){
      axios.put(`categories/${this.category.id}`, this.category)
        .then(result => {
          //console.log(result.data)
          this.$router.push({
            path: '/categories'
          })
        })
      }else {
      axios.post('categories', this.category)
        .then(result => {
          //console.log(result.data)
          this.$router.push({
            path: '/categories'
          })
        })
      }

    },
    getCategory(id){
      axios(`categories/${id}/edit`)
        .then(result => this.category = result.data)
    }
  },
  created(){
    if(this.$route.params.id){
      this.getCategory(this.$route.params.id)
    }
   // console.log(this.$route.params.id)
  }
}
</script>

<style>
</style>
