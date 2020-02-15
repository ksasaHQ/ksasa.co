<template>
  <div>
    <section class="full-height">
      <v-lazy-image
        :src="require('~/assets/images/hero.jpg').src"
        :srcset="require('~/assets/images/hero.jpg').srcSet"
        use-picture
      />
    </section>
    <section class="full-height">
      <a href="mailto:hello@ksasa.co">Say hi!</a>
    </section>
  </div>
</template>

<style scoped lang="scss">
section {
  a {
    font-size: 2rem;
  }
}
</style>
