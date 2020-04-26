<template>
  <footer class="imprint">
    <nuxt-link exact to="/legal">
      Impressum
    </nuxt-link>
  </footer>
</template>

<style lang="scss">
.imprint {
  @include font-scale-1;
  $footer-height: $scale5 + $scale1;
  height: $footer-height;
  text-align: center;
  margin-top: -1 * $footer-height;
  width: 100vw;
  z-index: 100;
}
</style>
