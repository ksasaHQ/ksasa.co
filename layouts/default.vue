<template>
  <div id="layout_default">
    <masthead />
    <nuxt />
    <imprint />
  </div>
</template>

<script type="text/javascript">
import Imprint from '~/components/Imprint.vue'
import Masthead from '~/components/Masthead.vue'
export default {
  components: {
    Imprint,
    Masthead
  },
  data() {
    return {
      windowWidth: -1,
      windowHeight: -1
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)

      // Init
      this.getWindowWidth()
      this.getWindowHeight()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth)
    window.removeEventListener('resize', this.getWindowHeight)
  },

  methods: {
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth

      /*
      Work around Webkit Bug 149899 - Responsive images (srcset, sizes, w) don't load higher resolution when viewport is enlarged.
      See: https://bugs.webkit.org/show_bug.cgi?id=149899
      */

      document
        .querySelectorAll('img[sizes],source[sizes]')
        .forEach((source) => (source.sizes += ''))
    },

    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight
    }
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

    @include font-scale0;
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

  &.footnotes-link-back {
    text-decoration: none;
  }
}

cite {
  font-style: italic;
}

figcaption {
  @include font-scale-1;

  font: {
    weight: 500;
  }
  margin-left: 0.05em;
  margin-top: 0.25em;
  max-width: 90vw;

  img.v-lazy-image + & {
    opacity: 0;
    transition: opacity 1.1s;
    transition-delay: 0.5s;
  }
  img.v-lazy-image-loaded + & {
    opacity: 1;
  }
}

h2 {
  font-weight: 600;
}

p {
  hyphens: auto;

  &.lead {
    @include font-scale2;
    font-size: calc(1.2rem + 0.25vw);
    line-height: $scale2 * 1em;
    max-width: 65rem !important;
  }
}

section.full-height {
  align-content: center;
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  hyphens: manual;
  justify-content: center;
  padding: 3rem 0;

  img,
  video {
    background: white;
    max-height: 75vh;
    max-width: 80vw;
    z-index: 0;

    &.v-lazy-image {
      opacity: 0;
      transform: translate3d(0, 10vh, 0);
      transition: opacity 2s, transform 1s;
    }
    &.v-lazy-image-loaded {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      box-shadow: 0 1rem 4rem 0 rgba(0, 0, 0, 0.15);
    }
  }

  p {
    margin: 5vw;
    max-width: 40rem;
  }

  &#footnotes {
    li {
      @include font-scale-1;
      line-height: $scale2 * 1rem;
      margin: auto calc(5vw + 2em);
      max-width: 80vw;
    }
  }
}

sup {
  @include font-scale-2;
  font: {
    weight: 600;
  }
  vertical-align: super;
}

ul {
  list-style-type: '—     ';
}

.flex-row-wrap {
  display: flex;
  flex-flow: row wrap;
  * {
    flex: auto;
  }
}

.full-height {
  min-height: 100vh;
}

.hyphens-auto {
  hyphens: auto;
}

.hyphens-manual {
  hyphens: manual;
}

.nowrap {
  white-space: nowrap;
  hyphens: none;
}

.page-enter-active {
  animation: upwardsIn 0.5s ease-out both;
}

.page-leave-active {
  animation: upwardsOut 0.1s ease-in both;
}

.snap {
  scroll-snap-align: center;
}
</style>
