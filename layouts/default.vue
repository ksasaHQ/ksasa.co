<template>
  <div id="layout_default">
    <masthead />
    <nuxt />
    <imprint />
    <script src="https://cdn.snipcart.com/themes/v3.0.5/default/snipcart.js"></script>
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

.centered {
  * {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    position: relative;
  }
}

.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-1 {
  flex-grow: 1;
}
.flex-2 {
  flex-grow: 2;
}
.page-enter-active {
  animation: upwardsIn 0.5s ease-out both;
}

.page-leave-active {
  animation: upwardsOut 0.1s ease-in both;
}
</style>
