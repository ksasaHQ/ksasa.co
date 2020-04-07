<template>
  <div id="index">
    <section class="full-height">
      <v-lazy-image
        :src="require('~/assets/images/hero.jpg').src"
        sizes="100vw"
        :srcset="require('~/assets/images/hero.jpg').srcSet"
      />
    </section>
    <section class="full-height">
      <a href="mailto:hello@ksasa.co">Say hi!</a>
    </section>
  </div>
</template>

<style lang="scss">
#index {
  section {
    a {
      font-size: 2rem;
    }
  }
}
</style>
