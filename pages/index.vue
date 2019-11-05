<template>
  <div id="index">
    <section class="landing chequered">
      <span class="landing">
        Das ist der perfekte Wand&shy;kalender
      </span>
      <span class="landing">
        (finden wir)
      </span>
    </section>
    <section class="centered">
      <img src="~/assets/images/zwoelf/zwoelf-front-hero.jpg" />
    </section>
    <section class="chequered centered">
      <p>
        Viel Platz zum Kritzeln. Die Wochentage übereinander. Und noch mehr
        tolle Sachen über diesen Kalender. Am Wochende sollte man sich nicht so
        viel vornehmen. Deshalb sind sie durchgestrichen.
      </p>
    </section>
    <section>
      <ZwoelfWeek />
    </section>
    <button
      class="snipcart-add-item"
      data-item-id="calendar"
      data-item-price="19.99"
      data-item-url="/"
      data-item-description="Wandkalender für das Jahr 2020"
      data-item-image="_nuxt/assets/images/zwoelf/zwoelf-front-hero.jpg"
      data-item-name="Wandkalender 2020"
    >
      Kaufen
    </button>
    <snipcart />
    <section>
      bla
    </section>
  </div>
</template>

<script type="text/javascript">
import Snipcart from '~/components/Snipcart.vue'
import ZwoelfWeek from '~/assets/images/zwoelf/zwoelf-week.svg?inline'
export default {
  components: {
    Snipcart,
    ZwoelfWeek
  }
}
</script>

<style scoped lang="scss">
section {
  min-height: 100vh;
  img {
    background: white;
    object-fit: contain;
    max-height: 90vh;
    max-width: 95vw;
  }
  p {
    // background: white;
  }
}
.chequered {
  background-image: url('~assets/images/zwoelf/zwoelf-dots.svg?data');
  background-origin: border-box;
  background-size: 0.5rem;
}
span.landing {
  font-size: 2.5rem;
  line-height: 2.5rem;
  background: white;
  padding: 0 0.5rem;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
</style>
