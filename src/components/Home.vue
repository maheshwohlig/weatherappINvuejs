<template>
  <div>
    <div>
      <v-toolbar>
        <v-text-field
          hide-details
          prepend-icon="mdi-magnify"
          single-line
          id="data"
          v-model="seach"
        ></v-text-field>
        <v-btn v-on:click="add" color="red">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </v-toolbar>
    </div>
    <div class="container" justify-center>
      <div v-for="product in whether" :key="product">
        <!-- <h1>{{ product.name }},{{ product.sys.country }}</h1>

        <h3>{{ Math.round(product.main.temp) - 273 }}</h3>
        <p>{{ Math.round(product.main.temp_min) - 273 }}</p>

        <p>{{ Math.round(product.main.temp_max) - 273 }}</p> -->
        {{ product }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      seach: "mumbai",
      whether: [],
    };
  },

  computed: mapGetters(["products"]),
  methods: {
    ...mapActions(["fetchdata"]),
    add() {
      if (this.whether.length === 0) {
        this.whether.push(this.seach);
      }

      let getValue = this.whether.includes(this.seach);

      // let getValue = this.whether.every((value) => {
      //   console.log("<<<<<<" + value);
      //   console.log("this.seach" + this.seach);
      //   if (value !== this.seach) {
      //     // return this.seach;
      //     return true;

      //     // console.log("this.seach......" + this.seach);
      //   }
      // });
      console.log("getValue..." + getValue);
      if (getValue === false) {
        this.whether.push(this.seach);
      }
      console.log("<<<<<<<" + this.seach);
      this.fetchdata(this.whether);
    },
  },

  created() {
    this.fetchdata(this.seach);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  height: 30%;
  position: absolute;
  display: flex;
  background-color: yellow;
  align-content: space-around;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
