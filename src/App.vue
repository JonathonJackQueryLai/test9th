<template>
  <div id="app">
    <router-link to="/HelloWorld" tag="Button" active-class="active">shouye</router-link>
    <router-link to="/result" tag="h1" active-class="active">result</router-link>
    <router-link :to="'/user/' +Id " tag="h1" active-class="active">USRE1</router-link>
    <router-link :to="'/h3015/' +h3015Id " tag="span" active-class="active">h3015</router-link>
    <router-link :to="{path:'/other',query:{name:'123',age:'123'}}"  tag="span" active-class="active">other</router-link>
    
    <button @click="aboutClick">关于</button>
    <!-- <button @click="userClick" >usr</button> -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      Id: "1",
      h3015Id: "www.baidu.com"
    };
  },
  methods: {
    aboutClick() {
      this.$router.push("/about");
    },
    userClick() {
      this.$router.push("/user");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.ivu-carousel-dots-inside {
  display: block;
  position: relative;
  bottom: 3px;
}
.active {
  color: #f00;
}
</style>
