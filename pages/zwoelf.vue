<template>
  <div id="Zwoelf">
    <section class="landing chequered">
      <img
        class="image-frame"
        src="~/assets/images/zwoelf/zwoelf-front-hero.jpg"
      />
      <span class="landing">Der perfekte <br />Wand&shy;kalender<br /></span>
      <span class="landing">
        (finden wir)
      </span>
    </section>
    <section class="grey centered">
      <p>
        Alle anderen fand ich doof, also hab ich mir einen eigenen entworfen.
        Das ist er.
      </p>
      <p>
        Viel Platz zum Kritzeln. Die Wochentage übereinander. Und noch mehr
        tolle Sachen über diesen Kalender. Am Wochende sollte man sich nicht so
        viel vornehmen. Deshalb sind sie durchgestrichen.
      </p>
    </section>
    <section>
      <p>So sieht eine Woche aus:</p>
      <ZwoelfWeek />
      <p>Viel Platz für Pläne</p>
    </section>
    <section class="grey flex-row">
      <div flex-1>
        <p>
          Warum es besser ist, dass die Wochen&shy;tage über&shy;ein&shy;ander
          sind.
        </p>
        <p>
          Another paragraph.
        </p>
      </div>
      <img class="pop-left flex-2" src="~assets/images/zwoelf/zwoelf2020.svg" />
    </section>
    <section>
      <p>Tech specs</p>
    </section>
    <section class="centered grey">
      <img
        class="centered"
        src="~/assets/images/zwoelf/zwoelf-front-hero.jpg"
      />
      <p>Make it your own</p>
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
      ksasa &hearts; Open Source: Runterladen, selberdrucken
      <nuxt-link exact to="/about">About</nuxt-link>
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
#Zwoelf {
  // background-image: url('~assets/images/zwoelf/zwoelf-dots.svg?data');
  background-origin: border-box;
  background-size: 0.5rem;
  z-index: -1;

  // &::before {
  //   background: white;
  //   content: '';
  //   position: fixed;
  //   width: 5rem;
  //   height: 1.5rem;
  //   margin-top: 1.5rem;
  //   margin-left: 8.2rem;
  //   z-index: 0;
  // }
  * {
    z-index: 1;
  }
  .grey {
    background: rgb(245, 245, 245);
  }
  .pop-left {
    object-fit: cover;
    object-position: left;
    right: 0;
    width: 50vw;
    height: 100vh;
  }
  .image-frame {
    max-width: 100vw;
    object-fit: cover;
    min-height: 15rem;
    background: white;
    padding: 0.5rem 0;
  }
  span.landing {
    font-size: 2rem;
    line-height: 2.5rem;
    background: white;
    padding: 0.25rem 0.5rem 0.5rem 0.75rem;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    // box-shadow: 0 -2rem 0 yellow inset;

    &::first-line {
      background: blue !important;
    }
  }
  .calendar {
    height: 100vh;
    object-fit: cover;
  }
  svg {
    fill: red;
    #dots {
      stroke-width: 2;
      stroke-dasharray: 5;
    }
  }
}
</style>
