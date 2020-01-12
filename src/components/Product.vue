<template>
    <div>
      <ProductImage :url="img_url"></ProductImage>
      <ProductAction v-bind="product"></ProductAction>
    </div>
</template>

<script>
import ProductImage from "@/components/ProductImage.vue";
import ProductAction from "@/components/ProductAction.vue";
export default {
  name: "Product",
  data() {
    return {
      product: {}
    };
  },
  components: {
    ProductImage,
    ProductAction
  },
  props: {
    id: Number,
    name: String,
    price: Number,
    discount: Number,
    category: String,
    img_url: String
  },
  mounted() {
    this.product = {
      id: this.id,
      name: this.name,
      price: this.price,
      discount: this.discount,
      category: this.category,
      img_url: this.img_url,
    };
  }
};
</script>
