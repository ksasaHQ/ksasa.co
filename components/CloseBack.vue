<template>
  <a @click="router()">&times;</a>
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
<style scoped lang="scss">
a {
  font-size: 4rem;
  font-weight: 200;
  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 100;

  &:hover {
    border-bottom: none;
    box-shadow: none;
    cursor: pointer;
  }
}
</style>
