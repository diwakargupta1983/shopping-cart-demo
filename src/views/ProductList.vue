<template>
  <div>
    <Card :class="$style.info" v-if="isLoading"
      ><Spinner size="lg" color="blue"
    /></Card>

    <Card :class="$style.loadingError" v-if="!isLoading && isError"
      >We are unable to fetch data please try again later</Card
    >
    <div :class="$style.wrap">
      <div :class="$style.leftCol"><Filters /></div>
      <div>
        <Sorting />
        <div :class="$style.grid" v-if="!isLoading && !isError">
          <Product
            v-for="item in productList"
            v-bind="item"
            :key="item.id"
          ></Product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";
import Filters from "@/components/Filters";
import Sorting from "@/components/Sorting";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductList",
  components: {
    Product,
    Filters,
    Sorting
  },
  computed: {
    ...mapGetters({
      productList: "productList",
      isError: "isError",
      isLoading: "isLoading"
    })
  },
  methods: {
    ...mapActions(["getData"])
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss" module>
.wrap {
  display: grid;
  grid-template-columns: 1fr 4fr;
}
.leftCol {
  grid-gap: 30px;
  display: grid;
  margin: 30px 0 30px 30px;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  align-items: center;
  margin: 30px;
  @media screen and (max-width: $breakpoint-lg) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: $breakpoint-md) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}
.info {
  border: 1px solid $marineBlue;
  margin: 30px;
  text-align: center;
}
.loadingError {
  color: $red;
  border: 1px solid $red;
  background-color: $pink;
  margin: 30px;
}
</style>
