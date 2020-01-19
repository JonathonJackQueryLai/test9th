<template>
  <div name="user">
    
    <span>我是user:{{demo}}</span>
    
  </div>

</template>

<script>

export default {
  name: "",
  props: [""],
  data() {
    return {
      numId:1
    };
  },

  components: {},

  computed: {
      demo(){
       return  this.$route.params.Id   
      }
      
  },

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='' scoped>
.active{
  color: blueviolet
}
</style>