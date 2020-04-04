<template>
  <footer>
    <nuxt-link exact to="/legal">
      Impressum
    </nuxt-link>
  </footer>
</template>

<style scoped>
footer {
  font-size: 0.7rem;
  --footer-height: 5rem;
  height: var(--footer-height);
  text-align: center;
  margin-top: calc(-1 * var(--footer-height));
  width: 100vw;
  z-index: 100;
}
</style>
