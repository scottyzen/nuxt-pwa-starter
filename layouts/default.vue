<template>
  <div>
    <Nuxt />
    <nav class="fixed bottom-0 z-10 grid w-full grid-cols-4 text-center">
      <nuxt-link to="/" class="py-4 text-sm bg-gray-100">HOME</nuxt-link>
      <nuxt-link to="/stock" class="py-4 text-sm bg-gray-100">STOCK</nuxt-link>
      <nuxt-link to="/orders" class="py-4 text-sm bg-gray-100">ORDERS</nuxt-link>
      <nuxt-link to="/account" class="py-4 text-sm bg-gray-100">ACCOUNT</nuxt-link>
    </nav>
  </div>
</template>

<style lang="postcss">
html {
  position: fixed;
  height: 100%;
  overflow: hidden;
  width: 100%;
}

body {
  @apply bg-pink-900 w-full h-screen;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
</style>
