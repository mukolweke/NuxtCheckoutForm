<template>
  <div class="my-4 w-full">
    <label for="cardnumber" class="block mb-2 text-sm font-semibold text-gray-500 relative">
      Gift Card/ Discount Code
      <span
        class="absolute right-0 text-xs underline cursor-pointer text-blue-500"
        @click="toggleCodesDialog"
      >?</span>
      <span
        class="absolute mt-2 right-0 block h-auto w-auto z-10 shadow-lg rounded-md bg-blue-500 text-white p-4 cursor-pointer"
        v-if="showSampleCodes"
      >
        <ul class="text-xs space-y-2">
          <li
            class="hover:bg-blue-400 p-1 rounded"
            v-for="code in discountCodes"
            :key="code.id"
            @click="selectDiscountCode(code.id)"
          >{{ code.code }}</li>
        </ul>
      </span>
    </label>
    <div class="grid grid-cols-3 gap-4">
      <input
        type="text"
        id="cardnumber"
        inputmode="numeric"
        v-model="discountCode"
        class="w-full col-span-2 px-3 py-2 bg-gray-200 border-none rounded-md outline-none"
      />
      <button
        class="w-full text-blue-500 bg-none border border-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="applyCode"
      >Apply</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSampleCodes: false,
      discountCodes: this.$store.state.coupon.discountCodes,
      discountCodeObj: {},
      discountCode: "",
    };
  },

  methods: {
    toggleCodesDialog() {
      this.showSampleCodes = !this.showSampleCodes;
    },
    selectDiscountCode(codeId) {
      this.discountCodeObj = this.discountCodes[
        this.discountCodes.findIndex((obj) => obj.id == codeId)
      ];
      this.discountCode = this.discountCodeObj.code;
      this.toggleCodesDialog();
    },
    applyCode() {
      this.$store.commit(
        "coupon/selectedCoupon",
        this.discountCode !== "" ? this.discountCodeObj : {}
      );
    },
  },
};
</script>