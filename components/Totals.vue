<template>
  <div class="my-4 w-full flex flex-col space-y-4">
    <div class="w-full flex items-center justify-between">
      <p>Subtotal</p>
      <p>${{subTotal}}</p>
    </div>

    <div class="w-full flex items-center justify-between">
      <p>Tax</p>
      <p>${{ taxCost }}</p>
    </div>

    <div class="w-full flex items-center justify-between">
      <p>Shipping</p>
      <p>$ {{ shippingCost }}</p>
    </div>

    <div class="w-full flex items-center justify-between" v-if="discountCode.discount">
      <p>Discount</p>
      <p>{{ discountCode.discount }}%</p>
    </div>

    <div class="w-full flex items-center justify-between font-bold">
      <p>Total</p>
      <p>${{ totals }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shippingCost: 0.0,
      taxCost: 1.55,
    };
  },

  computed: {
    orders() {
      return this.$store.state.orders.orders;
    },

    subTotal() {
      return this.orders
        .reduce(function (prev, cur) {
          return prev + cur.quantity * parseFloat(cur.price);
        }, 0)
        .toFixed(2);
    },

    totals() {
      return (this.calcTotal - this.calcDiscount).toFixed(2);
    },

    calcTotal() {
      return parseFloat(this.subTotal) + this.shippingCost + this.taxCost;
    },

    calcDiscount() {
      return this.discountCode.discount
        ? (this.discountCode.discount / 100) * this.calcTotal
        : 0;
    },

    discountCode() {
      return this.$store.state.coupon.discountCode;
    },
  },
};
</script>

<style>
</style>