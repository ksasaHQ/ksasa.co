<template>
  <a class="CloseBack" @click="router()">&times;</a>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      router:
        this.$router.referrer !== undefined
          ? function() {
              this.$router.go(-1)
            }
          : function() {
              this.$router.push('/')
            }
    }
  }
}
</script>
<style lang="scss">
a.CloseBack {
  @include font-scale6;
  //font-size: 4rem;
  font-weight: 200;
  position: fixed;
  right: 1rem;
  top: 0rem;
  z-index: 100;

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
}
</style>
