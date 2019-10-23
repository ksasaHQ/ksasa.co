<template>
  <div id="index">
    <section>
      <p class="landing">
        Das ist der perfekte Wandkalender
      </p>
      <p class="landing">
        (finden wir)
      </p>
    </section>
    <section>
      <img src="~/static/images/zwoelf/zwoelf-front-hero.JPG" />
    </section>
    <section>
      <p>
        Viel Platz zum Kritzeln. Die Wochentage übereinander. Und noch mehr
        tolle Sachen über diesen Kalender. Am Wochende sollte man sich nicht so
        viel vornehmen. Deshalb sind sie durchgestrichen.
      </p>
      <p>
        Kaufen
      </p>
    </section>
    <section>
      <img src="~/static/images/zwoelf/zwoelf-detail.JPG" />
    </section>
  </div>
</template>

<style lang="scss">
section {
  height: 100vh;
  background: yellow;
  img {
    object-fit: contain;
    max-height: 90vh;
    max-width: 95vw;
  }
}
p.landing {
  font-size: 3rem;
  line-height: 3rem;
}
</style>
