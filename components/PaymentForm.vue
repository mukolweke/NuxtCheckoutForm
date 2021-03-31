<template>
  <div class="flex flex-col space-y-4 mt-7">
    <div>
      <label for="name" class="block mb-2 text-sm font-semibold text-gray-500">Name on Card</label>
      <input
        type="text"
        id="name"
        maxlength="20"
        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md outline-none"
      />
    </div>

    <div>
      <label for="cardnumber" class="block mb-2 text-sm font-semibold text-gray-500">Card Number</label>
      <input
        type="text"
        id="cardnumber"
        inputmode="numeric"
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
          pattern="[0-9]*"
          inputmode="numeric"
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
          type="text"
          pattern="[0-9]*"
          inputmode="numeric"
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
export default {};
</script>

<style>
</style>