<template>
  <div class="hello">
    <router-link to="/HelloWorld/abc" tag="button" active-class="active">abc</router-link>
    <router-link to="/HelloWorld/new" tag="button" active-class="active">新闻</router-link>
    <button @click="numClick" active-class="active">num</button>

    <br />
    <br />
    <!-- <router-link
      :to="{path:'/HelloWorld/login',query:{name:'123',age:'123'}}"
      tag="button"
      active-class="active"
    >login</router-link>-->
    <button @click="loginClick" active-class="active">login</button>
    <button @click="profileClick">档案</button>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Vue from "vue";
import ViewUI from "view-design";
import { Button, Carousel, CarouselItem } from "view-design";

Vue.component("Carousel", Carousel);
Vue.component("CarouselItem", CarouselItem);

Vue.use(ViewUI);
import "view-design/dist/styles/iview.css";

export default {
  name: "HelloWorld",
  created() {
    console.log("hello created")
  },
  
  data() {
    return {
      numId: 1
    };
  },
  methods: {
    mounted: function() {
      this.createcode();
    },
    createcode() {
      this.$router.push({
        path: "/HelloWorld/profile",
        query: {
          name: "1",
          age: "22"
        }
      });
    },
    loginClick() {
      this.$router.push({
        path: "/HelloWorld/login",
        query: {
          name: "1",
          age: "2"
        }
      });
      console.log(this.$route.query);
    },
    profileClick() {
      this.$router.push({
        path: "/HelloWorld/profile",
        query: {
          name: "1",
          age: "22"
        }
      });
    },
    numClick() {
      numId: 1, this.$router.push("/HelloWorld/num/" + this.numId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="" scope>
.active-class {
  color: bisque;
}
</style>
