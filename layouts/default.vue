<template>
  <div class="flex flex-col min-h-screen">
    <Nuxt class="flex-1" />
    <ul
      class="
        grid grid-cols-4
        sticky
        bottom-0
        w-full
        justify-between
        text-center
      "
    >
      <div class="bg-gray-100 text-sm p-2">HOME</div>
      <div class="bg-gray-100 text-sm p-2">STOCK</div>
      <div class="bg-gray-100 text-sm p-2">ORDERS</div>
      <div class="bg-gray-100 text-sm p-2">MY ACCOUNT</div>
    </ul>
  </div>
</template>
