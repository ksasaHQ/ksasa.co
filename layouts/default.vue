<template>
  <div id="layout_default">
    <masthead />
    <nuxt />
    <imprint />
    <script src="https://cdn.snipcart.com/themes/v3.0.7/default/snipcart.js"></script>
  </div>
</template>

<script type="text/javascript">
import Imprint from '~/components/Imprint.vue'
import Masthead from '~/components/Masthead.vue'
export default {
  components: {
    Imprint,
    Masthead
  }
}
</script>
<style lang="scss">
body {
  @media (pointer: fine) {
    // crude way to detect non-mobile browsers, but not mission-critical
    // snap-type: proximity is janky on mobile, will evaluate later
    scroll-snap-type: y proximity;
    height: 100vh;
    overflow-y: auto;
    width: 100vw;
  }
}

@mixin link-decoration {
  text-decoration: solid underline;
  text-decoration-thickness: 0.15rem;
  text-underline-position: under;
  text-decoration-skip: none;
}

a {
  color: var(--main-text-colour);
  @include link-decoration;

  @media (hover: hover) {
    text-decoration: none;
    &:hover {
      @include link-decoration;
    }
  }
}

h2 {
  font-weight: 600;
}

section.full-height {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 3rem 0;

  img {
    background: white;
    bottom: 0;
    left: 0;
    max-height: 70vh;
    max-width: 80vw;
    margin: auto;
    object-fit: contain;
    right: 0;
    top: 0;
    z-index: 0;
    &.v-lazy-image {
      opacity: 0;
      transform: translate3d(0, 25%, 0);
      transition: opacity 2s, transform 1s;
    }
    &.v-lazy-image-loaded {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
}

.full-height {
  min-height: 100vh;
}
.page-enter-active {
  animation: upwardsIn 0.5s ease-out both;
}

.page-leave-active {
  animation: upwardsOut 0.1s ease-in both;
}
</style>
