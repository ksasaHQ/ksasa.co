<template>
  <div>
    <section>
      <img src="~/assets/images/hero.jpg" />
    </section>
    <section>
      <a href="mailto:hello@ksasa.co">Say hi!</a>
    </section>
  </div>
</template>

<style scoped lang="scss">
section {
  align-items: center;
  display: flex;
  justify-content: center;

  a {
    font-size: 2rem;
  }

  img,
  video {
    bottom: 0;
    left: 0;
    max-height: 70vh;
    max-width: 80vw;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
  }
}
</style>
