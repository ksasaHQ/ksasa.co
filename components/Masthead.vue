<template>
  <header id="header">
    <nuxt-link exact to="/">
      <h1 class="title">ksasa</h1>
    </nuxt-link>
  </header>
</template>

<style lang="scss">
#header {
  text-align: center;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;

  h1.title {
    @include font-scale1;
    display: inline-block;
    font-weight: 600;
    letter-spacing: +0.025em;
    margin-top: $scale1 * 1rem;
    pointer-events: auto;
  }
}
</style>
