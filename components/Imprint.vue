<template>
  <footer>
    <nuxt-link exact to="/legal">
      Legal
    </nuxt-link>
  </footer>
</template>

<style scoped>
footer {
  font-size: 0.7rem;
  --footer-height: 5rem;
  height: var(--footer-height);
  text-align: center;
  width: 100vw;
  z-index: 100;
}
</style>
