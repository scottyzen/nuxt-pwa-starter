<template>
  <div class="min-h-screen pb-8 bg-gray-500">
    <Nuxt class="min-h-screen pb-16" />
    <ul
      class="fixed bottom-0 grid justify-between w-full grid-cols-4 text-center"
    >
      <div class="py-4 text-sm bg-gray-100">HOME</div>
      <div class="py-4 text-sm bg-gray-100">STOCK</div>
      <div class="py-4 text-sm bg-gray-100">ORDERS</div>
      <div class="py-4 text-sm bg-gray-100">ACCOUNT</div>
    </ul>
  </div>
</template>

<style>
html {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

body {
  height: 100%;
  padding: 0;
  overflow: auto;
  margin: 0;
  -webkit-overflow-scrolling: touch;
}
</style>
