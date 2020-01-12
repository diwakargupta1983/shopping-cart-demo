<template>
  <Card :class="$style.card">
    <div :class="$style.total">PRICE DETAILS</div>
    <div :class="$style.disc">
      <span :class="$style.item">Items ({{ cartItems.length }})</span>
      <span :class="$style.semicolon">:</span>
      <span :class="$style.price">Rs. {{ cartTotal }}</span>

      <span :class="$style.item">Discount</span>
      <span :class="$style.semicolon">:</span>
      <span :class="$style.price">Rs. {{ cartTotalDiscount }}</span>
    </div>
    <div :class="$style.amountPay">
      <span>Order Total</span>
      <span :class="$style.semicolon">:</span>
      <span :class="$style.price">Rs. {{ cartTotal - cartTotalDiscount }}</span>
    </div>
  </Card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TotalCart",
  computed: {
    ...mapGetters({
      cartItems: "cartItems",
      cartTotal: "cartTotal",
      cartTotalDiscount: "cartTotalDiscount"
    })
  }
};
</script>

<style lang="scss" module>
.card {
  padding: 0 !important;
  border-radius: 0;
  color: #000;
  margin-top: 20px;
  box-shadow: none;
  border: 1px solid #ddd;
  .total {
    background: #fff;
    border-bottom: 1px solid #ddd;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
    padding: 10px 15px;
  }
  .disc {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    padding: 10px 15px;
    line-height: 30px;
  }
  .amountPay {
    background: #fff;
    border-top: 1px solid #ddd;
    border-radius: 0 0 10px 10px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    padding: 10px 15px;
  }
  .item {
    font-weight: bold;
  }
  .semicolon {
    text-align: center;
    font-weight: bold;
  }
  .price {
    text-align: right;
    color: #000;
  }
}
</style>
