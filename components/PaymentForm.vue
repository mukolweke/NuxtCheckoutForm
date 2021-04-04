<template>
  <div class="flex flex-col space-y-4 mt-7">
    <div>
      <label for="name" class="block mb-2 text-sm font-semibold text-gray-500">Name on Card</label>
      <input
        type="text"
        id="name"
        maxlength="20"
        v-model="paymentForm.name"
        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md outline-none"
      />
    </div>

    <div>
      <label for="cardnumber" class="block mb-2 text-sm font-semibold text-gray-500">Card Number</label>
      <input
        type="text"
        id="cardnumber"
        v-model="paymentForm.number"
        @input="validateNumber"
        v-cleave="{ creditCard: true, onCreditCardTypeChanged : cardChanged}"
        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md outline-none"
      />
    </div>

    <div class="grid grid-cols-2 gap-4 space-x-2">
      <div>
        <label
          for="expirationdate"
          class="block mb-2 text-sm font-semibold text-gray-500"
        >Expiration (mm/yy)</label>
        <input
          id="expirationdate"
          type="text"
          v-model="paymentForm.expiry_date"
          v-cleave="{date: true, datePattern: ['m', 'y']}"
          class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md outline-none"
        />
      </div>
      <div>
        <label
          for="securitycode"
          class="block mb-2 text-sm font-semibold text-gray-500"
        >Security Code</label>
        <input
          id="securitycode"
          type="number"
          v-model="paymentForm.security_code"
          v-cleave="{numeral: true, numeralPositiveOnly: true, numeralIntegerScale: 3}"
          class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md outline-none"
        />
      </div>
    </div>

    <div class="clearfix"></div>
    
    <div>
      <button
        class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >Pay $20.52</button>
    </div>
  </div>
</template>

<script>
import Cleave from "cleave.js";
import { debounce } from "debounce";

export default {
  data() {
    return {
      invalidCard: false,
    };
  },
  methods: {
    cardChanged(type) {
      this.paymentForm.cardType = type;
    },

    fixDouble(number) {
      return number > 9 ? number - 9 : number;
    },

    validateNumber: debounce(function () {
      let n = this.paymentForm.number;
      const digits = n.toString().split("").map(Number);
      const sum = digits
        .map((digit, index) =>
          index % 2 === digits.length % 2 ? this.fixDouble(digit * 2) : digits
        )
        .reduce((acc, digit) => (acc += digit), 0);
      console.log(sum % 10 === 0, n);
      this.invalidCard = sum % 10 == 0;
    }, 500),
  },

  computed: {
    paymentForm: {
      get() {
        return this.$store.state.payment.cardInformation;
      },
      set(value) {
        this.$store.commit("payment/updateCardInfo", value);
      },
    },
  },

  directives: {
    cleave: {
      inserted: (el, binding) => {
        el.cleave = new Cleave(el, binding.value || {});
      },
      update: (el) => {
        const event = new Event("input", { bubbles: true });
        setTimeout(function () {
          el.value = el.cleave.properties.result;
          el.dispatchEvent(event);
        }, 100);
      },
    },
  },
};
</script>

<style>
</style>