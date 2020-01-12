<template>
  <div>
    <template v-for="(item) in cartItems">
      <div :key="item.id" :class="$style.productList">
        <span :class="[$style.cardItem, $style.name]">
        <ProductImage
          :url="item.img_url"
          :imageClass="$style.image"
        >
          </ProductImage>
          <div :class="$style.detailsWrapper">
            <span>
              <span :class="$style.itemName">{{ item.name }}</span>

            <div :class="$style.priceRow">
              <span :class="$style.discountedPrice">Rs. {{ item.price - item.price * (item.discount / 100) }}</span>
              <span :class="$style.price">
                <i>{{ item.price }}</i>
              </span>
              <span :class="$style.discountText">{{item.discount}}% off</span>
            </div>
          </span>
          </div>
      </span>

      <div :class="[$style.cardItem, $style.quantity]">
        <base-button
          :buttonClass="$style.button"
          @click.native="DECREASE_COUNT(item.id)"
          ><fa-icon icon="minus"></fa-icon
        ></base-button>

        <span>{{ item.count }}</span>

        <base-button
          :buttonClass="$style.button"
          @click.native="INCREASE_COUNT(item.id)"
          ><fa-icon icon="plus"></fa-icon
        ></base-button>
      </div>
      <div>
        <base-button  
        :buttonClass="$style.buttonRemove" 
        @click.native="REMOVE_ITEM(item.id)">
          Remove
      </base-button>
      </div>
      </div>
    </template>
  </div>
</template>

<script>
import ProductImage from "@/components/ProductImage.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CartItemList",
  components: {
    ProductImage
  },
  computed: {
    ...mapGetters({ cartItems: "cartItems" }),
    discountedPrice() {
      return this.price - this.price * (this.discount / 100);
    }
  },
  methods: {
    ...mapActions(["INCREASE_COUNT", "DECREASE_COUNT", "REMOVE_ITEM"])
  }
};
</script>

<style lang="scss" module>
.itemName {
  color: #8c8c8c;
}
.discountText {
  color: $discountText;
  text-align: right;
}

  
  .priceRow {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
      display: inline;
    }
  }
.detailsWrapper {
  display: inline-block;
}
.priceDetails {
  display: block;
}
.productList {
  display: grid;
  background: #fff;
  margin: 20px 10px;
  grid-template-columns: 3fr 1fr 1fr;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid #ddd;
  .cardHearder {
    font-weight: bold;
    padding: 10px 15px;
    margin-bottom: 10px;
  }
  .cardItem {
    align-self: stretch;
    margin-bottom: 10px;
    padding: 0 15px;
    vertical-align: middle;
  }
  .quantity {
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 18px;
  }
  .price {
    align-items: center;
    display: flex;
  }
  .name {
    font-weight: bold;
  }
}
.image {
  display: inline-block;
  max-width: 50px !important;
  vertical-align: middle;
  margin-right: 20px;
  img {
    max-height: 50px !important;
  }
}
.button {
  margin: 0 10px !important;
  background: none;
  border: 1px solid #ccc;
  border-radius: 50px;
}
.buttonRemove {
  font-weight: bold;
  background: none;
  &:before {
    background: none;
    transition: none;
    animation: none;
    transform: none;
  }
  &:after {
    background: none;
    transition: none;
    animation: none;
    transform: none;
  }
}
</style>
