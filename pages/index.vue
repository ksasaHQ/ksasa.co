<template>
  <div class="index">
    <section class="full-height">
      <v-lazy-image
        :src="require('~/assets/images/hero.jpg').src"
        sizes="100vw"
        :srcset="require('~/assets/images/hero.jpg').srcSet"
      />
    </section>
    <section class="full-height">
      <nuxt-link exact to="/Prusa-Enclosure-Raspberry-Pi">Prusa × Pi</nuxt-link>
    </section>
  </div>
</template>

<style lang="scss">
.index {
  a {
    @include font-scale4;
  }
}
</style>
