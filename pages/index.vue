<template>
  <div class="checkout-form min-h-screen bg-pink-400 flex items-center justify-center font-sans">
    <div class="flex items-center justify-between space-x-10 p-8">
      <PaymentForm />

      <!-- <div class="h-full rounded-xl shadow-xl">
        <p>Order Summary</p>
      </div>-->
    </div>
  </div>
</template>

<script>
import PaymentForm from "../components/PaymentForm";

export default {
  components: { PaymentForm },

  data() {
    return {
      something: "wow",
    };
  },

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

