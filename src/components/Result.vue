<template>
     <div class="Result">
         <h1>result</h1>
         <Progress :percent="45" :stroke-width="20" status="active" text-inside  style="width:50%"/>
    </div>
</template>

<script>
import Vue from 'vue';
import ViewUI from 'view-design';
import { Button , Carousel,CarouselItem  } from 'view-design';
Vue.use(ViewUI);
export default {
    data () {
        return {
          
        };
    },
    mounted() {
      
    },
    methods:{
      
    }
}
</script>

<style scoped >
.home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 15;
}

.description-label {
    margin-bottom: 15;
}
</style>

