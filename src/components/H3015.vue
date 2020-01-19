<template>
  <div class="h3015">
    <h2>我是{{some}}</h2>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {},

    computed: {
        some(){
            return this.$route.params.h3015Id
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