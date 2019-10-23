<template>
  <div>
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
  }
}
</script>
<style></style>
