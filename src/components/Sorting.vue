<template>
    <div :class="$style.sortWrapper">
        <span>Sort By</span>
        <base-button @click.native="SORT_BY_PRICE_HIGH_LOW()" :class="$style.sortButton">
          Price -- High Low
        </base-button>
        <base-button @click.native="SORT_BY_PRICE_LOW_HIGH()" :class="$style.sortButton">
          Price -- Low High
        </base-button>
        <base-button @click.native="SORT_BY_DISCOUNT()" :class="$style.sortButton">
          Discount
        </base-button>
    </div>
</template>
<script>
    import { mapActions } from "vuex";
    export default {
        methods: {
            ...mapActions(["SORT_BY_PRICE_HIGH_LOW", "SORT_BY_PRICE_LOW_HIGH", "SORT_BY_DISCOUNT"])
        }
    }
</script>
<style lang="scss" module>
    .sortWrapper {
        margin: 30px 30px 0 30px;
        align-items: center;
    }
    .sortWrapper * {
        margin-right: 10px;
    }
    .sortButton {
        background: none!important;
        font-weight: bold;
        color: $discountedPriceText;
        &:hover {
            &:before, &:after {
            opacity: 0!important;
        }
        }
    }
</style>