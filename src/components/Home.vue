<template>
  <div>
    <h1>hello</h1>
    <div class="container">
      <div class="product" v-for="product in products" :key="product.id">
        {{ product.name }},{{ product.id }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: mapGetters(["products"]),
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  height: 100hv;
  display: flex;
  grid-gap: 1rem;
}
.product {
  width: 10%;
  padding: 1rem;
  text-align: center;
  position: relative;
  background-color: black;
  color: white;
  border-radius: 10px;
}
</style>