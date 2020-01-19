<template>
  <div class="new">
    <router-link to="/helloworld/new/new1" tag="button">new1</router-link>
    
    <h1>{{news}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
        news:'nihao ',
        
      };
    },

    components: {},

    computed: {
      getNewsId(){
        return this.$route.params.news
      }
    },

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='' scoped>

</style>


