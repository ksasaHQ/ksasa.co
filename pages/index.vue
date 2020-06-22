<template>
  <div id="index">
    <section class="full-height">
      <video
        autoplay
        controls
        loop
        src="~/assets/videos/Matternet-Access-Point/Matternet.mp4"
        type="video/mp4"
      />
    </section>
    <section class="full-height">
      <nuxt-link exact to="/Prusa-Enclosure-Raspberry-Pi">Prusa × Pi</nuxt-link>
    </section>
  </div>
</template>

<style lang="scss">
#index {
  section {
    a {
      @include font-scale4;
    }
  }
}
</style>
