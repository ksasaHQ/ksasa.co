<template>
  <div>
    <section class="full-height">
      <img :srcset="require('~/assets/images/hero.jpg').srcSet" />
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
