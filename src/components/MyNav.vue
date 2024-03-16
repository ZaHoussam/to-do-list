<template lang="pug">
ul.list-unstyled.d-flex.justify-content-center.align-items-center.p-2.me-auto.ms-auto 
    li.p-2(v-for="(route,index) in routes" :key=index )
        router-link.text-capitalize.position-relative.d-block(:to="route.path" v-text="route.name") 
</template>
<script setup>
import { useRouter } from "vue-router";
const routes = useRouter().options.routes;
</script>
<style lang="scss" scoped>
ul {
  width: 800px;
  background-color: #5e4dcd;
  a {
    color: #f6f6f6;
    text-decoration: none;
    font-size: 20px;
    letter-spacing: 1px;
    &::before {
      content: "";
      position: absolute;
      width: 0;
      height: 1px;
      border-radius: 10px;
      left: 0;
      bottom: 0;
      background-color: #f6f6f6;
      transition: 0.4s;
    }
    &:hover::before {
      width: 100%;
    }
  }
}
</style>
