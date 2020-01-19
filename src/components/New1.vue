<template>
  <div class="new1">
    <h1>我是{{newsId}}</h1>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      newsId: 1
    };
  },

  components: {},

  computed: {
    data() {
      return this.$route.params.newsId;
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='' scoped>
</style>