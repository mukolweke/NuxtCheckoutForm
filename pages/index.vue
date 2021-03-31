<template>
  <div class="checkout-form min-h-screen bg-gray-100 flex justify-center font-sans">
    <div class="grid grid-cols-3 gap-4 space-x-4 p-14">
      <div class="bg-white p-8 col-span-2 h-full rounded-xl shadow-xl">
        <p class="text-xl font-extrabold text-gray-700 tracking-tight">Payment Information</p>

        <div class="mt-7">
          <credit-card />

          <payment-form />
        </div>
      </div>

      <div class="bg-white p-8 h-full rounded-xl shadow-xl">
        <div>
          <p class="text-xl font-extrabold text-gray-700 tracking-tight">Order Summary</p>

          <div class="mt-7">
            <order />
            <order />
          </div>
        </div>

        <hr />

        <div>
          <coupon />
        </div>

        <hr />

        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import CreditCard from "../components/CreditCard.vue";
import Order from "../components/Order.vue";
import PaymentForm from "../components/PaymentForm.vue";
import Coupon from "../components/Coupon.vue";

export default {
  components: { CreditCard, PaymentForm, Order, Coupon },

  head() {
    return {
      title: "Checkout Form",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Checkout Form component",
        },
      ],
    };
  },
};
</script>

<style>
.checkout-form {
  font-family: "Montserrat", sans-serif;
}
</style>

