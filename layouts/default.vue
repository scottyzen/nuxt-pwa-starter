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
  position: fixed;
  height: 100%;
  overflow: hidden;
}

body {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
</style>
