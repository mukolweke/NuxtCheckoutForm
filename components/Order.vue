<template>
  <div class="flex space-x-4 mb-4">
    <img class="block w-20 h-20 rounded bg-gray-600" src="https://via.placeholder.com/150" alt />

    <div class="flex flex-col">
      <div class="flex justify-between space-x-6 mb-4">
        <h6 class="text-base font-semibold text-gray-800 flex-grow">{{ order.name }}</h6>

        <button @click="removeOrder(order.id)">
          <svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
            />
          </svg>
        </button>
      </div>

      <div class="flex items-center space-x-2 text-gray-800">
        <div
          class="h-4 w-4 block bg-gray-200 flex items-center justify-center p-3 rounded cursor-pointer"
          @click="reduceQuantity(order.id)"
        >
          <span>-</span>
        </div>
        <span>{{ order.quantity }}</span>
        <div
          class="h-4 w-4 block bg-gray-200 flex items-center justify-center p-3 rounded cursor-pointer"
          @click="addQuantity(order.id)"
        >
          <span>+</span>
        </div>
        <span class="text-sm">x</span>
        <span>${{ order.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },

  methods: {
    addQuantity(orderId) {
      this.$store.commit("orders/addQuantity", orderId);
    },

    reduceQuantity(orderId) {
      this.$store.commit("orders/reduceQuantity", orderId);
    },

    removeOrder(orderId) {
      this.$store.commit("orders/removeOrder", orderId);
    },
  },
};
</script>

<style>
</style>