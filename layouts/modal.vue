<template>
  <div id="modal">
    <CloseBack />
    <nuxt />
  </div>
</template>
<script type="text/javascript">
import CloseBack from '~/components/CloseBack.vue'
export default {
  components: {
    CloseBack
  },
  layoutTransition: 'slideUp'
}
</script>
<style lang="scss">
.slideUp-enter-active {
  animation: upwardsIn 0.5s ease-out;
}

.slideUp-leave-active {
  animation: upwardsOut 0.1s ease-in;
}
</style>
