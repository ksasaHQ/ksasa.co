<template>
  <header>
    <nuxt-link exact to="/">
      <h1 class="title">ksasa</h1>
    </nuxt-link>
  </header>
</template>

<style scoped>
header {
  text-align: center;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
}

h1.title {
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: +0.025em;
  margin-top: 1.5rem;
}
</style>
