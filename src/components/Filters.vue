<template>
    <div>
        <h3>Filters</h3>
        {{priceRange[0]}} - {{priceRange[1]}}
        <vue-slider v-model="priceRange" v-bind="options" :tooltip="'none'" />
        <base-button
          @click.native="APPLY_FILTER(priceRange)"
          
        >
          Apply
        </base-button>
    </div>
</template>
<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';
import { mapActions } from "vuex";
export default {
    components: {
        VueSlider
    },
    data() {
        return {
            priceRange: [100, 10000],
            options: {
                min: 100,
                max: 10000
            }
        }
    },
    methods: {
        ...mapActions(["APPLY_FILTER"])
    }
}
</script>
<style lang="scss" module>
    .button {
        font-size: 12px;
    }
</style>