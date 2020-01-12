<template>
  <div :class="[$style.image, imageClass]">
    <img :src="imageUrl" :alt="msg" @error="loadPlaceHolder" />
  </div>
</template>

<script>
import { _imgPath } from "@/utils/image-path";
export default {
  name: "ProductImage",
  data() {
    return {
      placeHolder: "no-book-cover.gif",
      imageUrl: null
    };
  },
  props: {
    url: {
      type: String,
      default: null
    },
    msg: {
      type: String,
      default: ""
    },
    imageClass: {
      type: String,
      default: ""
    }
  },
  methods: {
    loadPlaceHolder() {
      this.imageUrl = _imgPath(this.placeHolder);
    }
  },
  mounted() {
    this.imageUrl = this.url;
  }
};
</script>
<style lang="scss" module>
.image {
  text-align: center;
  background: $baseGray;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
