import Vue from 'vue'
Vue.mixin({
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.$router) {
        vm.$router.referrer = from
      }
    })
  },

  beforeRouteUpdate(to, from, next) {
    if (this.$router) {
      this.$router.referrer = from
    }
    next()
  }
})
