<template>
  <div class="my-4 w-full">
    <label
      for="cardnumber"
      class="block mb-2 text-sm font-semibold text-gray-500"
    >Gift Card/ Discount Code</label>
    <div class="grid grid-cols-3 gap-4">
      <input
        type="text"
        id="cardnumber"
        inputmode="numeric"
        class="w-full col-span-2 px-3 py-2 bg-gray-200 border-none rounded-md outline-none"
      />
      <button
        class="w-full text-blue-500 bg-none border border-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >Apply</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>