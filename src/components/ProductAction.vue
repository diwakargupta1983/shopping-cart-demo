<template>
  <div :class="$style.productInfo">
    <div :class="$style.productName">{{ name }}</div>
    <div :class="$style.priceRow">
      <span :class="$style.discountedPrice">Rs. {{ discountedPrice }}</span>
      <span :class="$style.price">
        <i>{{ price }}</i>
      </span>
      <span :class="$style.discountText">{{this.discount}}% off</span>
    </div>
    <div :class="$style.addToCart">
        <base-button
          @click.native="ADD_TO_CART(id)"
          :buttonClass="$style.button"
        >
          Add to cart
        </base-button>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProductAction",
  props: {
    id: Number,
    name: String,
    price: Number,
    discount: Number
  },
  computed: {
    discountedPrice() {
      return this.price - this.price * (this.discount / 100);
    }
  },
  methods: {
    ...mapActions(["ADD_TO_CART"])
  }
};
</script>

<style lang="scss" module>
.discountText {
  color: $discountText;
  text-align: right;
}
.productInfo {
  border-radius: 0 0 10px 10px;
  padding: 5px 0 8px;
  .productName {
    font-weight: bold;
    color: #8c8c8c;
  }
  .priceRow {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr 1fr;
    align-items: center;
    .price {
      text-decoration: line-through;
      color: $priceText;
      font-weight: bold;
      i {
        color: $priceText;
        font-style: normal;
        font-weight: normal;
      }
    }
    .discountedPrice {
      font-weight: bold;
      color: $discountedPriceText;
    }
  }
  .addToCart {
      text-align: center;
      .button {
        font-size: 12px !important;
        font-weight: bold;
      }
    }
}
</style>
