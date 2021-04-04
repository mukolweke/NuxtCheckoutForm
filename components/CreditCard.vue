<template>
  <div
    class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110"
  >
    <img class="relative object-cover w-full h-full rounded-xl" src="~/assets/images/card_bg.svg" />

    <div class="w-full px-8 absolute top-8">
      <div class="flex justify-between">
        <div class>
          <p class="font-light">Name</p>
          <p class="font-semibold tracking-widest">{{ cardInfo.name }}</p>
        </div>
        <img class="h-14" :src="imgSrc" />
      </div>
      <div class="pt-1">
        <p class="font-light">Card Number</p>
        <p class="font-medium tracking-more-wider">{{ cardInfo.number }}</p>
      </div>
      <div class="pt-6 pr-6">
        <div class="flex justify-between">
          <div class>
            <p class="font-light text-xs">Expiry Date</p>
            <p class="font-medium tracking-wider text-sm">{{ cardInfo.expiry_date }}</p>
          </div>

          <div class>
            <p class="font-light text-xs">CVC/CVV</p>
            <p
              class="font-bold text-center tracking-more-wider text-sm"
            >{{ cardInfo.security_code }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardInfo: this.$store.state.payment.cardInformation,
    };
  },

  computed: {
    imgSrc() {
      let images = require.context("../assets/images", false, /\.png$/);
      return this.cardInfo.cardType == "unknown"
        ? ""
        : images("./" + this.cardInfo.cardType + ".png");
    },
  },
};
</script>

<style>
</style>