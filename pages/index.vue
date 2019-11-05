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
      <img src="~/assets/images/zwoelf/zwoelf-front-hero.jpg" />
    </section>
    <section>
      <p>
        Viel Platz zum Kritzeln. Die Wochentage übereinander. Und noch mehr
        tolle Sachen über diesen Kalender. Am Wochende sollte man sich nicht so
        viel vornehmen. Deshalb sind sie durchgestrichen.
      </p>
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
    </section>
    <section>
      <ZwoelfWeek />
    </section>
    <snipcart />
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
  background-image: url('~assets/images/zwoelf/zwoelf-dots.svg?data');
  background-size: 0.6rem;
  img {
    background: white;
    object-fit: contain;
    max-height: 90vh;
    max-width: 95vw;
  }
  p {
    background: white;
  }
}
p.landing {
  font-size: 3rem;
  line-height: 3.25rem;
  display: inline;
  background: white;
  padding: 0.25rem 0;
}
</style>
