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
#layout_default > div {
  min-height: calc(100vh - var(--footer-height));

  * {
    z-index: 1;
  }

  & > *:first-child {
    padding-top: 3.5rem; // make space for masthead
  }
}

a {
  color: var(--main-text-colour);
  text-decoration: none;
  &:hover {
    border-bottom: solid var(--main-text-colour) 1px;
    box-shadow: 0 -0.1em 0 var(--main-text-colour) inset;
  }
}

h2 {
  font-weight: 600;
}

section.full-height {
  align-items: center;
  display: flex;
  justify-content: center;

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
